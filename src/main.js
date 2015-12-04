/* global __DEV__ */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Revue from 'revue'
import store from './store'

if (__DEV__) {
  window.ReduxStore = store
}
Vue.use(Revue, { store })
Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/': {
    component: require('./views/home')
  },
  '/about': {
    component: require('./views/about')
  }
})

router.start(require('./app'), '#app')
