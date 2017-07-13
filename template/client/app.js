import Vue from 'vue'{{#ganalytics}}
import VueAnalytics from 'vue-analytics'
{{/ganalytics}}
import { sync } from 'vuex-router-sync'
import App from './views/App'
import router from './router'
import store from './store'
import Log from './plugins/log'

Vue.use(Log)

{{#ganalytics}}
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-XXXXXXXXX-X',
    router
  })
} else {
  console.log(`Google Analytics are disabled in development environment (${process.env.NODE_ENV}).`)
}

{{/ganalytics}}

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
