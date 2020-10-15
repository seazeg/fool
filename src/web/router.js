/*
 * @Author       : Evan.G
 * @Date         : 2020-05-18 15:06:51
 * @LastEditTime : 2020-10-14 18:11:10
 * @Description  : 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const navInfo = [{
  path: '/editor',
  name: 'editor',
  component: () => import( /* webpackChunkName: "button" */ './components/layout/layout-editor.vue'),
},{
  path: '/demo',
  name: 'demo',
  component: () => import( /* webpackChunkName: "demo" */ './demo.vue'),
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