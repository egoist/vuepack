import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './views/App'
import router from './router'
import store from './store'
import Log from './plugins/log'

Vue.use(Log)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
