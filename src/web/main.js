/*
 * @Author       : Evan.G
 * @Date         : 2020-05-18 15:06:51
 * @LastEditTime : 2021-03-10 18:02:27
 * @Description  : 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/layout/index";
import "./components/controls/register.js";
import http from "./utils/request.js";

import "./utils/directive";
import "./registerServiceWorker";
import ElementUI from "element-ui";

import VueClipboard from "vue-clipboard2";

import VueContextMenu from './components/plugins/contextMenu/main'

import $ from "jquery";
import egu from "eg-utils";
import draggable from "vuedraggable";

import "vue-color-gradient-picker/dist/index.css";
import "./styles/reset.less";
import "animate.css";
import "./styles/global/theme/index.css";
import "./assets/icons/fonts/iconfont.css";
import "./assets/icons/fonts/hopeui/hopefont.css";
import "./styles/theme.less";



import vdr from './components/plugins/vue-draggable-resizable-gorkys'
import './components/plugins/vue-draggable-resizable-gorkys/components/vue-draggable-resizable.css'
Vue.component('vdr', vdr)


Vue.use(ElementUI);
// Vue.use(Navigation, {
//     router,
//     store,
// });
Vue.use(VueClipboard);
Vue.use(VueContextMenu)
Vue.component(draggable.name, draggable);

window.$egu = egu;
window.$ = $;
window.$http = http;
window._ = _;

Vue.prototype.maxWidth = 1000;
Vue.prototype.maxHeight = 500;

window.vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");


