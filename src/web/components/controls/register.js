import Vue from 'vue';
import Button from './Button/Button.vue'
import Grid from './Grid/Grid.vue'
import Text from './Text/Text.vue'
import Radio from './Radio/Radio.vue'
import Input from './Input/Input.vue'
import Imager from './Imager/Imager.vue'

Vue.component(Button.name, Button)
Vue.component(Grid.name, Grid)
Vue.component(Text.name, Text)
Vue.component(Radio.name, Radio)
Vue.component(Input.name, Input)
Vue.component(Imager.name, Imager)

import ButtonEditor from "./Button/ButtonEditor.vue";
import GridEditor from "./Grid/GridEditor.vue";
import TextEditor from "./Text/TextEditor.vue";
import RadioEditor from "./Radio/RadioEditor.vue";
import InputEditor from "./Input/InputEditor.vue";
import ImagerEditor from "./Imager/ImagerEditor.vue";

Vue.component(ButtonEditor.name, ButtonEditor);
Vue.component(GridEditor.name, GridEditor);
Vue.component(TextEditor.name, TextEditor);
Vue.component(RadioEditor.name, RadioEditor);
Vue.component(InputEditor.name, InputEditor);
Vue.component(ImagerEditor.name, ImagerEditor);
