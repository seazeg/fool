<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-17 16:10:24
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'radio'">
        <template v-slot:base>
            <el-collapse v-model="base">
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
                <el-collapse-item title="图标" name="3">
                    <div class="box">
                        <span class="field">图标颜色</span>
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
                </el-collapse-item>
            </el-collapse>
        </template>

        <template v-slot:effect>
            <el-collapse v-model="effect">
                <el-collapse-item title="选中样式" name="1">
                    <div class="box">
                        <span class="field">图标颜色</span>
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
                </el-collapse-item>
            </el-collapse>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "RadioEditor",
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
