import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/reset.less'
import './assets/styles/sys.less'
import ElementUI from 'element-ui'
import 'animate.css'
import 'element-ui/lib/theme-chalk/index.css';
import Navigation from 'vue-navigation'
import './assets/icons/iconfont/iconfont'

Vue.use(ElementUI)
Vue.use(Navigation, {
  router,
  store
})

Vue.prototype.transition = 'slide-none'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')