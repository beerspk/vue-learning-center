<template>
  <div id="header">
    <v-row no-gutters align="center" style="height: 100%;">
      <!-- Left Header -->
      <v-col cols="10" md="5">
        <v-row align="center" justify="start">
          <v-col
            class="d-flex justify-center pa-0"
            cols="3"
            sm="2"
            lg="1"
            v-if="$route.name !== 'Home' && $route.name !== 'Join'"
          >
            <v-btn @click="onSetShowMenu(!getShowMenu)" icon>
              <v-icon size="35px" color="white">
                mdi-menu
              </v-icon>
            </v-btn>
          </v-col>
          <v-col class="d-flex pa-0" cols="9" lg="11">
            <div
              :class="`pointer ${isMobile ? '' : 'pl-4 pr-4 pt-1 pb-1'} ${
                $route.name === 'Home' || $route.name === 'Join' ? 'pl-5' : ''
              }`"
              @click="$router.push({ name: 'Home' }).catch(() => {})"
            >
              <h4 v-if="isMobile">
                Partner Collaboration Center
              </h4>
              <h2 v-else>Partner Collaboration Center</h2>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-if="!getLogin"
        :class="`d-flex justify-end ${
          isMobile || $vuetify.breakpoint.name ? '' : 'pr-10'
        }`"
        cols="2"
        md="7"
      >
        <v-btn
          color="white"
          dark
          text
          @click="$router.push({ name: 'Join' }).catch((err) => {})"
        >
          <v-icon>mdi-login</v-icon>
          <div v-if="!isMobile">
            Login
          </div>
        </v-btn>
      </v-col>

      <v-row
        justify="space-around"
        align="center"
        v-if="getLogin"
        class="hidden-sm-and-down"
      >
        <v-col cols="1">
          <div class="header_menu">
            About
          </div>
        </v-col>
        <v-col cols="1">
          <div class="header_menu">
            Podcast
          </div>
        </v-col>
        <v-col cols="1">
          <div class="header_menu">
            Practice
          </div>
        </v-col>
        <v-col cols="1">
          <div class="header_menu">
            Update
          </div>
        </v-col>
        <v-col cols="1">
          <div class="header_menu">
            Admin
          </div>
        </v-col>
        <v-col cols="1">
          <div class="header_menu">
            TH/EN
          </div>
        </v-col>
        <v-col cols="1" class="mr-5">
          <div class="header_menu d-flex">
            <v-avatar size="50">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-icon color="white" medium>
              mdi-chevron-down
            </v-icon>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getLogin: 'Login/getLogin',
    }),
  },
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  data: () => ({ isMobile: false }),
  beforeDestroy() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  computed: {
    ...mapGetters({
      getShowMenu: 'menu/getShowMenu',
      getLogin: 'Login/getLogin',
    }),
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600
    },
    ...mapActions({
      onSetShowMenu: 'menu/onSetShowMenu',
    }),
  },
}
</script>

<style>
#header {
  background-color: rgba(0, 0, 0, 1);
  /*Opacity start*/
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
  filter: alpha(opacity=80);
  -moz-opacity: 0.8;
  -khtml-opacity: 0.8;
  opacity: 0.8;
  /*Opacity end*/
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0;
  z-index: 1;
}
.header_menu {
  cursor: pointer;
}
</style>
