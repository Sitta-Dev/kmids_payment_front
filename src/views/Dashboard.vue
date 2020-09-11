<template>
  <v-app id="home">

    <v-navigation-drawer
      v-model="drawer"
      app
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      width="200"
    >
      <v-list dense>
        <v-list-item to="/dashboard/panel">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>paenl</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/dashboard/admission">
          <v-list-item-action>
            <v-icon>mdi-school</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>admission</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
<!-- 
        <v-list-item to="/dashboard/dormitory" disabled>
          <v-list-item-action>
            <v-icon>mdi-domain</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dormitory</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/dashboard/rotc" disabled>
          <v-list-item-action>
            <v-icon>mdi-biathlon</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ROTC</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item to="/dashboard/payment">
          <v-list-item-action>
            <v-icon>mdi-biathlon</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Payment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item to="/" v-on:click.native="logout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- munu top bar -->

    <v-app-bar app color="#2e3192" dark clipped-left hide-on-scroll dense>
      <v-app-bar-nav-icon
      :clipped-left="$vuetify.breakpoint.lgAndUp"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center ">
        <router-link to="/dashboard/panel">
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

      <v-toolbar-title >KMIDS Payment Platform</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/dashboard/panel" text>
          <span class="mr-2">panel</span>
        </v-btn>
        <!-- <v-btn to="/dashboard/admission" text>
          <span class="mr-2">admission</span>
        </v-btn>
        <v-btn to="/dashboard/dormitory" text disabled>
          <span class="mr-2">Dormitory</span>
        </v-btn>
        <v-btn to="/dashboard/rotc" text disabled>
          <span class="mr-2">ROTC</span>
        </v-btn>
         <v-btn to="/dashboard/payment" text >
          <span class="mr-2">Payment</span>
        </v-btn> -->
      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn color="white" v-on:click.native="logout" text >
          logout
          <v-icon color="white">mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
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

      <v-card flat tile class=" white--text text-center flex" color="#2e3192">
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
          <strong
            >KMIDS - King Mongkut's Institute of Technology Ladkrabang
            International Demonstration School</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  name: "home",
  data: () => ({
    drawer: false,
    fab: false,
    icons: [
      {
        icon: "mdi-facebook-box",
        link: "https://www.google.co.th/"
      },
      {
        icon: "mdi-twitter-box",
        link: "https://www.google.co.th/"
      },
      {
        icon: "mdi-google-plus",
        link: "https://www.google.co.th/"
      },
      {
        icon: "mdi-instagram",
        link: "https://www.google.co.th/"
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.google.co.th/"
      }
    ]
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
    logout () {
      this.$store.dispatch("setToken",null)
      this.$store.dispatch("setuuid",null)
      this.$store.dispatch("setemail",null)
      this.$store.dispatch("setusername",null)
      this.$store.dispatch("setRole",null)
      this.$router.push({
        name: 'Home'
      })
    }
  }
};
</script>

<style>
span.portal {
  color: #2e3192;
}
.myFont {
  font-family: 'Mansalva', cursive; 
}
</style>
