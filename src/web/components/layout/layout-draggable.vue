<style lang="less">
.draggable_box {
    min-height: 500px;
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
            :class="[{ selected: ele.isSelected }, ele.id]"
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
import grid from "../controls/Grid/Params";
import { utils } from "../../utils/utils.js";

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
            console.log(e);
            this.$store.commit("Hope/ChooseControl", e.id);
        },
        change(e) {
            if (e.added.element && e.added.element.isCustom) {
                //自定义栅格列数
                this.$prompt("请输入列数", "", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    inputPattern: /^[0-9]{0,2}$/,
                    inputErrorMessage: "请输入数字，且最多输入两位",
                })
                    .then(({ value }) => {
                        let col = parseInt(value);
                        let total = 12;
                        for (let i = 1; i <= col; i++) {
                            e.added.element.children.push({
                                name: "自定义",
                                label: "hope_grid",
                                className: `hopeui-col-xl-${total /
                                    col}-${total}`,
                                icon: "icon-anniu",
                                isCustom: true,
                                isSelected: false,
                                id: "hope_" + utils.getRandomName(6),
                                children: [],
                                styleSheet: {},
                            });
                        }

                        console.log(e.added.element);
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
                    })
                    .catch(() => {});
            } else {
                console.log(e.added.element);

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
        },
    },
};
</script>
