<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-11 16:35:16
 * @Description  : 
-->
<template>
    <vdr
        class-name-handle="my-handle-class"
        :w="ele.zoomParams.width || 200"
        :h="ele.zoomParams.height || 200"
        :max-width="maxWidth"
        :max-height="maxHeight"
        :min-width="minWidth"
        :min-height="minHeight"
        :parent="true"
        :debug="false"
        :isConflictCheck="false"
        :snap="true"
        :snapTolerance="20"
        :grid="[10, 10]"
        :active.sync="ele.isSelected"
        :x="ele.zoomParams.x || 0"
        :y="ele.zoomParams.y || 0"
        :disable-user-select="true"
        @refLineParams="getRefLineParams"
        @resizing="onResizing"
        @activated="onActivated"
        @deactivated="onDeactivated"
        @dragging="onDragging"
        @dragstop="onDragstop"
        @contextmenu="showMenu(ele.id, $event)"
    >
        <pre v-html="style"></pre>
        <pre class="htmlCache">{{ thishtml }}</pre>

        <Mixins
            :id="ele.id + '_container'"
            :class="{ noevent: isDraging }"
            :ele="ele"
        ></Mixins>
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
            isDraging: false,
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
        ...Mixins.computed
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
        onDeactivated() {
        },
        onDragging(x, y) {
            this.isDraging = true;
        },
        onDragstop(x, y) {
            this.isDraging = false;
        },
        getRefLineParams(params) {
            this.$emit("refLineParams", params);
        },
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function () {
            try {
                _this.thishtml = _this.ele.html = $(
                    `#${_this.ele.id}_container`
                ).html();
                _this.ele.controlObject = Function(
                    "_this",
                    Mixins.script(_this.ele)
                )(_this);
            } catch (error) {}
        });
    },
};
</script>
