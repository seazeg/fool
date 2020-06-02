<template>
    <p class="group" @mouseleave="close">
        <span
            class="gradientBar"  
            :style="result"
            @click="openColorPicker" 
        ></span>
        <el-input
            v-model="result.backgroundImage"
            placeholder="请输入色号"
            style="margin-left:2%;width:88%"
        ></el-input>
        <ColorPicker
            :gradient="gradient"
            :isGradient="true"
            :onStartChange="(color) => onChange(color, 'start')"
            :onChange="(color) => onChange(color, 'change')"
            :onEndChange="(color) => onChange(color, 'end')"
            v-if="colorPickerDisplay"
        />
    </p>
</template>

<script>
import { ColorPicker } from "vue-color-gradient-picker";
export default {
    name: "gradientColorPicker",
    data() {
        return {
            gradient: {
                type: "linear",
                degree: 0,
                points: [
                    {
                        left: 0,
                        red: 0,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                    {
                        left: 100,
                        red: 255,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                ],
            },
            result: "",
            colorPickerDisplay: false,
        };
    },
    components: {
        ColorPicker,
    },
    methods: {
        openColorPicker() {
            this.colorPickerDisplay = true;
        },
        onChange(attrs, name) {
            console.log(attrs);
            this.result = {
                backgroundImage: attrs.style,
            };
        },
        close(){
            this.colorPickerDisplay = false;
        }
    },
};
</script>
