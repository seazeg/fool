<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-23 16:11:04
 * @Description  : 
-->
<template>
    <div>
        <div @click.stop="choose" style="color:#111">选中我</div>
        <div v-html="style"></div>
        <input type="checkbox" name="subject" value="音乐" hope-verify="required" :class="ele.id" />
        <input type="checkbox" name="subject" value="历史" hope-verify="required" :class="ele.id" />
        <input type="checkbox" name="subject" value="生物" hope-verify="required" :class="ele.id" disabled />

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