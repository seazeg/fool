/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-15 14:17:34
 * @Description  :
 */
import styleSheet from "../../stylesheet/pager.json";
import { methods, computed } from "../public.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

export default {
    name: "hope_pager",
    label: "分页器",
    icon: "icon-fenyeqi",
    isSelected: false,
    zoomParams: {
        width: "auto",
        height: "auto",
        x: 0,
        y: 0,
        resizable:false,
    },
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        omit: 5,
        prevName: "prev",
        nextName: "next",
        extend: true,
    },
    script(ele) {
        return `
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
        `
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
