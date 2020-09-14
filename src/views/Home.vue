<template>
  <v-app id="home">
    <v-navigation-drawer v-model="drawer" app clipped fixed temporary width="200">
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/invoiceparent" v-if="$store.state.isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-file-send-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>invoice list</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/admission" v-if="!$store.state.isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-school</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>admission</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/transaction" v-if="$store.state.isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-school</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/loginparent" v-if="!$store.state.isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Loginparent</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/login" v-if="!$store.state.isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>LoginStaff</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout" v-if="$store.state.isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- munu top bar -->
    <v-toolbar color="#2e3192" dark hide-on-scroll dense fixed max-height="50">
      <v-app-bar
        app
        color="#2e3192"
        dark
        clipped-left
        hide-on-scroll
        dense
        fixed
        max-width="1100"
        class="mx-auto elevation-0"
      >
        <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <div class="d-flex align-center">
          <router-link to="/">
            <v-img
              alt="KMIDS LOGO"
              class="shrink mr-2"
              contain
              src="../assets/KMIDSLogo.png"
              transition="scale-transition"
              width="40"
            />
          </router-link>
        </div>

        <v-toolbar-title>KMIDS Payment Platform</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down navbarsetup">
          <v-btn to="/" text>
            <span class="mr-2">home</span>
          </v-btn>
          <v-btn v-if="$store.state.isUserLoggedIn" to="/invoiceparent" text>
            <span class="mr-2">invoice list</span>
          </v-btn>
          <v-btn v-if="$store.state.isUserLoggedIn" to="/transaction" text>
            <span class="mr-2">History</span>
          </v-btn>
          <v-menu offset-y v-if="!$store.state.isUserLoggedIn">
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">Payment</v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in payment" :key="i" :to="item.link">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-menu offset-y v-if="!$store.state.isUserLoggedIn">
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                <v-icon color="white">mdi-login</v-icon>Login
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in login" :key="i" :to="item.link">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn text @click="logout" v-if="$store.state.isUserLoggedIn">
            <v-icon color="white">mdi-login</v-icon>Logout
          </v-btn>
        </template>
      </v-app-bar>
    </v-toolbar>
    <!-- manu top bar -->

    <v-content>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>

    <v-footer dark padless>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        dark
        fab
        fixed
        bottom
        right
        color="pink accent-3"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>

      <v-card flat tile class="white--text text-center flex" color="#2e3192">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            :href="icon.link"
            target="_bank"
          >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>
            KMIDS - King Mongkut's Institute of Technology Ladkrabang
            International Demonstration School
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  name: "Home",
  data: () => ({
    drawer: false,
    fab: false,
    icons: [
      {
        icon: "mdi-facebook-box",
        link: "https://www.google.co.th/",
      },
      {
        icon: "mdi-twitter-box",
        link: "https://www.google.co.th/",
      },
      {
        icon: "mdi-google-plus",
        link: "https://www.google.co.th/",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.google.co.th/",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.google.co.th/",
      },
    ],
    payment: [
      { title: "admission", link: "/admission" },
      // { title: "Dormitory", link: "/dormitory" },
      // { title: "ROTC", link: "/rotc" },
      // { title: "Any activeity", link: "/#" }
    ],
    login: [
      { title: "Parent", link: "/loginparent" },
      { title: "Staff", link: "/login" },
    ],
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setstudentid", null);
      this.$store.dispatch("setstudant_name", null);
      this.$store.dispatch("setgrade", null);
      this.$store.dispatch("setparent_name", null);
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style>
span.portal {
  color: #2e3192;
}
.myFont {
  font-family: "Angsana New", cursive;
}
</style>
