/* global __DEV__ */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Revue from 'revue'
import store from './store'
import routes from './routes'

if (__DEV__) {
  window.ReduxStore = store
}
Vue.use(Revue, { store })
Vue.use(VueRouter)

const router = new VueRouter()
router.map(routes)
router.start(require('./app'), '#app')
