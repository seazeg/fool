<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-23 17:36:55
 * @Description  : 
-->
<template>
    <div class="controls_block">
        <div class="controls_inner">
            <div @click.stop="choose" class="controls_change hopeui-icon hopeui-icon-edit" ></div>
            <div v-html="style"></div>
            <input type="checkbox" name="subject" value="音乐" hope-verify="required" :class="ele.id" />
            <input type="checkbox" name="subject" value="历史" hope-verify="required" :class="ele.id" />
            <input type="checkbox" name="subject" value="生物" hope-verify="required" :class="ele.id" disabled />
        </div>
    </div>
</template>

<script>
    import {
        utils
    } from "../../../utils/utils.js";
    export default {
        name: "hope_checkbox",
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
                Object.keys(styleSheet).forEach(function (line) {
                    res[`.${root} ${line}`] = styleSheet[line];
                });
                return `<style>${utils.json2css(res)}</style>`;
            },
        },
        methods: {
            choose() {
                this.$emit("choose", this.ele);
            }
        },
        mounted() {
            let _this = this;

            _this.$nextTick(function () {
                let checkbox = hope.checkbox({
                    ele: "." + _this.ele.id,
                    on: {
                        change: function (e) {
                            console.log(e);
                        },
                    },
                });
            });
        },
    };
</script>