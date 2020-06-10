import Vue from 'vue';
import Button from './Button/Button.vue'
import Grid from './Grid/Grid.vue'

Vue.component(Button.name, Button)
Vue.component(Grid.name, Grid)


import buttonEditor from "./Button/ButtonEditor.vue";
import gridEditor from "./Grid/GridEditor.vue";

Vue.component(buttonEditor.name, buttonEditor);
Vue.component(gridEditor.name, gridEditor);
