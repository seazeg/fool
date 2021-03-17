<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-17 16:26:43
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'datepicker'">
        <template v-slot:base>
            <el-collapse v-model="base">
                <el-collapse-item title="基础样式" name="1">
                    <div class="box">
                        <span class="field">尺寸大小</span>
                        <p>
                            <el-slider v-model="winSize" :min="300" :max="580" show-input :step="1"></el-slider>
                        </p>
                    </div>
                    <div class="box">
                        <span class="field">主题颜色</span>
                        <p class="group">
                            <el-color-picker v-model="mainColor" color-format="hex"></el-color-picker>
                            <el-input v-model="mainColor" placeholder="请选择色号"></el-input>
                        </p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="字体" name="2">
                    <div class="box">
                        <span class="field">字体大小</span>
                        <p>
                            <el-slider v-model="fontSize" :min="12" :max="20" show-input :step="1"></el-slider>
                        </p>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </template>

        <template v-slot:options>
            <el-collapse v-model="options">
                <el-collapse-item title="基础配置" name="1">
                    <div class="box">
                        <span class="field layout-lineBlock">日期时间格式</span>
                        <el-input v-model="format" placeholder="默认:yyyy-MM-dd HH:mm:ss"></el-input>
                    </div>
                    <div class="box">
                        <span class="field layout-lineBlock">日期时间显示模式</span>
                        <div class="radio_box">
                            <el-radio v-model="type" label="date">Date</el-radio>
                            <el-radio v-model="type" label="datetime">DateTime</el-radio>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </template>
    </layout-editor>
</template>

<script>
    import {
        fields
    } from "./fields.js";

    export default {
        name: "DatepickerEditor",
        data() {
            return {
                base: ["1", "2", "3"],
                effect: ["1", "2", "3"],
                options: ["1", "2", "3"],
            };
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