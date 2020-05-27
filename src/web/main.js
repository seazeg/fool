import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/layout/index'
import './utils/directive'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import Navigation from 'vue-navigation'
import {utils} from './utils/utils.js'
import draggable from "vuedraggable";

import './styles/reset.less';
import './styles/base.less';
import 'animate.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icons/fonts/iconfont.css'
import './styles/theme.less';


import './views/Selector/index'

Vue.use(ElementUI)
Vue.use(Navigation, {
  router,
  store
})
Vue.component(draggable.name,draggable)

Vue.prototype.$utils = utils


window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')