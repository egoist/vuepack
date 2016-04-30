import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import app from './modules/app'

Vue.use(Vuex)

const middlewares = []

if (__DEV__) {
  middlewares.push(createLogger())
}

const store = new Vuex.Store({
  modules: {
    app
  },
  middlewares
})

export default store

if (module.hot) {
  module.hot.accept([
    './modules/app'
  ], () => {
    try {
      store.hotUpdate({
        modules: {
          app: require('./modules/app').default
        }
      })
    } catch (e) {
      console.log(e.stack)
    }
  })
}
