import getDemoData from 'api/getDemoData'

const state = {
  demodata: [],
  loading: false,
  loaded: false,
  error: false,
}

const actions = {
  loadDemoData ({ commit }) {
    commit('DEMODATA_LOAD')
    getDemoData().then((response) => {
      commit('DEMODATA_SAVE', response)
    })
    .catch((error) => {
      commit('DEMODATA_CANCEL_LOAD')
      commit('DEMODATA_ERROR', error)
      /**
       * You could also emit a global error here that then triggers the
       * <Error /> view in the <App /> component. For example if you use a store
       * to load a single post and the api returns a 404. Then it could make sense
       * to dispatch it like so:
       *
       *   // ...
       *   .catch((error) => {
       *     commit('DEMODATA_CANCEL_LOAD')
       *     commit('DEMODATA_ERROR', error)
       *     dispatch('error', { error })
       *   })
       *
       **/
    })
  }
}

const mutations = {
  DEMODATA_LOAD (state, data) {
    state.loading = true
  },
  DEMODATA_CANCEL_LOAD (state) {
    state.loading = false
  },
  DEMODATA_ERROR (state, error) {
    state.error = error
    state.loading = false
  },
  DEMODATA_SAVE (state, data) {
    state.demodata = data
    state.loaded = true
    state.loading = false
    state.error = false
  },
}

const module = {
  state,
  actions,
  mutations
}

export default module
