<template>
  <div id="App">
    <v-app>
      <Navigation v-if="$route.name !== 'Home' && $route.name !== 'Join'" />
      <Content />
      <Header />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/core/Header'
import Content from '@/components/core/Content'
import Footer from '@/components/core/Footer'
import Navigation from './components/core/Navigation.vue'
export default {
  components: {
    Header,
    Content,
    Footer,
    Navigation,
  },
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: SAMSUNGSHARPSANS;
}
@font-face {
  font-family: SAMSUNGSHARPSANS;
  src: url('assets/font/SAMSUNGSHARPSANS-REGULAR_1.OTF') format('opentype');
}
@font-face {
  font-family: SAMSUNGSHARPSANS;
  src: url('assets/font/SAMSUNGSHARPSANS-BOLD_1.OTF') format('opentype');
  font-weight: 700;
}
h1,
h2,
h3,
h4 {
  font-family: SAMSUNGSHARPSANS;
  font-weight: 700;
}
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
  background-position: 40%;
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

.pointer:hover {
  border-radius: 20px 20px 20px 20px;
  cursor: pointer;
  background-color: rgba(30, 30, 30, 0.7) !important;
}

/* .pointer:hover {
  cursor: pointer;
  background: currentColor;
  border-radius: 20px 20px 20px 20px;
} */
</style>
