<template>
  <div id="Navigation">
    <v-navigation-drawer
      absolute
      :width="`${isMobile ? '65%' : '20%'}`"
      flat
      :value="getShowMenu"
      style="padding-top: 120px;"
    >
      <v-row justify="center">
        <v-col cols="7" v-for="(menu, index) in getMenuItem" :key="index">
          <card-icon
            :icon="menu.icon"
            :text="menu.text"
            :routeName="menu.routeName"
            :textColor="menu.textColor"
          />
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CardIcon from '../CardIcon.vue'
export default {
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  computed: {
    ...mapGetters({
      getShowMenu: 'menu/getShowMenu',
      getMenuItem: 'menu/getMenuItem',
    }),
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960
    },
  },
  components: {
    CardIcon,
  },
  data() {
    return {
      isMobile: false,

      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
}
</script>

<style></style>
