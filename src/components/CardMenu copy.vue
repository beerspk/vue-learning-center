<template>
  <div id="CardMenu">
    <v-hover v-slot="{ hover }">
      <div>
        <v-row align="start" justify="center" class="blue">
          <v-card
            class="d-flex justify-center align-center zoom"
            color="black"
            height="150"
            width="250"
          >
            <div class="white--text">
              {{ name }}
            </div>
          </v-card>
        </v-row>
        <v-row
          style="height: 100px;"
          align="start"
          justify="space-around"
          class="mt-10"
        >
          <ul v-if="hover">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </v-row>
      </div>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
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
