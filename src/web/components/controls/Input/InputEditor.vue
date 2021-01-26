<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-26 14:54:59
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'input'">
        <template v-slot:base>
            <div class="control_group">
                <div class="box">
                    <span class="field">宽度</span>
                    <p>
                        <el-slider
                            v-model="width"
                            :min="1"
                            :max="500"
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
                            :max="500"
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
                    <span class="field">边框圆角大小</span>
                    <p>
                        <el-slider
                            v-model="borderRadius"
                            :min="1"
                            :max="20"
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
                    <span class="field">hover边框颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="hoverBorderColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="hoverBorderColor"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div>
                <div class="box">
                    <span class="field">焦点边框颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="focusBorderColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="focusBorderColor"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div>
            </div>
        </template>
        <template v-slot:options>
            <div class="control_group">
                <div class="box">
                    <span class="field">扩展内容</span>
                    <el-input
                        type="textarea"
                        v-model="extendContent"
                        placeholder="请输入扩展内容"
                    ></el-input>
                </div>
                <div class="box">
                    <span class="field">扩展内容位置</span>
                    <div>
                        <el-radio v-model="extendContentLocation" label="left"
                            >居左</el-radio
                        >
                        <el-radio v-model="extendContentLocation" label="right"
                            >居右</el-radio
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
    name: "InputEditor",
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
