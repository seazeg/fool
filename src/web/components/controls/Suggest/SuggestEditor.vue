<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-15 14:10:48
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'suggest'">
        <template v-slot:base>
            <div class="control_group">
                <div class="box">
                    <span class="field">宽度
                        <el-tooltip :content="'当前单位：' + unitSwitch.width + ''" placement="right">
                            <el-switch class="unit" v-model="unitSwitch.width" active-value="%" inactive-value="px">
                            </el-switch>
                        </el-tooltip>
                    </span>
                    <p v-if="unitSwitch.width == '%'">
                        <el-slider v-model="width" :min="1" :max="100" show-input :step="10"></el-slider>
                    </p>
                    <p v-if="unitSwitch.width == 'px'">
                        <el-slider v-model="width_px" :min="50" :max="maxWidth" show-input :step="10"></el-slider>
                    </p>
                </div>
               <div class="box">
                    <span class="field">高度</span>
                    <p>
                        <el-slider v-model="height" :min="20" :max="maxHeight" show-input :step="10"></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">字体大小</span>
                    <p>
                        <el-slider v-model="fontSize" :min="12" :max="30" show-input :step="1"></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">圆角大小</span>
                    <p>
                        <el-slider v-model="borderRadius" :min="0" :max="height" show-input :step="1"></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">字体颜色</span>
                    <p class="group">
                        <el-color-picker v-model="color" color-format="hex"></el-color-picker>
                        <el-input v-model="color" placeholder="请选择色号"></el-input>
                    </p>
                </div>
                <div class="box">
                    <span class="field">常态边框颜色</span>
                    <p class="group">
                        <el-color-picker v-model="borderColor" color-format="hex"></el-color-picker>
                        <el-input v-model="borderColor" placeholder="请选择色号"></el-input>
                    </p>
                </div>
                <div class="box">
                    <span class="field">悬浮边框颜色</span>
                    <p class="group">
                        <el-color-picker v-model="hoverBorderColor" color-format="hex"></el-color-picker>
                        <el-input v-model="hoverBorderColor" placeholder="请选择色号"></el-input>
                    </p>
                </div>
                <div class="box">
                    <span class="field">焦点边框颜色</span>
                    <p class="group">
                        <el-color-picker v-model="focusBorderColor" color-format="hex"></el-color-picker>
                        <el-input v-model="focusBorderColor" placeholder="请选择色号"></el-input>
                    </p>
                </div>
            </div>
        </template>
        <template v-slot:options>
            <div class="control_group">
                <div class="box">
                    <span class="field layout-lineBlock">无匹配时描述</span>
                    <el-input v-model="noMatchName" placeholder="请输入无匹配时描述"></el-input>
                </div>
            </div>
        </template>
    </layout-editor>
</template>

<script>
    import {
        fields
    } from "./fields.js";

    export default {
        name: "SuggestEditor",
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
            unitSwitch() {
                return this.$store.state.selected.unitSwitch;
            },
        },
    };
</script>