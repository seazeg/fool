<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-18 23:04:08
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'zoom'">
        <template v-slot:base>
            <div class="control_group">
                <div class="box">
                    <span class="field">选择区域的颜色</span>
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
                    <span class="field">选择区域的透明度</span>
                    <p>
                        <el-slider
                            v-model="bgOpacity"
                            :min="0"
                            :max="1"
                            show-input
                            :step="0.1"
                        ></el-slider>
                    </p>
                </div>
            </div>
        </template>
        <template v-slot:options>
            <div class="control_group">
                <div class="box">
                    <span class="field layout-lineBlock">显示模式</span>
                    <div class="radio_box">
                        <el-radio v-model="mode" label="outside">外部</el-radio>
                        <el-radio v-model="mode" label="inside">内部</el-radio>
                    </div>
                </div>
                <div class="box">
                    <span class="field">显示倍率</span>
                    <p>
                        <el-slider
                            v-model="zoom"
                            :min="1"
                            :max="10"
                            show-input
                            :step="1"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">是否允许缩放</span>
                    <el-switch v-model="zoomable"></el-switch>
                </div>
            </div>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "ZoomEditor",
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
