<style lang="less">
.draggable_box {
    min-width: 100%;
    min-height: 100%;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    box-sizing: border-box;
}
</style>
<template>
    <draggable
        class="draggable_box"
        :list="controls"
        :group="{ name: 'controls' }"
        @change="change"
    >
        <ChooseBox v-for="(ele, i) in controls" :key="i" :element="ele">
            <component :is="ele.label" :ele="ele" @choose="choose(ele)">
                <layout-draggable
                    v-if="ele.children"
                    :controls="ele.children"
                ></layout-draggable>
            </component>
        </ChooseBox>
    </draggable>
</template>
<script>
import ChooseBox from "../../components/layout/layout-choosebox.vue";
export default {
    name: "layout-draggable",
    display: "Clone",
    // order: 2,
    props: {
        controls: [Array, Object],
    },
    components: {
        ChooseBox,
    },
    computed: {},
    methods: {
        choose(e) {
            this.$store.commit("Hope/ChooseControl", e.id);
        },
        change(e) {
            try {
                this.$store.commit("Hope/ChooseControl", e.added.element.id);
                this.$store.commit("Hope/ResetControlSelected");
                this.$store.commit("Hope/ControlsSelected", e.added.element);
            } catch (e) {}
        },
    },
};
</script>
