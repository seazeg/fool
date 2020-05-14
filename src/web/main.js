import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/base.less'
import './assets/styles/sys.less'
import './assets/styles/settings.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Navigation from 'vue-navigation'

Vue.use(ElementUI)
Vue.use(Navigation, {
  router,
  store
})

Vue.prototype.transition = 'slide-left'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')