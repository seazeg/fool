<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.label.includes('box')
        "
    >
        <!-- 基础属性 -->
        <div class="control_group_title">基础属性：</div>
        <div class="control_group">
            <div class="box">
                <span class="field">内容（Text）</span>
                <p>
                    <el-input
                        v-model="selectedControl.name"
                        placeholder="请输入名称"
                    ></el-input>
                </p>
            </div>
            <div class="box">
                <span class="field">自定义类名（customClass）</span>
                <p>
                    <el-input
                        disabled
                        v-model="selectedControl.customClass"
                        placeholder="请输入类名"
                    ></el-input>
                </p>
            </div>
        </div>
        <!-- 基础样式 -->
        <div class="control_group_title">基础样式：</div>
        <div class="control_group">
            <div class="box">
                <span class="field"
                    >宽度（width）
                    <el-switch
                        class="fr"
                        v-model="selectedControl.isPer.width"
                        active-text="百分比"
                        active-color="#13ce66"
                    ></el-switch>
                </span>
                <p>
                    <el-slider
                        v-model="width"
                        :show-tooltip="false"
                        :min="1"
                        :max="500"
                        show-input
                        :step="0.1"
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field"
                    >高度（height）
                    <el-switch
                        class="fr"
                        v-model="selectedControl.isPer.height"
                        active-text="百分比"
                        active-color="#13ce66"
                    ></el-switch>
                </span>
                <p>
                    <el-slider
                        v-model="height"
                        :min="1"
                        :max="500"
                        show-input
                        :step="0.1"
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">背景颜色（backgroundColor）</span>
                <p class="group">
                    <el-color-picker
                        v-model="backgroundColor"
                        color-format="rgb"
                    ></el-color-picker>
                    <el-input
                        v-model="backgroundColor"
                        placeholder="请选择色号"
                    ></el-input>
                </p>
            </div>
        </div>
        <!-- 布局 -->
        <div class="control_group_title">布局属性：</div>
        <div class="control_group">
            <div class="box">
                <div class="left">
                    <span class="field">内间距-左（paddingLeft）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="paddingLeft"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="right">
                    <span class="field">内间距-右（paddingRight）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="paddingRight"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
            </div>
            <div class="box">
                <div class="left">
                    <span class="field">内间距-上（paddingTop）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="paddingTop"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="right">
                    <span class="field">内间距-下（paddingBottom）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="paddingBottom"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
            </div>
            <div class="line"></div>
            <div class="box">
                <div class="left">
                    <span class="field">外间距-左（marginLeft）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="marginLeft"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="right">
                    <span class="field">外间距-右（marginRight）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="marginRight"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
            </div>

            <div class="box">
                <div class="left">
                    <span class="field">外间距-上（marginTop）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="marginTop"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="right">
                    <span class="field">外间距-下（marginBottom）</span>
                    <p>
                        <el-slider
                            :show-tooltip="false"
                            v-model="marginBottom"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fields } from "../../controls/fields.js";
import GradientPicker from "../../plugins/gradientColorPicker.vue";
export default {
    name: "BoxEditor",
    components: {
        GradientPicker,
    },
    props: {
        borderStyleOption: [Array, Object],
        animationOption: [Array, Object],
    },
    computed: {
        selectedControl() {
            return this.$store.state.selected;
        },
        ...fields,
    },
};
</script>
