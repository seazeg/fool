<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 11:49:06
 * @LastEditTime : 2020-09-15 15:36:15
 * @Description  : 
-->
<template>
    <div>
        <div @click.stop="choose" style="color:#fff">选中我</div>
        <div v-html="style"></div>
        <select
            name="city"
            hope-verify="required"
            class="hopeui-hide"
            :id="ele.id"
        >
            <option value="">请选择一个选项</option>
            <option value="青岛">青岛</option>
            <option value="武汉">武汉</option>
            <option value="乌鲁木齐">乌鲁木齐</option>
            <option value="南京">南京</option>
            <option value="天津">天津</option>
            <option value="郑州">郑州</option>
            <option value="重庆">重庆</option>
            <option value="成都">成都</option>
            <option value="云南">云南</option>
        </select>
    </div>
</template>

<script>
import { utils } from "../../../utils/utils.js";
export default {
    name: "hope_selector",
    data() {
        return {
            isHover: false,
        };
    },
    props: {
        ele: [Array, Object],
    },
    computed: {
        style() {
            let styleSheet = this.ele.styleSheet;
            let root = this.ele.id;
            let res = {};
            Object.keys(styleSheet).forEach(function(line) {
                res[`.${root} ${line}`] = styleSheet[line];
            });
            return `<style>${utils.json2css(res)}</style>`;
        },
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
        enter() {
            this.isHover = true;
        },
        leave() {
            this.isHover = false;
        },
    },
    mounted() {
        let _this = this;

        _this.$nextTick(function() {
            let select_normal = hope.selector({
                ele: "#" + _this.ele.id,
                on: {
                    change: function(e) {
                        console.log(e);
                    },
                    toggle: function(e) {
                        console.log(e);
                    },
                },
            });
        });
    },
};
</script>
