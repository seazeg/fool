<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.label.includes('grid')
        "
    >
        <!-- 基础属性 -->
        <div class="control_group_title">
            基础属性：
            <el-button
                type="danger"
                round
                @click="visualNodeRemove()"
                icon="el-icon-delete-solid"
                size="mini"
            ></el-button>
        </div>
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
                        v-model="selectedControl.spcConfig.isPer.width"
                        active-text="百分比"
                        active-color="#13ce66"
                    ></el-switch>
                </span>
                <p>
                    <el-select
                        v-model="width"
                        placeholder="特殊选择项"
                        class="fixed"
                        clearable
                    >
                        <el-option
                            v-for="item in generalStyleOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <el-slider
                        v-model="width"
                        :show-tooltip="false"
                        :min="1"
                        :max="selectedControl.spcConfig.isPer.width ? 100 : 500"
                        show-input
                        :step="0.1"
                        v-if="/\d/.test(width)"
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field"
                    >高度（height）
                    <el-switch
                        class="fr"
                        v-model="selectedControl.spcConfig.isPer.height"
                        active-text="百分比"
                        active-color="#13ce66"
                    ></el-switch>
                </span>
                <p>
                    <el-select
                        v-model="height"
                        placeholder="特殊选择项"
                        class="fixed"
                        clearable
                    >
                        <el-option
                            v-for="item in generalStyleOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <el-slider
                        v-model="height"
                        :min="1"
                        :max="selectedControl.spcConfig.isPer.height ? 100 : 500"
                        show-input
                        :step="0.1"
                        v-if="/\d/.test(height)"
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
    name: "GridEditor",
    components: {
        GradientPicker,
    },
    props: {
        borderStyleOption: [Array, Object],
        animationOption: [Array, Object],
        generalStyleOption: [Array, Object],
    },
    computed: {
        selectedControl() {
            return this.$store.state.selected;
        },
        ...fields,
    },
    methods: {
        visualNodeRemove() {
            this.$confirm("确定删除当前节点？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info",
            })
                .then(() => {
                    this.$store.commit(
                        "Hope/removeControl",
                        this.selectedControl.id
                    );
                    this.$store.state.selected = {};
                })
                .catch(() => {});
        },
    },
};
</script>
