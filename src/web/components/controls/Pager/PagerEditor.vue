<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-17 16:24:05
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'page'">
        <template v-slot:base>
            <el-collapse v-model="base">
                <el-collapse-item title="基础样式" name="1">
                    <div class="box">
                        <span class="field">内间距</span>
                        <p>
                            <el-slider
                                v-model="padding"
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
                                v-model="btnHeight"
                                :min="30"
                                :max="50"
                                show-input
                                :step="1"
                            ></el-slider>
                        </p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="字体" name="2">
                    <div class="box">
                        <span class="field">字体大小</span>
                        <p>
                            <el-slider
                                v-model="fontSize"
                                :min="12"
                                :max="30"
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
                </el-collapse-item>
                <el-collapse-item title="边框" name="3">
                    <div class="box">
                        <span class="field">边框宽度</span>
                        <p>
                            <el-slider
                                v-model="borderWidth"
                                :min="0"
                                :max="10"
                                show-input
                                :step="1"
                            ></el-slider>
                        </p>
                    </div>
                    <div class="box">
                        <span class="field">边框样式</span>
                        <p>
                            <el-select
                                v-model="borderStyle"
                                style="display:block"
                                placeholder="请选择边框样式"
                            >
                                <el-option
                                    v-for="item in borderStyleOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </p>
                    </div>
                    <div class="box">
                        <span class="field">边框颜色</span>
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
                </el-collapse-item>
            </el-collapse>
        </template>

        <template v-slot:effect>
            <el-collapse v-model="effect">
                <el-collapse-item title="选中样式" name="1">
                    <div class="box">
                        <span class="field">字体颜色</span>
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
                        <span class="field">背景颜色</span>
                        <p class="group">
                            <el-color-picker
                                v-model="selectBg"
                                color-format="hex"
                            ></el-color-picker>
                            <el-input
                                v-model="selectBg"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="悬浮样式" name="2">
                    <div class="box">
                        <span class="field">字体颜色</span>
                        <p class="group">
                            <el-color-picker
                                v-model="hoverSelectColor"
                                color-format="hex"
                            ></el-color-picker>
                            <el-input
                                v-model="hoverSelectColor"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                    <div class="box">
                        <span class="field">字体颜色</span>
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
                </el-collapse-item>
            </el-collapse>
        </template>

        <template v-slot:options>
            <el-collapse v-model="options">
                <el-collapse-item title="基础配置" name="1">
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
                        <span class="field layout-lineBlock">上翻页描述</span>
                        <el-input
                            v-model="prevName"
                            placeholder="请输入上翻页描述"
                        ></el-input>
                    </div>
                    <div class="box">
                        <span class="field layout-lineBlock">下翻页描述</span>
                        <el-input
                            v-model="nextName"
                            placeholder="请输入下翻页描述"
                        ></el-input>
                    </div>
                    <div class="box">
                        <span class="field layout-lineBlock">是否完整模式</span>
                        <el-switch v-model="extend"> </el-switch>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "PagerEditor",
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
