<template>
  <div id="Join" :class="isMobile ? 'bg-mobile' : 'bg-web'">
    <v-container class="fill-height d-flex align-end"></v-container>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Home',
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960
    },
  },
  data() {
    return { isMobile: false }
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
}
</script>

<style scoped>
.line {
  border: solid 8px lightblue;
}
</style>
