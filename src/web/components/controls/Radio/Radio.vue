<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-30 14:05:06
 * @Description  : 
-->
<template>
    <div class="controls_block">
        <div class="controls_inner">
            <div @click.stop="choose" class="controls_change hopeui-icon hopeui-icon-edit"></div>
            <div v-html="style"></div>
            <div class="code">
                <input type="radio" name="radio" value="男" title="男" :class="ele.id" hope-verify="required" checked />
                <input type="radio" name="radio" value="女" title="女" :class="ele.id" hope-verify="required" />
                <input type="radio" name="radio" value="什么玩意" title="什么玩意" :class="ele.id" hope-verify="required"
                    disabled />
            </div>
        </div>
    </div>
</template>

<script>
    import {
        utils
    } from "../../../utils/utils.js";
    export default {
        name: "hope_radio",
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

            _this.$nextTick(function () {
                let radio = hope.radio({
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