<template>
  <div id="Navigation">
    <v-navigation-drawer
      absolute
      width="400px"
      :value="true"
      flat
      color="rgba(0, 0, 0, 0)"
      style="padding-top: 120px;"
    >
      <v-row justify="center">
        <v-col cols="6">
          <card-icon
            icon="mdi-account-multiple-plus"
            text="Join"
            routeName="Join"
          />
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>
<script>
import CardIcon from '../CardIcon.vue'
export default {
  components: {
    CardIcon,
  },
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
}
</script>

<style></style>
