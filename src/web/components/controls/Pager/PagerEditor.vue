<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-08 17:12:16
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'page'">
        <template v-slot:base>
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
        </template>
        <template v-slot:options>
            <div class="control_group">
                <div class="box">
                    <span class="field">保留按钮数</span>
                    <p>
                        <el-slider
                            v-model="omit"
                            :min="1"
                            :max="15"
                            show-input
                            :step="2"
                        ></el-slider>
                    </p>
                </div>

                <div class="box">
                    <span class="field layout-lineBlock"
                        >上翻页描述</span
                    >
                    <el-input
                        v-model="prevName"
                        placeholder="请输入上翻页描述"
                    ></el-input>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock"
                        >下翻页描述</span
                    >
                    <el-input
                        v-model="nextName"
                        placeholder="请输入下翻页描述"
                    ></el-input>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">是否完整模式</span>
                    <el-switch v-model="extend"> </el-switch>
                </div>
            </div>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "PagerEditor",
    data() {
        return {};
    },
    props: {
        borderStyleOption: [Array, Object],
        animationOption: [Array, Object],
        generalStyleOption: [Array, Object],
    },
    computed: {
        ...fields,
    },
};
</script>
