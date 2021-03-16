<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 10:32:00
 * @Description  : 
-->
<template>
    <vdr
        class-name-handle="drag-handle-class"
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
        :snapTolerance="0"
        :grid="[10, 10]"
        :active.sync="ele.isSelected"
        :x="ele.zoomParams.x || 0"
        :y="ele.zoomParams.y || 0"
        :disable-user-select="true"
        :prevent-deactivation="true"
        :resizable="ele.zoomParams.resizable"
        :draggable="ele.zoomParams.draggable"
        :lock-aspect-ratio="ele.zoomParams.lockAspectRatio"
        @refLineParams="getRefLineParams"
        @resizing="onResizing"
        @resizestop="onResizstop"
        @activated="onActivated"
        @dragging="onDragging"
        @dragstop="onDragstop"
        @contextmenu="showMenu(ele.id, $event)"
        :class="{ locking: !ele.zoomParams.draggable && ele.isSelected }"
    >
        <pre v-html="style"></pre>
        <pre class="htmlCache">{{ thishtml }}</pre>

        <Mixins
            :id="ele.id + '_container'"
            :class="{ noevent: isDraging, noanimate: isStopAnimate }"
            :ele="ele"
        ></Mixins>
        <vue-context-menu
            :contextMenuData="contextMenuData"
            @selectThis="selectThis"
            @delThis="delThis"
            @copyThis="copyThis"
            @lockThis="lockThis"
            @lockRatioThis="lockRatioThis"
            :ele="ele"
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
            isStopAnimate: false,
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
    },
    methods: {
        ...Mixins.methods,
        onResizing(x, y, w, h) {
            if (this.ele.unitSwitch.width == "px") {
                this.width_px = w;
            } else {
                this.width = w;
            }
            this.height = h;
            this.isStopAnimate = true;
        },
        onActivated() {
            this.selectThis();
        },
        onResizstop() {
            this.isStopAnimate = false;
        },
        onDragging(x, y) {
            this.isDraging = true;
            this.$store.state.selected.zoomParams.x = x;
            this.$store.state.selected.zoomParams.y = y;
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
        _this.$nextTick(function() {
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
