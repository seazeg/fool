import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/button'
    },
    {
      path: '/initialPage',
      name: 'initialPage',
      component: () => import( /* webpackChunkName: "button" */ './views/Button/button.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import( /* webpackChunkName: "button" */ './views/Button/button.vue')
    },
    {
      path: '/selector',
      name: 'selector',
      component: () => import( /* webpackChunkName: "button" */ './views/Selector/selector.vue')
    }
  ]
})