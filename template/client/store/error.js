const state = {
  status: 0,
  statusMessage: ''
}

const actions = {
  error ({ commit, dispatch, state }, payload = {}) {
    const { error } = payload
    commit('ERROR_SET', error)
  },
  resetError ({ commit, dispatch, state }) {
    if (state.status !== 0) {
      commit('ERROR_RESET')
    }
  }
}

const mutations = {
  ERROR_SET (state, payload = {}) {
    const { status, statusMessage } = payload
    state.status = status || 0
    state.statusMessage = statusMessage || ''
  },
  ERROR_RESET (state) {
    state.status = 0
    state.statusMessage = ''
  }
}

const getters = {
}

const module = {
  state,
  actions,
  mutations,
  getters
}

export default module
