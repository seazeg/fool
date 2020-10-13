<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-13 15:30:06
 * @Description  : 
-->
<style lang="less">
    .draggable_box *[class*="hopeui-col-"]{
        outline:1px solid #999;
    }
</style>
<template>
    <div :class="ele.className"> 
        <slot></slot>
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
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
    },
};
</script>
