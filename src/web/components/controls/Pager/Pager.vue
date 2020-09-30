<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 11:49:06
 * @LastEditTime : 2020-09-30 14:04:51
 * @Description  : 
-->
<template>
    <div class="controls_block">
        <div class="controls_inner">
            <div @click.stop="choose" class="controls_change hopeui-icon hopeui-icon-edit"></div>
            <div v-html="style"></div>
            <div class="code">
                <div :id="ele.id + '_list'"></div>
                <div :id="ele.id"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        utils
    } from "../../../utils/utils.js";
    export default {
        name: "hope_pager",
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
                Object.keys(styleSheet).forEach(function (line) {
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
            _this.$nextTick(function () {
                let pager = hope.pager({
                    ele: "#" + _this.ele.id,
                    options: {
                        omit: 5, //最多保留多少按钮,必须奇数
                        prevName: "prev",
                        nextName: "next",
                        hideNum: true,
                        pageMapping: "pageNo", //当前页码字段的映射，默认pageNo
                        extend: true,
                    },
                    params: {
                        url: "/assets/page/list1.json",
                        dataType: "json",
                        type: "get",
                        data: {
                            pageNo: 1,
                            pageSize: 20,
                        },
                    },
                    reader: function (res) {
                        var data = res.data;
                        var template = "";
                        for (var i = 0; i < data.length; i++) {
                            template +=
                                "<p>" +
                                data[i].goodsName +
                                "|" +
                                data[i].goodsStar +
                                "</p>";
                        }
                        $(`#${_this.ele.id}_list`).html(template);
                        return {
                            pageNo: res.pageNo,
                            pageSize: res.pageSize,
                            totalNumber: res.totalNumber,
                        };
                    },
                    on: {
                        jumpOver: function (e) {
                            console.log(e);
                        },
                    },
                });
            });
        },
    };
</script>