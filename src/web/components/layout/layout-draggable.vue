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
            if (e.added.element.isCustom) {
                //自定义栅格列数
                this.$prompt("请输入列数", "", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    inputPattern: /^[0-9]{0,2}$/,
                    inputErrorMessage: "请输入数字，且最多输入两位",
                })
                    .then(({ value }) => {
                        let cols = parseInt(value);
                        for (let i = 0; i < cols; i++) {
                            e.added.element.children.push({
                                name: `${cols}_${i+1}`,
                                label: "hope_grid",
                                id: $egu.guid(),
                                icon: "icon-anniu",
                                isSelected: false,
                                spcConfig: {
                                    isPer: {
                                        width: true,
                                        height: false,
                                    },
                                    isAutoLineHeight: false,
                                },
                                event: "",
                                defaultClass: "hope_grid",
                                customClass: `g_${parseInt(100 / cols)}`,
                                style: {
                                    width: `${(100 / cols).toFixed(4)}%`,
                                    height: "500px",
                                },
                                effect: {},
                                children: [],
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
