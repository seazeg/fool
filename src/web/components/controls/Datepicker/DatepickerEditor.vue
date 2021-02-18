<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-18 16:18:40
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'datepicker'">
        <template v-slot:base>
            <div class="control_group">
                <div class="box">
                    <span class="field">字体大小</span>
                    <p>
                        <el-slider
                            v-model="fontSize"
                            :min="12"
                            :max="20"
                            show-input
                            :step="1"
                        ></el-slider>
                    </p>
                </div>
                <!-- <div class="box">
                    <span class="field">主要字体颜色</span>
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
                    <span class="field">主要背景颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="bgColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="color"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div> -->
                <!-- <div class="box">
                    <span class="field">选中字体颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="selectColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="color"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div>
                <div class="box">
                    <span class="field">选中背景颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="selectBgColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="bgColor"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div>
                <div class="box">
                    <span class="field">悬浮背景颜色</span>
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
                </div> -->
            </div>
        </template>
        <template v-slot:options>
            <div class="control_group">
                <div class="box">
                    <span class="field layout-lineBlock">日期时间格式</span>
                    <el-input
                        v-model="format"
                        placeholder="默认:yyyy-MM-dd HH:mm:ss"
                    ></el-input>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">日期时间显示模式</span>
                    <div class="radio_box">
                        <el-radio v-model="type" label="date">Date</el-radio>
                        <el-radio v-model="type" label="datetime"
                            >DateTime</el-radio
                        >
                    </div>
                </div>
            </div>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "DatepickerEditor",
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
