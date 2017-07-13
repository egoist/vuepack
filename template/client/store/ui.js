const state = {
  menuOpen: false
}

const actions = {
}

const mutations = {
  TOGGLE_MENU (state) {
    state.menuOpen = !state.menuOpen
  }
}

const module = {
  state,
  actions,
  mutations
}

export default module
