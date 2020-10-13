<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-12 17:30:04
 * @Description  : 
-->
<template>
    <div class="controls_block">
        <div class="controls_inner">
            <div
                @click.stop="choose"
                class="controls_change hopeui-icon hopeui-icon-edit"
            ></div>
            <div v-html="style"></div>
            <div class="hopeui-row">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { utils } from "../../../utils/utils.js";
import Params from "./Params.js";

export default {
    name: Params.label,
    data() {
        return {
            isHover: false,
        };
    },
    props: {
        ele: [Array, Object],
    },
    computed: {
        style() {
            let styleSheet = this.ele.styleSheet;
            let root = this.ele.id;
            let res = {};
            Object.keys(styleSheet).forEach(function(line) {
                res[`.${root} ${line}`] = styleSheet[line];
            });
            return `<style>${utils.json2css(res)}</style>`;
        },
        html() {
            return Params.html.replace(/ele.id/g, this.ele.id);
        },
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
    }
};
</script>
