import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import actions from './actions'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  count: 0,
}

const mutations = {
  [types.INCREMENT](state) {
    state.count++
  },
  [types.DECREMENT](state) {
    state.count--
  },
}

const middlewares = []

if (__DEV__) {
  middlewares.push(createLogger())
}

export default new Vuex.Store({
  mutations,
  state,
  middlewares
})
