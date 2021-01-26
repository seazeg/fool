<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-25 16:16:20
 * @Description  : 
-->
<template>
    <layout-editor :controlsName="'carousel'">
        <template v-slot:effect> 
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
