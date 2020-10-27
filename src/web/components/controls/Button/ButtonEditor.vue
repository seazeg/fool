<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-23 18:05:01
 * @Description  : 
-->
<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.name.includes('button')
        "
    >
        <!-- 基础属性 -->
        <el-tabs v-model="activeName" @tab-click="">
            <el-tab-pane label="基础属性" name="first">
                <div class="control_group">
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
                        <span class="field">常态字体颜色</span>
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
                        <span class="field">常态背景颜色</span>
                        <p class="group">
                            <el-color-picker
                                v-model="bgColor"
                                color-format="hex"
                            ></el-color-picker>
                            <el-input
                                v-model="bgColor"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                    <div class="box">
                        <span class="field">效果颜色</span>
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
            </el-tab-pane>
            <el-tab-pane label="布局属性" name="second">布局属性</el-tab-pane>
            <el-tab-pane label="效果属性" name="third">效果属性</el-tab-pane>
            <el-tab-pane label="其他属性" name="four">其他属性</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "ButtonEditor",
    data() {
        return {
            activeName: "first",
        };
    },
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
