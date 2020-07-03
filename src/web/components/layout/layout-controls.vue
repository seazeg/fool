<style lang="less">
@import "../../styles/theme.config.less";
.el-menu {
    border-right: none !important;
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
        <span class="operate iconfont icon-youshuangjiantou"></span>
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
                    <i class="el-icon-c-scale-to-original"></i>
                    <span>栅格布局</span>
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
                            {{ ele.name }}
                        </template>
                    </el-menu-item>
                </draggable>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-copy-document"></i>
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
                            <i class="el-icon-copy-document"></i>
                            {{ ele.name }}
                        </template>
                    </el-menu-item>
                </draggable>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import _ from "lodash";
import { ButtonParams } from "../controls/Button/ButtonParams";
import { GridParams } from "../controls/Grid/GridParams";
import { TextParams } from "../controls/Text/TextParams";
import { RadioParams } from "../controls/Radio/RadioParams";
import { InputParams } from "../controls/Input/InputParams";
import { ImagerParams } from "../controls/Imager/ImagerParams";
import { BoxParams } from "../controls/Box/BoxParams";

export default {
    name: "layout-controls",
    data() {
        return {
            openeds: ["1", "2"],
        };
    },
    computed: {
        layout() {
            return [GridParams.g_2, GridParams.g_3, GridParams.g_custom];
        },
        controls() {
            return [
                ButtonParams,
                InputParams,
                ImagerParams,
                RadioParams,
                TextParams,
                BoxParams,
            ];
        },
    },
    methods: {
        clone(o) {
            let _this = this;
            (function func(cls) {
                for (let ele of cls) {
                    _this.$set(ele, "id", $egu.guid());
                    if ($egu.isArray(ele.children) && ele.children.length > 0) {
                        func(ele.children);
                    }
                }
            })([o]);
            return {
                ..._.cloneDeep(o),
            };
        },
        // dragStart(e) {
        //     $(e.item).addClass("draggingList");
        // },
        // dragEnd(e) {
        //     $(e.item).removeClass("draggingList");
        // },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>
