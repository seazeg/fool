<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-15 16:00:12
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
            <div class="code" ref="code">
                <Params :ele="ele"></Params>
            </div>
        </div>
    </div>
</template>

<script>
import { utils } from "../../../utils/utils.js";
import Params from "./Params.js";

export default {
    name: Params.name,
    data() {
        return {
            isHover: false,
            html: "",
        };
    },
    components: { Params },
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
            _this.html = _this.$refs.code.innerHTML;
            _this.ele.html = _this.$refs.code.innerHTML;
            Function("_this", Params.script)(_this);
        });
    },
};
</script>
