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
import Header from "@/components/core/Header";
import Content from "@/components/core/Content";
import Footer from "@/components/core/Footer";
export default {
  components: {
    Header,
    Content,
    Footer,
  },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
<style>
.bg-svg {
  height: 100vh;
  width: 100vw;
  background-image: url("../src/assets/background/vueschool_hero.svg");
  background-size: 140%;
  background-position: 100% 100%;
  background-repeat: no-repeat;
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
