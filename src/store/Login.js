const state = { isLogin: false };

const getters = {
  getLogin: (state) => {
    return state.isLogin;
  },
};

const mutations = {
  setLogin: (state, payload) => {
    state.isLogin = payload;
  },
};

const actions = {
  onLogin: ({ commit }, payload) => {
    commit("setLogin", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
