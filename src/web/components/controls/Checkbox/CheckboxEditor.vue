<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-21 17:42:36
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'checkbox'">
        <template v-slot:base>
            <div class="control_group">
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
                    <span class="field">常态边框颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="iconColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="iconColor"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div>
                <div class="box">
                    <span class="field">效果颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="iconHoverSelectColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="iconHoverSelectColor"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div>
            </div>
        </template>
        <template v-slot:layout> </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";
export default {
    name: "CheckboxEditor",
    props: {
        borderStyleOption: [Array, Object],
        animationOption: [Array, Object],
        generalStyleOption: [Array, Object],
    },
    computed: {
        ...fields,
    },
    methods: {
        visualNodeRemove() {
            this.$confirm("确定移除当前组件？", "提示", {
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
