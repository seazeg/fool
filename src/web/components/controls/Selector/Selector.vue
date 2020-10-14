<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-14 15:35:44
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
            <div class="htmlCache">{{ html }}</div>
            <div class="jsCache" :data-id="ele.id">{{ js }}</div>
            <div class="code" v-html="html"></div>
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
        js() {
            return Params.script;
        },
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function() {
            Function("_this", Params.script)(_this);
        });
    },
};
</script>
