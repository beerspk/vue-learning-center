const state = { showMenu: false, menuItem: [] };

const getters = {
  getShowMenu: (state) => {
    return state.showMenu;
  },
  getMenuItem: (state) => {
    return state.menuItem;
  },
};

const mutations = {
  setShowMenu(state, payload) {
    state.showMenu = payload;
  },
  setMenuItem(state, payload) {
    state.menuItem = payload;
  },
};

const actions = {
  onSetShowMenu({ commit }, payload) {
    commit("setShowMenu", payload);
  },
  onSetMenuItem({ commit }, payload) {
    commit("setMenuItem", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
