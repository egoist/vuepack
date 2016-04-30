import * as types from '../mutation-types'

const state = {
  count: 0
}

const mutations = {
  [types.INCREMENT](state) {
    state.count++
  },
  [types.DECREMENT](state) {
    state.count--
  },
}

export default {
  state,
  mutations
}
