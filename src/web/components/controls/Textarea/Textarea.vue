<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 11:49:06
 * @LastEditTime : 2020-09-30 14:05:28
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
            <div class="code">
                <textarea
                    name="textarea"
                    class="hopeui-textarea"
                    placeholder="请输入内容"
                    :id="ele.id"
                ></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { utils } from "../../../utils/utils.js";
export default {
    name: "hope_textarea",
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
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
        enter() {
            this.isHover = true;
        },
        leave() {
            this.isHover = false;
        },
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function() {
            let textarea = hope.textarea({
                ele: "#" + _this.ele.id,
                on: {
                    blur: function(e) {
                        console.log(e);
                    },
                    focus: function(e) {
                        console.log(e);
                    },
                    input: function(e) {
                        console.log(e);
                    },
                },
            });
        });
    },
};
</script>
