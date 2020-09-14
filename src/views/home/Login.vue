<template>
  <v-app id="Login">
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="12" xs="12">
          <center>
            <v-img
              src="../../assets/KMIDSLogo.png"
              max-width="230"
              max-height="300"
              aspect-ratio="0.1"
            ></v-img>
          </center>
        </v-col>
        <v-col cols="12" sm="8" md="4" xs="12">
          <v-card class="elevation-12">
            <v-toolbar color="#2e3192" dark flat>
              <v-toolbar-title>KMIDS:Login Staff</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  label="E-mail@kmids.ac.th"
                  name="email"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  required
                />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                  :rules="PassRules"
                  required
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="#2e3192" v-on:click.native="validate" dark>Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import Login from "../../services/authentication";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      PassRules: [(v) => !!v || "Password is required"],
      error: null,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@kmids.ac.th+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        const fdloin = {
          email: this.email,
          password: this.password,
        };
        const response = await Login.Login(fdloin);
        // console.log(response.data);
        if (response.data.success) {
          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setuuid", response.data.data.uuid);
          this.$store.dispatch("setemail", response.data.data.email);
          this.$store.dispatch("setusername", response.data.data.username);
          this.$store.dispatch("setRole", response.data.data.role);
        }
        if (
          response.data.data.role === "admin" ||
          response.data.data.role === "finance"
        ) {
          this.$router.push({
            name: "panel",
          });
        }
        if (response.data.data.role === "admission") {
          this.$router.push({
            name: "admissiondas",
          });
        }
      }
    },
  },
};
</script>
