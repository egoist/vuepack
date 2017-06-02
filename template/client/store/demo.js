import getDemoData from 'api/getDemoData'

const state = {
  demodata: [],
  loading: false,
  error: false
}

const mutations = {
  SAVE_DEMODATA (state, data) {
    state.demodata = data
  }
}

const actions = {
  loadDemoData ({ commit }) {
    getDemoData().then((response) => {
      commit('SAVE_DEMODATA', response)
    })
  }
}

const module = {
  state,
  mutations,
  actions
}

export default module
