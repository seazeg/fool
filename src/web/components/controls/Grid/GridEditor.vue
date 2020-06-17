<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.label.includes('grid')
        "
    >
        <!-- 基础属性 -->
        <div class="control_group_title">基础属性：</div>
        <div class="control_group">
            <div class="box">
                <span class="field">按钮标题（buttonText）</span>
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
                    <el-input disabled
                        v-model="selectedControl.customClass"
                        placeholder="请输入类名"
                    ></el-input>
                </p>
            </div>
        </div>
        <div class="control_group_title">基础样式：</div>
        <div class="control_group">
            <div class="box">
                <span class="field">宽度（width）</span>
                <p>
                    <el-slider
                        v-model="width"
                        :min="1"
                        :max="100"
                        show-input
                        :step="0.1"
                    ></el-slider>
                </p>
            </div>
            <!-- <div class="box">
                <span class="field">高度（height）</span>
                <p>
                    <el-slider
                        v-model="height"
                        :min="1"
                        :max="100"
                        show-input
                        :step="0.1"
                    ></el-slider>
                </p>
            </div> -->
            <div class="control_group_title">布局：</div>
            <div class="control_group">
                <div class="box">
                    <span class="field">内间距-左（paddingLeft）</span>
                    <p>
                        <el-slider
                            v-model="paddingLeft"
                            :max="30"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">内间距-右（paddingRight）</span>
                    <p>
                        <el-slider
                            v-model="paddingRight"
                            :max="30"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">内间距-上（paddingTop）</span>
                    <p>
                        <el-slider
                            v-model="paddingTop"
                            :max="30"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">内间距-下（paddingBottom）</span>
                    <p>
                        <el-slider
                            v-model="paddingBottom"
                            :max="30"
                            show-input
                        ></el-slider>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { grid } from "../../controls/fields.js";
import GradientPicker from "../../plugins/gradientColorPicker.vue";
export default {
    name: "GridEditor",
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
        ...grid,
    },
};
</script>
