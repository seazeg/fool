//组件全局注册
import Vue from "vue";
import header from "./layout-header.vue";
import controls from "./layout-controls.vue";
import container from "./layout-container.vue";
import editor from "./layout-editor.vue";
import draggable from "./layout-draggable.vue";
import buttonEditor from "./editors/ButtonEditor.vue";
import gridEditor from "./editors/GridEditor.vue";

Vue.component(header.name, header);
Vue.component(controls.name, controls);
Vue.component(container.name, container);
Vue.component(editor.name, editor);
Vue.component(draggable.name, draggable);
Vue.component(buttonEditor.name, buttonEditor);
Vue.component(gridEditor.name, gridEditor);
