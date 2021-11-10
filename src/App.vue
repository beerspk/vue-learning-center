<template>
  <div id="App">
    <v-app>
      <Header />
      <Content />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/core/Header'
import Content from '@/components/core/Content'
import Footer from '@/components/core/Footer'
export default {
  components: {
    Header,
    Content,
    Footer,
  },
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
<style>
.bg-web {
  height: 100%;
  width: 100%;
  background-image: url('../src/assets/background/Home_BG.jpg');
  background-size: cover;
  background-position: 100% 100%;
  background-repeat: no-repeat;
}
.bg-mobile {
  height: 100%;
  width: 100%;
  background-position: 100% 100%;
  background-image: url('../src/assets/background/Home_BG.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.block {
  display: block;
}
.absolute {
  position: absolute;
}
.pin-b {
  bottom: 0;
}
.pin-r {
  right: 0;
}
.z-0 {
  z-index: 0;
}
h1,
h2,
h3,
h4,
h5 {
  font-weight: 400;
}
</style>
