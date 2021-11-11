<template>
  <div id="CardIcon" class="zoom">
    <v-card flat @click="$router.push({ name: routeName }).catch(() => {})">
      <v-card-title class="d-flex justify-center">
        <v-icon size="50px" color="black">
          {{ icon }}
        </v-icon>
      </v-card-title>
      <v-card-text class="d-flex justify-center">
        <div :class="`text-center text-sm-h6`" :style="`color:${textColor};`">
          {{ text }}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    text: {
      type: String,
    },
    textColor: {
      type: String,
      default: 'black',
    },
    routeName: {
      type: String,
    },
  },
}
</script>

<style>
.zoom {
  padding: 10px;
  transition: transform 0.2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(
    1.3
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
