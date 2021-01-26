<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-26 15:36:17
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'carousel'">
        <template v-slot:options> 
               <div class="control_group">
                <div class="box">
                    <span class="field">数量</span>
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
                    <span class="field">滑动方向</span>
                    <div>
                        <el-radio v-model="mode" label="horizontal"
                            >横向</el-radio
                        >
                        <el-radio v-model="mode" label="vertical"
                            >纵向</el-radio
                        >
                    </div>
                </div>
                <div class="box">
                    <span class="field">循环滚动</span>
                    <div>
                        <el-radio v-model="loop" :label=true
                            >开启</el-radio
                        >
                        <el-radio v-model="loop" :label=false
                            >关闭</el-radio
                        >
                    </div>
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
