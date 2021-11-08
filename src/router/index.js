import Vue from "vue";
import VueRouter from "vue-router";
import m_library_route from "./m-library";
Vue.use(VueRouter);

const routes = [...m_library_route];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
