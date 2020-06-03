<template>
    <p class="group" @mouseleave="close">
        <span
            class="gradientBar"
            :style="result"
            @click="openColorPicker"
        ></span>
        <el-input
            v-model="result.backgroundImage || color"
            placeholder="请输入色号"
            style="margin-left:2%;width:88%"
        >
        </el-input>
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
            result: "",
            colorPickerDisplay: false,
        };
    },
    props: {
        color: String,
        container:String
    },
    computed: {
        gradient() {
            const regex = /\((.+?)\)/g;
            let points = [];
            let [deg, ...temp] = this.color
                .replace("linear-gradient(", "")
                .substring(
                    0,
                    this.color.replace("linear-gradient(", "").length - 1
                )
                .split("rgba");
                
            for (let p of temp) {

                let [r, g, b, a] = this.$egu.trim(p,'all').match(/(?<=\()(\d+),(\d+),(\d+),((?:0?\.\d+)|1)(?=\))/);

                points.push({
                    left: this.$egu.trim(p,'all').split(')')[1],
                    red: r,
                    green: g,
                    blue: b,
                    alpha: a,
                });
            }
            return {
                type: "linear",
                degree: parseInt(deg),
                points: points,
            };
        },
    },
    components: {
        ColorPicker,
    },
    methods: {
        openColorPicker() {
            this.colorPickerDisplay = true;
        },
        onChange(attrs, name) {
            this.result = {
                backgroundImage: attrs.style,
            };
            this.$store.commit("Hope/UpdateControlParams", {
                backgroundImage: attrs.style,
                isDiff: false,
                container: this.container,
            });
        },
        close() {
            this.colorPickerDisplay = false;
        },
    },
};
</script>
