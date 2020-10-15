<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-15 16:15:30
 * @Description  : 
-->
<style lang="less">
.hopeui-row *[class*="hopeui-col-"] {
    outline: 1px solid #999;
    background: #fff;
    min-height: 200px;
}
</style>
<template>
    <div :class="[ele.className, ignoreEle]">
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
};
</script>
