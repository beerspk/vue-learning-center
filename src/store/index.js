import Vue from "vue";
import Vuex from "vuex";
import menu from "../store/menu";
import Login from "../store/Login";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    Login,
  },
});
