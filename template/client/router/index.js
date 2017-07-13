import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Error from '../views/Error'
/*! scaffold:import:route */

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    /*! scaffold:insert:route */
    {
      path: '*',
      name: 'NotFound',
      component: Error
    }
  ]
})
