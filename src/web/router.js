import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const navInfo = [{
  path: '/editor',
  name: 'editor',
  component: () => import( /* webpackChunkName: "button" */ './components/layout/layout-editor.vue'),
}]


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/editor'
    },
    ...navInfo
  ]
})