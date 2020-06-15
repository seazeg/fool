<template>
    <div class="layout-controls">
        <span class="operate iconfont icon-youshuangjiantou"></span>
        <draggable
            class="group"
            :list="controls"
            :group="{ name: 'controls', pull: 'clone', put: false }"
            :clone="clone"
            :sort="false"
            @start="dragStart"
            @end="dragEnd"
        >
            <div class="box" v-for="(ele, i) in controls" :key="i">
                <i class="iconfont" :class="ele.icon"> </i>
                <span> {{ ele.name }}</span>
            </div>
        </draggable>
    </div>
</template>
<script>
import _ from "lodash";
import { ButtonParams } from "../controls/Button/ButtonParams";
import { GridParams } from "../controls/Grid/GridParams";
import { SelectorParams } from "../controls/Selector/SelectorParams";
import { PagerParams } from "../controls/Pager/PagerParams";
import { InputParams } from "../controls/Input/InputParams";

export default {
    name: "layout-controls",
    computed: {
        controls: function() {
            return [ButtonParams, GridParams, SelectorParams, PagerParams,InputParams];
        },
    },
    methods: {
        clone(o) {
            let _this = this;
            (function func(cls) {
                for (let ele of cls) {
                    _this.$set(ele, "id", $egu.guid());
                    if ($egu.isArray(ele.children) && ele.children.length > 0) {
                        func(ele.children);
                    }
                }
            })([o]);
            return {
                ..._.cloneDeep(o),
            };
        },
        dragStart(e) {
            $(e.item).addClass("draggingNarrow");
        },
        dragEnd(e) {
            $(e.item).removeClass("draggingNarrow");
        },
    },
};
</script>
