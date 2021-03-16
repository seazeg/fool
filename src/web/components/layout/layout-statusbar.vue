<!--
 * @Author       : Evan.G
 * @Date         : 2021-03-16 11:18:27
 * @LastEditTime : 2021-03-16 11:55:51
 * @Description  : 
-->
<template>
    <div class="layout-statusbar">
        <div class="left box">
            <span class="name">组件信息: {{ ele.name }} | {{ ele.label }}</span>
        </div>
        <div class="right box">
            <span class="status"
                >状态:
                {{ ele.zoomParams.draggable ? "未锁定" : "已锁定" }}</span
            >
            <span class="location"
                >X:{{ ele.zoomParams.x }}, Y:{{ ele.zoomParams.y }}</span
            >
        </div>
    </div>
</template>
<script>
export default {
    name: "layout-statusbar",
    props: {
        ele: [Array, Object],
    },
};
</script>
