<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-17 16:29:25
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'loadmore'">
        <template v-slot:options>
            <el-collapse v-model="options">
                <el-collapse-item title="基础配置" name="1">
                    <div class="box">
                        <span class="field layout-lineBlock">加载按钮描述</span>
                        <el-input
                            v-model="loadBtnName"
                            placeholder="默认:加载更多"
                        ></el-input>
                    </div>
                    <div class="box">
                        <span class="field layout-lineBlock">是否自动加载</span>
                        <el-switch v-model="autoLoad"></el-switch>
                    </div>
                    <div class="box">
                        <span class="field">距离底部多少距离加载</span>
                        <p>
                            <el-slider
                                v-model="offset"
                                :min="1"
                                :max="100"
                                show-input
                                :step="1"
                            ></el-slider>
                        </p>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </template>
    </layout-editor>
</template>

<script>
import { fields } from "./fields.js";

export default {
    name: "LoadmoreEditor",
    data() {
        return {
            base: ["1", "2", "3"],
            effect: ["1", "2", "3"],
            options: ["1", "2", "3"],
        };
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
