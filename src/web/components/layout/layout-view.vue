<template>
    <div class="wrapper">
        <!-- 视图 -->
        <div class="view">
            <el-tabs v-model="tabChecked" type="border-card">
                <el-tab-pane name="preview">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-yulan"></i>preview</span
                    >
                    <draggable
                        class="view-box preview"
                        id="preview"
                        :list="controls"
                        :group="{ name: 'controls' }"
                        @change="change"
                    >
                        <component
                            :is="ele.label"
                            v-for="(ele, i) in controls"
                            :key="i"
                            :ele="ele"
                            @choose="choose(ele)"
                        >
                        </component>
                    </draggable>
                </el-tab-pane>
                <el-tab-pane name="html">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-html"></i>html</span
                    >
                    <div class="view-box html" v-highlight>
                        <!-- <pre>
                        <code v-text="workarea.html">
                        </code>
                        </pre> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane name="css">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-css"></i>css</span
                    >
                    <div class="view-box css" v-highlight>
                        <!-- <pre>
              <code v-html="workarea.css">
              </code>
            </pre> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane name="javascript">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-js"></i>javascript</span
                    >
                    <div class="view-box js" v-highlight>
                        <!-- <pre>
              <code v-html="workarea.js">
              </code>
            </pre> -->
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <div class="edit" v-if="Object.keys(selectedControl).length > 0">
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
                            :min="100"
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
                            :min="40"
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
                <div class="control_group_title">主要颜色：</div>
                <div class="control_group">
                    <div class="box">
                        <div class="left">
                            <span class="field">字体颜色（color）</span>
                            <p class="group">
                                <el-color-picker
                                    v-model="color"
                                    show-alpha
                                ></el-color-picker>
                                <el-input
                                    v-model="color"
                                    placeholder="请输入色号"
                                ></el-input>
                            </p>
                        </div>
                        <div class="right">
                            <span class="field"
                                >背景颜色（backgroundColor）</span
                            >
                            <p class="group">
                                <el-color-picker
                                    v-model="backgroundColor"
                                    show-alpha
                                ></el-color-picker>
                                <el-input
                                    v-model="backgroundColor"
                                    placeholder="请输入色号"
                                ></el-input>
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="left">
                            <span class="field"
                                >背景渐变色开始（gradientStart）</span
                            >
                            <p class="group">
                                <el-color-picker
                                    v-model="gradientStart"
                                    color-format="rgb"
                                ></el-color-picker>
                                <el-input
                                    v-model="gradientStart"
                                    placeholder="请输入色号"
                                ></el-input>
                            </p>
                        </div>
                        <div class="right">
                            <span class="field"
                                >背景渐变色结束（gradientEnd）</span
                            >
                            <p class="group">
                                <el-color-picker
                                    v-model="gradientEnd"
                                    color-format="rgb"
                                ></el-color-picker>
                                <el-input
                                    v-model="gradientEnd"
                                    placeholder="请输入色号"
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
                                    placeholder="请输入色号"
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
                                    show-alpha
                                ></el-color-picker>
                                <el-input
                                    v-model="hvr_color"
                                    placeholder="请输入色号"
                                ></el-input>
                            </p>
                        </div>
                        <div class="right">
                            <span class="field"
                                >背景颜色（backgroundColor）</span
                            >
                            <p class="group">
                                <el-color-picker
                                    v-model="hvr_backgroundColor"
                                    show-alpha
                                ></el-color-picker>
                                <el-input
                                    v-model="hvr_backgroundColor"
                                    placeholder="请输入色号"
                                ></el-input>
                            </p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="left">
                            <span class="field"
                                >背景渐变色开始（gradientStart）</span
                            >
                            <p class="group">
                                <el-color-picker
                                    v-model="hvr_gradientStart"
                                    color-format="rgb"
                                ></el-color-picker>
                                <el-input
                                    v-model="hvr_gradientStart"
                                    placeholder="请输入色号"
                                ></el-input>
                            </p>
                        </div>
                        <div class="right">
                            <span class="field"
                                >背景渐变色结束（gradientEnd）</span
                            >
                            <p class="group">
                                <el-color-picker
                                    v-model="hvr_gradientEnd"
                                    color-format="rgb"
                                ></el-color-picker>
                                <el-input
                                    v-model="hvr_gradientEnd"
                                    placeholder="请输入色号"
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
                                    placeholder="请输入色号"
                                ></el-input>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { button } from "../plugins/style.js";
export default {
    name: "layout-view",
    display: "Clone",
    order: 2,
    data() {
        return {
            tabChecked: "preview",
            animationOption: [
                {
                    label: "基础动画",
                    options: [
                        {
                            value: "bounce",
                            label: "bounce",
                        },
                        {
                            value: "flash",
                            label: "flash",
                        },
                        {
                            value: "pulse",
                            label: "pulse",
                        },
                        {
                            value: "rubberBand",
                            label: "rubberBand",
                        },
                        {
                            value: "shakeX",
                            label: "shakeX",
                        },
                        {
                            value: "shakeY",
                            label: "shakeY",
                        },
                        {
                            value: "headShake",
                            label: "headShake",
                        },
                        {
                            value: "swing",
                            label: "swing",
                        },
                        {
                            value: "tada",
                            label: "tada",
                        },
                        {
                            value: "wobble",
                            label: "wobble",
                        },
                        {
                            value: "jello",
                            label: "jello",
                        },
                        {
                            value: "heartBeat",
                            label: "heartBeat",
                        },
                    ],
                },
                {
                    label: "Flippers",
                    options: [
                        {
                            value: "flip",
                            label: "flip",
                        },
                        {
                            value: "flipInX",
                            label: "flipInX",
                        },
                        {
                            value: "flipInY",
                            label: "flipInY",
                        },
                        {
                            value: "flipOutX",
                            label: "flipOutX",
                        },
                        {
                            value: "flipOutY",
                            label: "flipOutY",
                        },
                    ],
                },
            ],
            borderStyleOption: [
                {
                    value: "solid",
                    label: "solid",
                },
                {
                    value: "dotted",
                    label: "dotted",
                },
                {
                    value: "dashed",
                    label: "dashed",
                },
                {
                    value: "double",
                    label: "double",
                },
                {
                    value: "groove",
                    label: "groove",
                },
                {
                    value: "ridge",
                    label: "ridge",
                },
                {
                    value: "inset",
                    label: "inset",
                },
                {
                    value: "outset",
                    label: "outset",
                },
                {
                    value: "none",
                    label: "none",
                },
            ],
        };
    },
    computed: {
        controls: {
            get() {
                return this.$store.state.controls;
            },
            set(value) {
                this.$store.commit("Hope/UpdateControls", value);
            },
        },
        selectedControl() {
            return this.$store.state.selected;
        },
        ...button,
    },
    methods: {
        choose(e) {
            this.$store.commit("Hope/ChooseControl", e.id);
        },
        change(e) {
            this.$store.commit("Hope/ChooseControl", e.added.element.id);
        },
    },
};
</script>
