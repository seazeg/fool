/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 17:05:08
 * @Description  :
 */
import styleSheet from "../../stylesheet/pager.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_pager",
    label: "分页器",
    icon: "icon-fenyeqi",
    isSelected: false,
    zoomParams: {
        width: "auto",
        height: "auto",
        x: 10,
        y: 10,
        resizable: false,
        draggable: true,
    },
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        omit: 5,
        prevName: "prev",
        nextName: "next",
        extend: true,
        lockAspectRatio: false
    },
    script(ele) {
        return `
        /*
        * @Author       : Evan.G
        * @Description  : hopeUI分页器组件
        * @API          : http://seazeg.gitee.io/hopeui/
        * ***********************************************
        * ele: 元素 dom 节点
        * options: {
        *      omit: 省略时按钮数,必须奇数 | Number
        *      prevName: 上翻页命名定义 | String
        *      nextName: 下翻页命名定义 | String
        *      pageMapping: 当前页字段映射 | String
        *      extend: 是否完整扩展 | Boolean
        * }
        * params: {
        *      [jQuery.ajax字段]: 参数值
        * }
        * reader: 自定义内容方法 | Function
        * on: {
        *      jumpOver: 跳转后回调
        *      init: 初始化完成后回调
        *      complete: 请求完成后回调
        * }
        */
        var pager = hope.pager({
            ele: "#${ele.id}",
            options: ${JSON.stringify(ele.scriptParams)},
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
    
                $("#${ele.id}_list").html(template);
              
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
        return pager
        `;
    },
    props: {
        ele: [Object, Array],
        htmlVisible: Boolean,
        cssVisible: Boolean,
        jsVisible: Boolean,
    },
    render() {
        return (
            <div class="page_list">
                <div id={this.ele.id + "_list"} />
                <div id={this.ele.id} />
            </div>
        );
    },
    computed: {
        ...computed,
    },
    contextMenuData: rightMenu,
    methods: {
        ...methods,
    },
};
