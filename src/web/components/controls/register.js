import Vue from 'vue';
import Button from './Button/Button.vue'
import Grid from './Grid/Grid.vue'
import Selector from './Selector/Selector.vue'
import Pager from './Pager/Pager.vue'
import Input from './Input/Input.vue'
import Imager from './Imager/Imager.vue'

Vue.component(Button.name, Button)
Vue.component(Grid.name, Grid)
Vue.component(Selector.name, Selector)
Vue.component(Pager.name, Pager)
Vue.component(Input.name, Input)
Vue.component(Imager.name, Imager)

import ButtonEditor from "./Button/ButtonEditor.vue";
import GridEditor from "./Grid/GridEditor.vue";
import SelectorEditor from "./Selector/SelectorEditor.vue";
import PagerEditor from "./Pager/PagerEditor.vue";
import InputEditor from "./Input/InputEditor.vue";
import ImagerEditor from "./Imager/ImagerEditor.vue";

Vue.component(ButtonEditor.name, ButtonEditor);
Vue.component(GridEditor.name, GridEditor);
Vue.component(SelectorEditor.name, SelectorEditor);
Vue.component(PagerEditor.name, PagerEditor);
Vue.component(InputEditor.name, InputEditor);
Vue.component(ImagerEditor.name, ImagerEditor);
