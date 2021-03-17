<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-17 14:13:04
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'button'">
        <template v-slot:base>
            <div class="control_group">
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
                            :min="10"
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
                            :min="10"
                            :max="maxHeight"
                            show-input
                            :step="10"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">字体大小</span>
                    <p>
                        <el-slider
                            v-model="fontSize"
                            :min="12"
                            :max="100"
                            show-input
                            :step="1"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">触发效果时透明度</span>
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
                    <span class="field">悬浮字体颜色</span>
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
                <div class="box">
                    <span class="field">悬浮背景颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="hoverBgColor"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="hoverBgColor"
                            placeholder="请选择色号"
                        ></el-input>
                    </p>
                </div>
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
                            style="display: block"
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
            </div>
        </template>
        <template v-slot:layout> </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "ButtonEditor",
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
