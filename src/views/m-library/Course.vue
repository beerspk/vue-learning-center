<template>
  <div id="Course" class="Content">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 v-if="$vuetify.breakpoint.mobile">{{ $route.params.course }}</h2>
          <h1 v-else>{{ $route.params.course }}</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
