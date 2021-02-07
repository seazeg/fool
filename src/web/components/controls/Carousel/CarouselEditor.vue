<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-07 17:27:12
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'carousel'">
        <template v-slot:base>
            <div class="control_group">
                <div class="box">
                    <span class="field">滑动块显示数量</span>
                    <p>
                        <el-slider
                            v-model="slidesPerView"
                            :min="1"
                            :max="12"
                            show-input
                            :step="1"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">滑动块分组</span>
                    <p>
                        <el-slider
                            v-model="slidesPerGroup"
                            :min="1"
                            :max="12"
                            show-input
                            :step="1"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">设置初始索引</span>
                    <p>
                        <el-slider
                            v-model="initialSlide"
                            :min="0"
                            :max="12"
                            show-input
                            :step="1"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">滑动方向</span>
                    <div class="radio_box">
                        <el-radio v-model="mode" label="horizontal"
                            >横向</el-radio
                        >
                        <el-radio v-model="mode" label="vertical"
                            >纵向</el-radio
                        >
                    </div>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">自由模式</span>
                    <el-switch v-model="freeMode"> </el-switch>
                </div>
                <div class="box" v-if="mode == 'horizontal' && !loop">
                    <span class="field layout-lineBlock">滑块居中</span>
                    <el-switch v-model="centeredSlides"> </el-switch>
                </div>

                <div class="box">
                    <span class="field layout-lineBlock"
                        >是否根据内容计算高度</span
                    >
                    <el-switch v-model="calculateHeight"> </el-switch>
                </div>

                <div class="box">
                    <span class="field layout-lineBlock"
                        >是否四舍五入高度值</span
                    >
                    <el-switch v-model="roundLengths"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">是否显示分页</span>
                    <el-switch v-model="pagination"> </el-switch>
                </div>
                <div class="box" v-if="pagination">
                    <span class="field layout-lineBlock">是否分页可以点击</span>
                    <el-switch v-model="paginationClickable"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">是否自动播放</span>
                    <el-switch v-model="isAutoplay"> </el-switch>
                    <el-input
                        v-model="autoplay"
                        placeholder="请输入自动滚动延时时间"
                        v-if="autoplay > 0"
                    ></el-input>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">是否循环</span>
                    <el-switch v-model="loop"> </el-switch>
                </div>

                <div class="box">
                    <span class="field layout-lineBlock">是否响应式模式</span>
                    <el-switch v-model="autoResize"> </el-switch>
                </div>

                <div class="box">
                    <span class="field layout-lineBlock"
                        >是否窗口变化后重新初始化</span
                    >
                    <el-switch v-model="resizeReInit"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock"
                        >是否拖拽时阻止点击链接</span
                    >
                    <el-switch v-model="preventLinks"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">是否键盘控制</span>
                    <el-switch v-model="keyboardControl"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock">是否鼠标滑轮控制</span>
                    <el-switch v-model="mousewheelControl"> </el-switch>
                </div>
            </div>
        </template>
        <template v-slot:effect>
            <div class="control_group">
                <div class="box">
                    <span class="field">滑动速度</span>
                    <p>
                        <el-slider
                            v-model="speed"
                            :min="100"
                            :max="2000"
                            show-input
                            :step="100"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">触摸距离与滑块滑动距离的比率</span>
                    <p>
                        <el-slider
                            v-model="touchRatio"
                            :min="0.5"
                            :max="5"
                            show-input
                            :step="0.5"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field">拖动的临界值</span>
                    <p>
                        <el-slider
                            v-model="moveStartThreshold"
                            :min="1"
                            :max="100"
                            show-input
                            :step="1"
                        ></el-slider>
                    </p>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock"
                        >禁止左滑动或上滑动</span
                    >
                    <el-switch v-model="hopeToPrev"> </el-switch>
                </div>
                <div class="box">
                    <span class="field layout-lineBlock"
                        >禁止右滑动或下滑动</span
                    >
                    <el-switch v-model="hopeToNext"> </el-switch>
                </div>
            </div>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "CarouselEditor",
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
    },
};
</script>
