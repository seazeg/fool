<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.label.includes('button')
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
                    <el-input
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
                        :min="50"
                        :max="500"
                        show-input
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">高度（height）</span>
                <p>
                    <el-slider
                        v-model="height"
                        :min="25"
                        :max="500"
                        show-input
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">字号（fontSize）</span>
                <p>
                    <el-slider
                        v-model="fontSize"
                        :max="50"
                        show-input
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">圆角大小（borderRadius）</span>
                <p>
                    <el-slider
                        v-model="borderRadius"
                        :max="50"
                        show-input
                    ></el-slider>
                </p>
            </div>
            <div class="control_group_title">颜色：</div>
            <div class="control_group">
                <div class="box">
                    <div class="left">
                        <span class="field">字体颜色（color）</span>
                        <p class="group">
                            <el-color-picker
                                v-model="color"
                                color-format="rgb"
                            ></el-color-picker>
                            <el-input
                                v-model="color"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                    <div class="right">
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
                <div class="box">
                    <span class="field">渐变色（gradientColor）</span>
                    <GradientPicker
                        :color="backgroundImage"
                        :container="'style'"
                    ></GradientPicker>
                </div>
            </div>

            <div class="control_group_title">边框：</div>
            <div class="control_group">
                <div class="box">
                    <span class="field">边框宽（borderWidth）</span>
                    <p>
                        <el-slider
                            v-model="borderWidth"
                            :max="10"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <div class="left">
                        <span class="field">边框样式（borderStyle）</span>
                        <p>
                            <el-select
                                v-model="borderStyle"
                                placeholder="请选择"
                                style="width:100%"
                            >
                                <el-option
                                    v-for="ele in borderStyleOption"
                                    :key="ele.value"
                                    :label="ele.label"
                                    :value="ele.value"
                                >
                                </el-option>
                            </el-select>
                        </p>
                    </div>
                    <div class="right">
                        <span class="field">边框颜色（borderColor）</span>
                        <p class="group">
                            <el-color-picker
                                v-model="borderColor"
                                color-format="rgb"
                            ></el-color-picker>
                            <el-input
                                v-model="borderColor"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 交互属性 -->
        <div class="control_group_title">交互样式：</div>
        <div class="control_group">
            <div class="box">
                <span class="field">字号（fontSize）</span>
                <p>
                    <el-slider
                        v-model="hvr_fontSize"
                        :max="50"
                        show-input
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">圆角大小（borderRadius）</span>
                <p>
                    <el-slider
                        v-model="hvr_borderRadius"
                        :max="50"
                        show-input
                    ></el-slider>
                </p>
            </div>

            <div class="control_group_title">颜色：</div>
            <div class="control_group">
                <div class="box">
                    <div class="left">
                        <span class="field">字体颜色（color）</span>
                        <p class="group">
                            <el-color-picker
                                v-model="hvr_color"
                                color-format="rgb"
                            ></el-color-picker>
                            <el-input
                                v-model="hvr_color"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                    <div class="right">
                        <span class="field">背景颜色（backgroundColor）</span>
                        <p class="group">
                            <el-color-picker
                                v-model="hvr_backgroundColor"
                                color-format="rgb"
                            ></el-color-picker>
                            <el-input
                                v-model="hvr_backgroundColor"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                </div>
                <div class="box">
                    <span class="field">渐变色（gradientColor）</span>
                    <GradientPicker
                        :color="hvr_backgroundImage"
                        :container="'effect'"
                    ></GradientPicker>
                </div>
            </div>

            <div class="control_group_title">边框：</div>
            <div class="control_group">
                <div class="box">
                    <span class="field">边框宽（borderWidth）</span>
                    <p>
                        <el-slider
                            v-model="hvr_borderWidth"
                            :max="10"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <div class="left">
                        <span class="field">边框样式（borderStyle）</span>
                        <p>
                            <el-select
                                v-model="hvr_borderStyle"
                                placeholder="请选择"
                                style="width:100%"
                                :clearable="true"
                            >
                                <el-option
                                    v-for="ele in borderStyleOption"
                                    :key="ele.value"
                                    :label="ele.label"
                                    :value="ele.value"
                                >
                                </el-option>
                            </el-select>
                        </p>
                    </div>
                    <div class="right">
                        <span class="field">边框颜色（borderColor）</span>
                        <p class="group">
                            <el-color-picker
                                v-model="hvr_borderColor"
                                color-format="rgb"
                            ></el-color-picker>
                            <el-input
                                v-model="hvr_borderColor"
                                placeholder="请选择色号"
                            ></el-input>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 动画 -->
        <div class="control_group_title">动画参数：</div>
        <div class="control_group">
            <div class="box">
                <span class="field">过渡时间（transitionDuration）</span>
                <p>
                    <el-slider
                        v-model="transitionDuration"
                        :min="0"
                        :max="5"
                        :step="0.1"
                        show-input
                    >
                    </el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">动画效果（animation）</span>
                <p>
                    <el-select
                        v-model="animationName"
                        placeholder="请选择"
                        style="width:100%"
                        :clearable="true"
                    >
                        <el-option-group
                            v-for="group in animationOption"
                            :key="group.label"
                            :label="group.label"
                        >
                            <el-option
                                v-for="item in group.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-option-group>
                    </el-select>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { button } from "../../controls/fields.js";
import GradientPicker from "../../plugins/gradientColorPicker.vue";
export default {
    name: "PagerEditor",
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
        ...button,
    },
};
</script>
