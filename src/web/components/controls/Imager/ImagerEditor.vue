<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.label.includes('imager')
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
                ></el-button
            >
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
                        v-model="selectedControl.customClass"
                        placeholder="请输入类名"
                    ></el-input>
                </p>
            </div>
            <div class="box">
                <span class="field">图片上传（imgUpload）</span>
                <p>
                    <el-upload
                        ref="imgUpload"
                        action="http://localhost:2599/upload"
                        list-type="picture-card"
                        :on-success="uploadSuccess"
                        :on-remove="uploadRemove"
                        :on-change="uploadChange"
                        :limit="1"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
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
        <div class="control_group"></div>
        <!-- 布局 -->
        <div class="control_group_title">布局属性：</div>
        <div class="control_group">
            <div class="box">
                <div class="left">
                    <span class="field">内间距-左（paddingLeft）</span>
                    <p>
                        <el-slider
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
                            v-model="marginLeft"
                            :min="-100"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="right">
                    <span class="field">外间距-右（marginRight）</span>
                    <p>
                        <el-slider
                            v-model="marginRight"
                            :min="-100"
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
                            v-model="marginTop"
                            :min="-100"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
                </div>
                <div class="right">
                    <span class="field">外间距-下（marginBottom）</span>
                    <p>
                        <el-slider
                            v-model="marginBottom"
                            :min="-100"
                            :max="100"
                            show-input
                        ></el-slider>
                    </p>
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
import { fields } from "../../controls/fields.js";
import GradientPicker from "../../plugins/gradientColorPicker.vue";
export default {
    name: "ImagerEditor",
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
    methods: {
        uploadSuccess(response, file, fileList) {
            this.imgSrc = fileList;
        },
        uploadRemove() {
            this.imgSrc = { name: "", url: "" };
        },
        uploadChange(fileList) {
            if (fileList.length > 0) {
                this.$refs.imgUpload.$children[1].$el.style.display = "none";
            } else {
                this.$refs.imgUpload.$children[1].$el.style.display = "block";
            }
        },
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
