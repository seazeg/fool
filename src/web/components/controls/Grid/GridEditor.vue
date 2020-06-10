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
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">高度（height）</span>
                <p>
                    <el-slider
                        v-model="height"
                        :min="1"
                        :max="100"
                        show-input
                    ></el-slider>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { grid } from "../../controls/style.js";
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
