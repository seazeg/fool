import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const navInfo = [{
  path: '/editor',
  name: 'editor',
  component: () => import( /* webpackChunkName: "button" */ './components/layout/layout-view.vue'),
  meta: {
    lname: '按钮',
    icon: "icon-anniu",
  }
}, {
  path: '/selector',
  name: 'selector',
  component: () => import( /* webpackChunkName: "button" */ './views/Selector/selector.vue'),
  meta: {
    lname: '下拉框',
    icon: "icon-xialakuangbiaodan",
  }
}, {
  path: '/input',
  name: 'input',
  component: () => import( /* webpackChunkName: "button" */ './views/Input/input.vue'),
  meta: {
    lname: '输入框',
    icon: "icon-duoxuanyixuan",
  }
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: () => import( /* webpackChunkName: "button" */ './views/Checkbox/checkbox.vue'),
  meta: {
    lname: '多选框',
    icon: "icon-danhangshurukuang",
  }
}, {
  path: '/radio',
  name: 'radio',
  component: () => import( /* webpackChunkName: "button" */ './views/Radio/radio.vue'),
  meta: {
    lname: '单选框',
    icon: "icon-danxuanyixuan",
  }
}, {
  path: '/table',
  name: 'table',
  component: () => import( /* webpackChunkName: "button" */ './views/Table/table.vue'),
  meta: {
    lname: '表格',
    icon: "icon-duoxuanyixuan",
  }
}, {
  path: '/pager',
  name: 'pager',
  component: () => import( /* webpackChunkName: "button" */ './views/Pager/pager.vue'),
  meta: {
    lname: '分页器',
    icon: "icon-duoxuanyixuan",
  }
}, {
  path: '/form',
  name: 'form',
  component: () => import( /* webpackChunkName: "button" */ './views/Pager/pager.vue'),
  meta: {
    lname: '表单',
    icon: "icon-duoxuanyixuan",
  }
}]


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
    ...navInfo
  ]
})