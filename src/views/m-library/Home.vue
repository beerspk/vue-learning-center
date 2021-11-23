<template>
  <div id="Home" :class="isMobile ? 'bg-mobile' : 'bg-web'">
    <v-container class="fill-height d-flex" fluid>
      <v-row justify="center">
        <v-col cols="12" md="11">
          <h1 style="color: #644117;">
            Sustainable Supply Chain
          </h1>
        </v-col>

        <v-col cols="12" md="11">
          <h3 style="color: #644117;">
            Enhancing sustainability in corporate social responsibility
          </h3>
        </v-col>

        <v-col cols="12" md="11"></v-col>

        <v-col cols="12" md="11">
          <p>
            We support our suppliers to build a stronger competitive
          </p>
          <p>
            edge in order to establish a sound corporate ecosystem and a
          </p>
          <p>
            sustainable supply chain
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import CardIcon from '@/components/CardIcon'
export default {
  components: {
    //   CardIcon,
  },
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
p {
  font-size: 14px;
  font-weight: 600;
}
</style>
