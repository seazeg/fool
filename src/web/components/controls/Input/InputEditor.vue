<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.label.includes('input')
        "
    >
        <!-- 基础属性 -->
        <div class="control_group_title">基础属性：</div>
        <div class="control_group">
            <div class="box">
                <span class="field">标题（text）</span>
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
            <div class="box">
                <span class="field">PlaceHolder（PlaceHolder）</span>
                <p>
                    <el-input
                        v-model="selectedControl.placeholder"
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
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">高度（height）</span>
                <p>
                    <el-slider
                        v-model="height"
                        :min="10"
                        :max="100"
                        show-input
                    ></el-slider>
                </p>
            </div>
            <div class="box">
                <span class="field">字号（fontSize）</span>
                <p>
                    <el-slider
                        v-model="fontSize"
                        :max="30"
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

        <div class="control_group_title">交互样式：</div>
        <div class="control_group">
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
    </div>
</template>

<script>
import { input } from "../../controls/fields.js";
export default {
    name: "InputEditor",
    props: {
        borderStyleOption: [Array, Object],
        animationOption: [Array, Object],
    },
    computed: {
        selectedControl() {
            return this.$store.state.selected;
        },
        ...input,
    },
};
</script>
