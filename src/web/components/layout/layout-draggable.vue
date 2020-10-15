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
        filter=".ignoreEle"
        @change="change"
        @start="start"
        @end="end"
    >
        <component
            v-for="(ele, i) in controls"
            :key="i"
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
                try {
                    this.$store.commit("Hope/ResetControlSelected");
                    this.$store.commit(
                        "Hope/ControlsSelected",
                        e.added.element
                    );
                    this.$store.commit(
                        "Hope/ChooseControl",
                        e.added.element.id
                    );
                } catch (error) {}
            }
        },
        start(e) {
            $(e.item).addClass("draggingChoose");
        },
        end(e) {
            $(e.item).removeClass("draggingChoose");
        }
    },
};
</script>
