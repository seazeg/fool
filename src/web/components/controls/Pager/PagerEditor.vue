<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-29 16:08:30
 * @Description  : 
-->
<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.name.includes('pager')
        "
    >
        <!-- 基础属性 -->
        <div class="control_group_title">
            基础属性：
            <el-button
                type="danger"
                round
                @click="visualNodeRemove()"
                icon="el-icon-delete-solid"
                size="mini"
            >
            </el-button>
        </div>
        <div class="control_group">
            <div class="box">
                <span class="field">内间距</span>
                <p>
                    <el-slider
                        v-model="width"
                        :min="1"
                        :max="50"
                        show-input
                        :step="1"
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">高度</span>
                <p>
                    <el-slider
                        v-model="height"
                        :min="1"
                        :max="100"
                        show-input
                        :step="1"
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">字体大小</span>
                <p>
                    <el-slider
                        v-model="fontSize"
                        :min="1"
                        :max="50"
                        show-input
                        :step="1"
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">字体颜色</span>
                <p class="group">
                    <el-color-picker
                        v-model="color"
                        color-format="hex"
                    ></el-color-picker>
                    <el-input
                        v-model="color"
                        placeholder="请选择色号"
                    ></el-input>
                </p>
            </div>
            <div class="box">
                <span class="field">选中颜色</span>
                <p class="group">
                    <el-color-picker
                        v-model="selectColor"
                        color-format="hex"
                    ></el-color-picker>
                    <el-input
                        v-model="selectColor"
                        placeholder="请选择色号"
                    ></el-input>
                </p>
            </div>
            <div class="box">
                <span class="field">常态边框颜色</span>
                <p class="group">
                    <el-color-picker
                        v-model="borderColor"
                        color-format="hex"
                    ></el-color-picker>
                    <el-input
                        v-model="borderColor"
                        placeholder="请选择色号"
                    ></el-input>
                </p>
            </div>
            <div class="box">
                <span class="field">hover颜色</span>
                <p class="group">
                    <el-color-picker
                        v-model="hoverColor"
                        color-format="hex"
                    ></el-color-picker>
                    <el-input
                        v-model="hoverColor"
                        placeholder="请选择色号"
                    ></el-input>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "PagerEditor",
    props: {
        borderStyleOption: [Array, Object],
        animationOption: [Array, Object],
        generalStyleOption: [Array, Object],
    },
    computed: {
        selectedControl() {
            return this.$store.state.selected;
        },
        ...fields,
    },
    methods: {
        visualNodeRemove() {
            this.$confirm("确定删除当前节点？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info",
            })
                .then(() => {
                    this.$store.commit(
                        "Hope/RemoveControl",
                        this.selectedControl.id
                    );
                    this.$store.state.selected = {};
                })
                .catch(() => {});
        },
    },
};
</script>
