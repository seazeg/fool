/*
 * @Author       : Evan.G
 * @Date         : 2020-05-27 16:18:38
 * @LastEditTime : 2020-11-12 13:53:14
 * @Description  : 
 */
//组件全局注册
import Vue from "vue";
import header from "./layout-header.vue";
import controls from "./layout-controls.vue";
import container from "./layout-container.vue";
import workspace from "./layout-workspace.vue";
import draggable from "./layout-draggable.vue";
import editor from "./layout-editor.vue";

Vue.component(header.name, header);
Vue.component(controls.name, controls);
Vue.component(container.name, container);
Vue.component(workspace.name, workspace);
Vue.component(draggable.name, draggable);
Vue.component(editor.name, editor);
