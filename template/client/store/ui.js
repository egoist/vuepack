const state = {
  menuOpen: false
}

const mutations = {
  TOGGLE_MENU (state) {
    state.menuOpen = !state.menuOpen
  }
}

const actions = {
}

const module = {
  state,
  mutations,
  actions
}

export default module
