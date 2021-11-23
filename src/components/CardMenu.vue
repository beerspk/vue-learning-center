<template>
  <v-hover v-slot="{ hover }">
    <div>
      <v-row align="start" justify="center">
        <v-card
          @click="hover = false"
          class="d-flex justify-center align-center zoom"
          color="black"
          height="120"
          width="250"
        >
          <div class="white--text">{{ name }}</div>
        </v-card>
      </v-row>
      <v-row v-if="hover" align="start" justify="space-around" class="mt-10">
        <ul v-if="hover">
          <li v-for="(item, index) in items" :key="index">
            <div style="font-size: 14px;">
              {{ item.name }}
            </div>
          </li>
        </ul>
      </v-row>
    </div>
  </v-hover>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
}
</script>

<style scoped>
.zoom {
  transition: transform 0.2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
