<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-11-06 17:29:42
 * @Description  : 
-->
<style lang="less">
.hopeui-row *[class*="hopeui-col-"] {
    outline: 1px dotted #999;
    background: #fff;
    min-height: 200px;
}
</style>
<template>
    <div :class="[ele.className]">
        <slot></slot>
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
        };
    },
    props: {
        ele: [Array, Object],
    },
    computed: {
        ignoreEle: function() {
            return "ignoreEle";
        },
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
    },
    mounted() {
        console.log(1222);
    },
};
</script>
