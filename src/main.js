/* global __DEV__ */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Revue from 'revue'
import store from './store'
import  * as actions from './actions'
import routes from './routes'

Vue.use(Revue, { store, actions })
Vue.use(VueRouter)

if (__DEV__) {
  window.ReduxStore = store
  window.Vue = Vue
}

const router = new VueRouter()
router.map(routes)
router.start(require('./app'), '#app')
