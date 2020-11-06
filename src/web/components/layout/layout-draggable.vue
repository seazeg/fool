<!--
 * @Author       : Evan.G
 * @Date         : 2020-10-15 16:55:02
 * @LastEditTime : 2020-11-06 16:32:50
 * @Description  : 
-->
<style lang="less">
.defaultHeight {
    min-height: 200px;
}

.draggable_box {
    height: 200px;
    min-height: 100%;
}
</style>
<template>
    <!-- ghost-class="draggingChoose" -->
    <draggable
        class="draggable_box"
        :class="{ defaultHeight: controls.length <= 0 }"
        :list="controls"
        :group="{ name: 'controls' }"
        :animation="300"
        filter=".ignoreEle"
        @change="change"
        @start="drag = true"
        @end="drag = false"
    >
        <component
            v-for="(ele, i) in controls"
            :key="ele.id"
            :is="ele.name"
            :ele="ele"
            @choose="choose(ele)"
            :class="[{ selected: ele.isSelected }, ele.id]"
        >
            <layout-draggable
                v-if="ele.children"
                :controls="ele.children"
            ></layout-draggable>
        </component>
    </draggable>
</template>
<script>
export default {
    name: "layout-draggable",
    props: {
        controls: [Array, Object],
        dialogFormVisible: Boolean,
    },
    methods: {
        choose(e) {
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ChooseControl", e.id);
        },
        change(e) {
            if (e.added && e.added.element.isCustom) {
                this.$store.commit("Hope/SetGridEle", e);
                this.$store.commit("Hope/ChangeDialogFormVisible", true);
            } else {
                let ev = e.added;
                if (e.moved) {
                    ev = e.moved;
                }
                this.$store.commit("Hope/ResetControlSelected");
                this.$store.commit("Hope/ControlsSelected", ev.element);
                this.$store.commit("Hope/ChooseControl", ev.element.id);
            }
        },
    },
};
</script>
