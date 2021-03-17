<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-17 16:19:40
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'input'">
        <template v-slot:base>
            <el-collapse v-model="base">
                <el-collapse-item title="基础样式" name="1">
                    <div class="box">
                        <span class="field"
                            >宽度
                            <el-tooltip
                                :content="'当前单位：' + unitSwitch.width + ''"
                                placement="right"
                            >
                                <el-switch
                                    class="unit"
                                    v-model="unitSwitch.width"
                                    active-value="%"
                                    inactive-value="px"
                                >
                                </el-switch>
                            </el-tooltip>
                        </span>
                        <p v-if="unitSwitch.width == '%'">
                            <el-slider
                                v-model="width"
                                :min="1"
                                :max="100"
                                show-input
                                :step="10"
                            ></el-slider>
                        </p>
                        <p v-if="unitSwitch.width == 'px'">
                            <el-slider
                                v-model="width_px"
                                :min="50"
                                :max="maxWidth"
                                show-input
                                :step="10"
                            ></el-slider>
                        </p>
                    </div>
                    <div class="box">
                        <span class="field">高度</span>
                        <p>
                            <el-slider
                                v-model="height"
                                :min="20"
                                :max="maxHeight"
                                show-input
                                :step="10"
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
                        <span class="field">圆角大小</span>
                        <p>
                            <el-slider
                                v-model="borderRadius"
                                :min="0"
                                :max="height"
                                show-input
                                :step="1"
                            ></el-slider>
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
                <el-collapse-item title="悬浮样式" name="1">
                    <div class="box">
                        <span class="field">边框颜色</span>
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
                </el-collapse-item>
                <el-collapse-item title="焦点样式" name="1">
                    <div class="box">
                        <span class="field">边框颜色</span>
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
                </el-collapse-item>
            </el-collapse>
        </template>
        <template v-slot:options>
            <el-collapse v-model="options">
                <el-collapse-item title="基础配置" name="1">
                    <div class="box">
                        <span class="field">扩展内容位置</span>
                        <div>
                            <el-radio
                                v-model="extendContentLocation"
                                label="left"
                                >居左</el-radio
                            >
                            <el-radio
                                v-model="extendContentLocation"
                                label="right"
                                >居右</el-radio
                            >
                        </div>
                    </div>
                    <div class="box">
                        <span class="field">扩展内容</span>
                        <el-input
                            type="textarea"
                            v-model="extendContent"
                            placeholder="请输入扩展内容(HTML)"
                        ></el-input>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "InputEditor",
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
        unitSwitch() {
            return this.$store.state.selected.unitSwitch;
        },
    },
};
</script>
