<!--
 * @Author       : Evan.G
 * @Date         : 2020-10-15 16:55:02
 * @LastEditTime : 2021-03-22 11:50:08
 * @Description  : 
-->
<style lang="less">
.dragContainer {
    min-height: 100%;
}
</style>
<template>
    <div class="dragContainer" @drop="drop" @dragover="dragover">
        <component
            v-for="(ele, i) in controls"
            :key="ele.key"
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
function bitsZero(num) {
    if (num < 0) num = 0;
    let arr = num.toString().split("");
    return parseInt(
        arr
            .map((item, i) => {
                if (arr.length - 1 == i) {
                    return "0";
                } else {
                    return item;
                }
            })
            .join("")
    );
}
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
            let element = this.$store.getters.getStagingDragElement,
                { x, y } = JSON.parse(e.dataTransfer.getData("offset"));
            element.zoomParams.x = bitsZero(e.offsetX - x);
            element.zoomParams.y = bitsZero(e.offsetY - y);
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
