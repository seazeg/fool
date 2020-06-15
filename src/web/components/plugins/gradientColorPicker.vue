<template>
    <p class="group" @mouseleave="close">
        <span
            class="gradientBar"
            :style="'backgroundImage:'+color"
            @click="openColorPicker"
        ></span>
        <el-input
            v-model="result.backgroundImage || color"
            placeholder="请选择色号"
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
        container: String,
    },
    computed: {
        gradient() {
            if (this.color) {
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
                    let [r, g, b, a] = $egu
                        .trim(p, "all")
                        .match(
                            /(?<=\()(\d+),(\d+),(\d+),((?:0?\.\d+)|1)(?=\))/
                        );

                    points.push({
                        left: $egu.trim(p, "all").split(")")[1],
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
            } else {
                return {
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
                            green: 255,
                            blue: 255,
                            alpha: 1,
                        },
                    ],
                };
            }
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
                isDiff: 'same',
                container: this.container,
            });
        },
        close() {
            this.colorPickerDisplay = false;
        },
    },
};
</script>
