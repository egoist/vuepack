import Vue from 'vue'
import Vuex from 'vuex'

import ui from 'store/ui'
import demo from 'store/demo'

Vue.use(Vuex)

const modules = {
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
