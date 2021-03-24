<style lang="less">
@import "../../styles/theme.config.less";

.el-menu {
    border-right: none !important;
}

.el-submenu {
    overflow: hidden;
}

.el-menu-item {
    background-color: @deputy_color !important;
    display: inline-block;
}

.el-menu-item:hover {
    background-color: @shadow_color !important;
}

.el-submenu__title {
    background-color: @main_color !important;
}
</style>
<template>
    <div class="layout-controls">
        <div class="operate"><img src="../../assets/logo.svg" /></div>
        <el-menu
            :default-openeds="openeds"
            @open="handleOpen"
            @close="handleClose"
            background-color="#535353"
            text-color="#e7e7e7"
            active-text-color="#e7e7e7"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="iconfont icon-zujian"></i>
                    <span>基础控件</span>
                </template>
                <el-menu-item
                    :index="'2-' + i"
                    v-for="(ele, i) in controls"
                    :key="i"
                >
                    <div
                        @dragstart="dragstart(ele, $event)"
                        draggable="true"
                        @click="addControls(ele)"
                    >
                        <i :class="'iconfont ' + ele.icon"></i> {{ ele.label }}
                    </div>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="iconfont icon-Structuresquarescontrol"></i>
                    <span>复用组件</span>
                </template>
                <el-menu-item
                    :index="'3-' + i"
                    v-for="(ele, i) in components"
                    :key="i"
                >
                    <div
                        @dragstart="dragstart(ele, $event)"
                        draggable="true"
                        @click="addControls(ele)"
                    >
                        <i :class="'iconfont ' + ele.icon"></i> {{ ele.label }}
                    </div>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import _ from "lodash";
import { utils } from "../../utils/utils.js";
import SelectorMixins from "../controls/Selector/Mixins";
import GridMixins from "../controls/Grid/Mixins";
// import FormMixins from "../controls/Form/Mixins";
import RadioMixins from "../controls/Radio/Mixins";
import InputMixins from "../controls/Input/Mixins";
import SuggestMixins from "../controls/Suggest/Mixins";
import CheckboxMixins from "../controls/Checkbox/Mixins";
import TextareaMixins from "../controls/Textarea/Mixins";
import PagerMixins from "../controls/Pager/Mixins";
import ButtonMixins from "../controls/Button/Mixins";
import CarouselMixins from "../controls/Carousel/Mixins";
import DatapickerMixins from "../controls/Datepicker/Mixins";
import ZoomMixins from "../controls/Zoom/Mixins";
import LoadmoreMixins from "../controls/Loadmore/Mixins";

export default {
    name: "layout-controls",
    data() {
        return {
            openeds: ["1", "2"],
            isDraging: false,
        };
    },
    computed: {
        layout() {
            return [GridMixins];
        },
        controls() {
            return [
                ButtonMixins,
                SelectorMixins,
                InputMixins,
                RadioMixins,
                CheckboxMixins,
                TextareaMixins,
                SuggestMixins,
            ];
        },
        components() {
            return [
                PagerMixins,
                CarouselMixins,
                DatapickerMixins,
                ZoomMixins,
                LoadmoreMixins,
            ];
        },
        controlsTree: {
            get() {
                return this.$store.state.controls;
            },
            set(value) {
                this.$store.commit("Hope/UpdateControls", value);
            },
        },
    },
    methods: {
        dragstart(ele, e) {
            let _this = this;
            let oo = _.cloneDeep(ele);
            (function func(cls) {
                for (let ele of cls) {
                    _this.$set(ele, "id", "hope_" + utils.getRandomName(6));
                    _this.$set(ele, "key", "key_" + utils.getRandomName(6));
                    if ($egu.isArray(ele.children) && ele.children.length > 0) {
                        func(ele.children);
                    }
                }
            })([oo]);
            // console.log({ x: e.offsetX, y: e.offsetY });
            e.dataTransfer.setData(
                "offset",
                JSON.stringify({ x: e.offsetX, y: e.offsetY })
            );
            this.$store.commit("Hope/stagingDragElement", oo);
        },
        addControls(ele) {
            let _this = this;
            let oo = _.cloneDeep(ele);
            (function func(cls) {
                for (let ele of cls) {
                    _this.$set(ele, "id", "hope_" + utils.getRandomName(6));
                    _this.$set(ele, "key", "key_" + utils.getRandomName(6));
                    if ($egu.isArray(ele.children) && ele.children.length > 0) {
                        func(ele.children);
                    }
                }
            })([oo]);
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ControlsAddContainer", oo);
            this.$store.commit("Hope/ChooseControl", {
                id: oo.id,
                type: false,
            });
            this.$store.commit("Hope/ControlsSelected", oo);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>
