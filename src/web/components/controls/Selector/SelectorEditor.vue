<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-11 14:45:01
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'selector'">
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
                            :step="1"
                        ></el-slider>
                    </p>
                    <p v-if="unitSwitch.width == 'px'">
                        <el-slider
                            v-model="width_px"
                            :min="50"
                            :max="maxWidth"
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
                            :min="20"
                            :max="maxHeight"
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
                            :min="12"
                            :max="30"
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
                    <span class="field">选中背景颜色</span>
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
                <div class="box">
                    <span class="field">选中字体颜色</span>
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
                    <span class="field">悬浮背景颜色</span>
                    <p class="group">
                        <el-color-picker
                            v-model="hoverBg"
                            color-format="hex"
                        ></el-color-picker>
                        <el-input
                            v-model="hoverBg"
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
            </div>
        </template>
        <template v-slot:options>
            <div class="control_group">
                <div class="box">
                    <span class="field layout-lineBlock"
                        >是否自动显示隐藏滚动条
                    </span>
                    <el-switch v-model="autoHideBar"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock"
                        >搜索下拉模式(桌面端)</span
                    >
                    <el-switch v-model="searchMode"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock"
                        >自定义下拉字体图标</span
                    >
                    <el-input
                        v-model="switchIcon"
                        placeholder="请输入图标类名(Class)"
                    ></el-input>
                </div>
            </div>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "SelectorEditor",
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
