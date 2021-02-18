<style lang="less">
@import "../../styles/theme.config.less";
.el-menu {
    border-right: none !important;
}
.el-submenu {
    overflow: hidden;
}
.el-menu-item {
    background-color: @deputy_color!important;
    display: inline-block;
}
.el-menu-item:hover {
    background-color: @shadow_color!important;
}
.el-submenu__title {
    background-color: @main_color!important;
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
            <!-- <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-c-scale-to-original"></i>
                    <span>结构布局</span>
                </template>
                <draggable
                    class="group"
                    :list="layout"
                    :group="{ name: 'controls', pull: 'clone', put: false }"
                    :clone="clone"
                    :sort="false"
                >
                    <el-menu-item
                        :index="'1-' + i"
                        v-for="(ele, i) in layout"
                        :key="i"
                    >
                        <template slot="title">
                            <i class="el-icon-c-scale-to-original"></i>
                            {{ ele.label }}
                        </template>
                    </el-menu-item>
                </draggable>
            </el-submenu> -->
            <el-submenu index="2">
                <template slot="title">
                    <i class="iconfont icon-zujian"></i>
                    <span>基础控件</span>
                </template>
                <draggable
                    class="group"
                    :list="controls"
                    :group="{ name: 'controls', pull: 'clone', put: false }"
                    :clone="clone"
                    :sort="false"
                >
                    <el-menu-item
                        :index="'2-' + i"
                        v-for="(ele, i) in controls"
                        :key="i"
                    >
                        <template slot="title">
                            <i :class="'iconfont ' + ele.icon"></i>
                            {{ ele.label }}
                        </template>
                    </el-menu-item>
                </draggable>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="iconfont icon-Structuresquarescontrol"></i>
                    <span>复用组件</span>
                </template>
                <draggable
                    class="group"
                    :list="components"
                    :group="{ name: 'controls', pull: 'clone', put: false }"
                    :clone="clone"
                    :sort="false"
                >
                    <el-menu-item
                        :index="'3-' + i"
                        v-for="(ele, i) in components"
                        :key="i"
                    >
                        <template slot="title">
                            <i :class="'iconfont ' + ele.icon"></i>
                            {{ ele.label }}
                        </template>
                    </el-menu-item>
                </draggable>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import _ from "lodash";
import { utils } from "../../utils/utils.js";
import SelectorMixins from "../controls/Selector/Mixins";
import GridMixins from "../controls/Grid/Mixins";
import FormMixins from "../controls/Form/Mixins";
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
    },
    methods: {
        clone(o) {
            let _this = this;
            let oo = _.cloneDeep(o);
            (function func(cls) {
                for (let ele of cls) {
                    _this.$set(ele, "id", "hope_" + utils.getRandomName(6));
                    if ($egu.isArray(ele.children) && ele.children.length > 0) {
                        func(ele.children);
                    }
                }
            })([oo]);

            return {
                ..._.cloneDeep(oo),
            };
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
