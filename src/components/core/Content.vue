<template>
  <v-main id="Content">
    <v-fade-transition>
      <router-view></router-view>
    </v-fade-transition>
  </v-main>
</template>

<script>
export default {}
</script>
<style>
.Content {
  position: relative;
  top: 10%;
}
</style>
