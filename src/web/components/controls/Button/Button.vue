<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-11 10:52:50
 * @Description  : 
-->
<template>
    <vdr
        :w="ele.zoomParams.width"
        :h="ele.zoomParams.height"
        :max-width="maxWidth"
        :max-height="maxHeight"
        :parent="true"
        :debug="false"
        :isConflictCheck="false"
        :snap="true"
        :snapTolerance="20"
        :grid="[10, 10]"
        :x="ele.zoomParams.x"
        :y="ele.zoomParams.y"
        @refLineParams="getRefLineParams"
        @resizing="onResizing"
        @activated="onActivated"
        @contextmenu="showMenu(ele.id, $event)"
    >
        <pre v-html="style"></pre>
        <pre class="htmlCache">{{ thishtml }}</pre>

        <Mixins :id="ele.id" :ele="ele"></Mixins>
        <vue-context-menu
            :contextMenuData="contextMenuData"
            @selectThis="selectThis"
            @delThis="delThis"
            :id="ele.id"
        ></vue-context-menu>
    </vdr>
</template>

<script>
import Mixins from "./Mixins.js";
import { fields } from "./fields.js";

export default {
    name: Mixins.name,
    data() {
        return {
            isHover: false,
            thishtml: "",
            contextMenuData: Mixins.contextMenuData,
        };
    },
    components: {
        Mixins,
    },
    props: {
        ele: [Array, Object],
    },
    computed: {
        ...fields,
        ...Mixins.computed,
        js() {
            return Mixins.script;
        },
    },
    methods: {
        ...Mixins.methods,
        onResizing(x, y, w, h) {
            this.width = w;
            this.height = h;
        },
        onActivated() {
            this.selectThis();
        },
        getRefLineParams(params) {
            this.$emit("refLineParams", params);
        },
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function () {
            try {
                _this.thishtml = _this.ele.html = $(`#${_this.ele.id}`).html();
                _this.ele.controlObject = Function(
                    "_this",
                    Mixins.script(_this.ele)
                )(_this);
            } catch (error) {}
        });
    },
};
</script>
