<!--
 * @Author       : Evan.G
 * @Date         : 2021-03-16 11:18:27
 * @LastEditTime : 2021-03-24 11:41:15
 * @Description  : 
-->
<template>
    <div class="layout-statusbar" v-if="ele.name">
        <div class="left box">
            <span class="name">组件信息: {{ ele.name }} - {{ ele.label }}</span>
        </div>
        <div class="right box">
            <span class="status" @click="statusToggle"
                >组件状态:
                {{ ele.zoomParams.draggable ? "未锁定" : "已锁定" }}</span
            >
            <b>|</b>
            <span class="status" @click="lockToggle"
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
    methods: {
        statusToggle() {
            this.ele.zoomParams.draggable = !this.ele.zoomParams.draggable;
        },
        lockToggle() {
            this.ele.zoomParams.lockAspectRatio = !this.ele.zoomParams
                .lockAspectRatio;
        },
    },
};
</script>
