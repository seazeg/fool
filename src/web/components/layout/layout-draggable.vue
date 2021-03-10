<!--
 * @Author       : Evan.G
 * @Date         : 2020-10-15 16:55:02
 * @LastEditTime : 2021-03-10 17:17:32
 * @Description  : 
-->
<style lang="less">
.dragContainer {
    min-height: 100%;
}
</style>
<template>
    <div
        class="dragContainer"
        @drop="drop"
        @dragover="dragover"
        style="background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px;"
    >
        <component
            v-for="(ele, i) in controls"
            :key="ele.id"
            :is="ele.name"
            :ele="ele"
            :class="ele.id"
            v-on:refLineParams="getRefLineParams"
        >
            <layout-draggable
                v-if="ele.children"
                :controls="ele.children"
            ></layout-draggable>
        </component>
                <!--辅助线-->
        <span
            class="ref-line v-line"
            v-for="item in vLine"
            v-show="item.display"
            :style="{
                left: item.position,
                top: item.origin,
                height: item.lineLength,
            }"
        />
        <span
            class="ref-line h-line"
            v-for="item in hLine"
            v-show="item.display"
            :style="{
                top: item.position,
                left: item.origin,
                width: item.lineLength,
            }"
        />
        <!--辅助线END-->
    </div>
</template>
<script>
export default {
    name: "layout-draggable",
    data() {
        return {
            vLine: [],
            hLine: [],
        };
    },
    props: {
        controls: [Array, Object],
        dialogGridVisible: Boolean,
    },
    methods: {
        drop(e) {
            e.preventDefault();
            let element = JSON.parse(e.dataTransfer.getData("element"));
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ControlsAddContainer", element);
            this.$store.commit("Hope/ChooseControl", {
                id: element.id,
                type: false,
            });
            this.$store.commit("Hope/ControlsSelected", element);
        },
        dragover(e) {
            e.preventDefault();
        },
        getRefLineParams(params) {
            const { vLine, hLine } = params;
            this.vLine = vLine;
            this.hLine = hLine;
        },
    },
};
</script>
