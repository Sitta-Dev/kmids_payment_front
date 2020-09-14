<template>
  <v-app id="loginparent" style="background-color:#252778;">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="12">
          <center>
            <v-img
              src="../../assets/KMIDSLogo.png"
              max-width="230"
              max-height="300"
              aspect-ratio="0.1"
            ></v-img>
          </center>
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="#2e3192" dark flat>
              <v-toolbar-title>KMIDS:Login</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="validate" lazy-validation>
                <v-text-field
                  label="Student ID"
                  name="email"
                  prepend-icon="mdi-school"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  required
                />

                <v-text-field
                  id="password"
                  label="Citizen ID"
                  name="password"
                  prepend-icon="mdi-account"
                  type="password"
                  v-model="password"
                  :rules="PassRules"
                  required
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <a @click="onClickNewStud()">Link >> แนบข้อมูลการชำระเงินสำหรับนักเรียนใหม่</a>
            </v-card-actions>

            <v-card-actions>
              <v-spacer />
              <v-btn color="#2e3192" v-on:click.native="test()" dark>Login</v-btn>
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
  name: "Loginparent",
  data() {
    return {
      email: "",
      password: "",
      PassRules: [
        (v) => !!v || "Citizen ID is required",
        (v) => v.length <= 13 || "Citizen ID must be less than 13 characters",
      ],
      error: null,
      emailRules: [
        (v) => !!v || "Sutdent ID is required",
        (v) => v.length <= 7 || "Sutdent ID must be less than 7 characters",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      this.snackbar = true;
    },
    async test() {
      try {
        await Login.Loginparent({
          studentid: this.email,
          parentid: this.password,
        }).then((response) => {
          // console.log(response);
          if (response.data.success) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch("setstudentid", response.data.data.studentid);
            this.$store.dispatch(
              "setstudant_name",
              response.data.data.studant_name
            );
            this.$store.dispatch("setgrade", response.data.data.grade);
            this.$store.dispatch(
              "setparent_name",
              response.data.data.parent_name
            );
            this.$router.push({
              name: "invoiceparent",
            });
          } else {
            return confirm("กรุณาลองใหม่อีกครั้งค่ะ  " + response.data.message);
          }
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    onClickNewStud() {
      const routeData = this.$router.resolve({
        name: "paymentCheckNewStud",
        // query: { data: "someData" },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style></style>
