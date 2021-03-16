<!--
 * @Author       : Evan.G
 * @Date         : 2021-03-16 11:18:27
 * @LastEditTime : 2021-03-16 15:06:05
 * @Description  : 
-->
<template>
    <div class="layout-statusbar" v-if="ele.name">
        <div class="left box">
            <span class="name">组件信息: {{ ele.name }} - {{ ele.label }}</span>
        </div>
        <div class="right box">
            <span class="status"
                >组件状态:
                {{ ele.zoomParams.draggable ? "未锁定" : "已锁定" }}</span
            >
            <b>|</b>
            <span class="status"
                >比例缩放:
                {{ ele.zoomParams.lockAspectRatio ? "已开启" : "已关闭" }}</span
            >
            <b>|</b>
            <span class="location"
                >X:{{ ele.zoomParams.x }}, Y:{{ ele.zoomParams.y }}</span
            >
        </div>
    </div>
    <div class="layout-statusbar" v-else></div>
</template>
<script>
export default {
    name: "layout-statusbar",
    props: {
        ele: [Array, Object],
    },
};
</script>
