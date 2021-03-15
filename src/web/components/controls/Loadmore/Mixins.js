/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-15 14:16:13
 * @Description  :
 */
import styleSheet from "../../stylesheet/loadmore.json";
import { methods, computed } from "../public.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

export default {
    name: "hope_loadmore",
    label: "流加载",
    icon: "icon-jiazai",
    isSelected: false,
    zoomParams: {
        width: "auto",
        height: "auto",
        x: 0,
        y: 0,
        resizable: false
    },
    includes: { options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        loadBtnName: "加载更多",
        autoLoad: true,
        offset: 30,
    },
    script(ele) {
        return `
        var loadmore = hope.loadmore({
            ele: '#${ele.id}',
            options: ${JSON.stringify(ele.scriptParams)},
            params: {
                url: "/assets/page/list1.json",
                dataType: "json",
                type: 'get',
                data: {
                    pageNo: 1,
                    pageSize: 20
                }
            },
            reader: function (res) {
                var data = res.data;
                var template = '';
                for (var i = 0; i < data.length; i++) {
                    template += "<p>" + data[i].goodsName + "|" + data[i].goodsStar + "</p>"
                }
                $('#${ele.id}_list').append(template);
                return {
                    pageNo: res.pageNo,
                    pageSize: res.pageSize,
                    totalNumber: res.totalNumber
                }
            },
            on: {
                loaded: function (e) {
                    console.log(e);
                }
            }
        })
        return loadmore;     
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
            <div>
                <div id={this.ele.id}>
                    <div id={this.ele.id + "_list"} style="font-size:14px;color:#333;"></div>
                </div>
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
