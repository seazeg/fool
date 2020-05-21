import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/layout/index'
import './utils/directive'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'animate.css'
import 'element-ui/lib/theme-chalk/index.css';
import Navigation from 'vue-navigation'
import './assets/icons/fonts/iconfont.css'

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