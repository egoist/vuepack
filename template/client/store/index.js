import Vue from 'vue'
import Vuex from 'vuex'

import ui from 'store/ui'
import demo from 'store/demo'
/*! scaffold:import:module */

Vue.use(Vuex)

const modules = {
  /*! scaffold:insert:module */
  ui,
  demo
}

const getters = {
}

const store = new Vuex.Store({
  modules,
  getters
})

export default store
