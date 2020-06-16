import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/layout/index";
import "./components/controls/register.js";
import http from './utils/request.js'

import "./utils/directive";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import Navigation from "vue-navigation";
import VueClipboard from 'vue-clipboard2'
import $ from 'jquery'
import egu from 'eg-utils';
import draggable from "vuedraggable";

import 'vue-color-gradient-picker/dist/index.css';
import "./styles/reset.less";
import "./styles/base.less";
import "animate.css";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icons/fonts/iconfont.css";
import "./styles/theme.less";



Vue.use(ElementUI);
Vue.use(Navigation, {
    router,
    store,
});
Vue.use(VueClipboard)
Vue.component(draggable.name, draggable);

window.$egu = egu
window.$ = $;
window.$http = http

window.vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
