<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-11-06 16:25:00
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
                <Mixins :ele="ele"></Mixins>
            </div>
        </div>
    </div>
</template>

<script>
import { utils } from "../../../utils/utils.js";
import Mixins from "./Mixins.js";

export default {
    name: Mixins.name,
    data() {
        return {
            isHover: false,
            html: "",
        };
    },
    components: { Mixins },
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
            return Mixins.script;
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
            _this.html = $(_this.$refs.code)
                .children()
                .html();
            _this.ele.html = _this.html;
            Function("_this", Mixins.script)(_this);
        });
    }
};
</script>
