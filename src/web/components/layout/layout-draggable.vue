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
        filter=".ignoreEle"
        @change="change"
        @start="start"
        @end="end"
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
    order: 1000,
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
        start(e) {
            $(e.item).addClass("draggingChoose");
        },
        end(e) {
            $(e.item).removeClass("draggingChoose");
        },
    },
};
</script>
