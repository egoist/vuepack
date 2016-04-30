/* global __DEV__ */
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'
import routes from './routes'

Vue.use(VueRouter)

if (__DEV__) {
  window.VueDev = Vue
}

const router = new VueRouter()
router.map(routes)
router.start(app, '#app')
