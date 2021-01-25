/*
 * @Author       : Evan.G
 * @Date         : 2020-05-18 15:06:51
 * @LastEditTime : 2021-01-25 13:41:50
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
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icons/fonts/iconfont.css";
import "./assets/icons/fonts/hopeui/hopefont.css";
import "./styles/theme.less";



import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)


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

window.vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
