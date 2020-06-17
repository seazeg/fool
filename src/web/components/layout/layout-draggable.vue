<style lang="less">
.draggable_box {
    min-height: 100%;
}
</style>
<template>
        <!-- ghost-class="draggingChoose" -->
    <draggable
        class="draggable_box"
        :list="controls"
        :group="{ name: 'controls' }"
        ghost-class="draggingChoose"
        @change="change"
        @start="dragStart"
        @end="dragEnd"
    >
        <!-- <ChooseBox v-for="(ele, i) in controls" :key="i" :element="ele"> -->
        <component
            v-for="(ele, i) in controls"
            :key="i"
            :is="ele.label"
            :ele="ele"
            @choose="choose(ele)"
            :class="{ selected: ele.isSelected }"
        >
            <layout-draggable
                v-if="ele.children"
                :controls="ele.children"
            ></layout-draggable>
        </component>
        <!-- </ChooseBox> -->
    </draggable>
</template>
<script>
import ChooseBox from "../../components/layout/layout-choosebox.vue";
export default {
    name: "layout-draggable",
    display: "Clone",
    order: 2,
    props: {
        controls: [Array, Object],
    },
    components: {
        ChooseBox,
    },
    computed: {},
    methods: {
        choose(e) {
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ChooseControl", e.id);
        },
        change(e) {
            try {
                this.$store.commit("Hope/ResetControlSelected");
                this.$store.commit("Hope/ControlsSelected", e.added.element);
                this.$store.commit("Hope/ChooseControl", e.added.element.id);
            } catch (error) {}
        },
        dragStart(e) {
            $(e.item).addClass("draggingNarrow");
        },
        dragEnd(e) {
            $(e.item).removeClass("draggingNarrow");
        },
    },
};
</script>
