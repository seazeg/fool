/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 17:05:41
 * @Description  :
 */
import styleSheet from "../../stylesheet/suggest.json";
import styleSheet_ext from "../../stylesheet/input.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_suggest",
    label: "联想提示框",
    icon: "icon-wenbenkuang",
    isSelected: false,
    unitSwitch: { width: "%" },
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-suggest"].width),
        height: parseFloat(styleSheet_ext[".hopeui-input"].height),
        x: 10,
        y: 10,
        resizable: true,
        draggable: true,
        lockAspectRatio: false,
    },
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet, ...styleSheet_ext },
    scriptParams: { noMatchName: "-- 没有匹配的内容 --" },
    script(ele) {
        return `
        /*
        * @Author       : Evan.G
        * @Description  : hopeUI联想文本框组件
        * @API          : http://seazeg.gitee.io/hopeui/
        * ***********************************************
        * ele: 元素 dom 节点
        * options: {
        *      noMatchName: 无匹配时描述 | String
        *      searchField: 搜索字段映射 | String
        *      isFirstData: 是否初始化数据 | Boolean
        * }
        * params: {
        *      [jQuery.ajax字段]: 参数值
        * }
        * reader: 自定义内容方法 | Function
        * on: {
        *      input: 输入后回调
        *      change: 选择后回调
        *      blur: 失去焦点回调
        *      focus: 获得焦点回调
        *      init: 初始化回调
        * }
        */
        var suggest = hope.suggest({
            ele: "#${ele.id}",
            options: ${JSON.stringify(ele.scriptParams)},
            params: {
                url: '/assets/page/list111.json',
                dataType: "json",
                type: 'get',
                searchField: 'searchword'
            },
            reader: function (res) {
                var list = res.data;
                var tmp = [];
                for (var i = 0; i < list.length; i++) {
                    tmp.push(list[i].goodsName)
                }
                return tmp
            },
            on: {
                input: function (e) {
                    console.log(e);
                }
            }
        })
        return suggest
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
                <input
                    name="text"
                    type="text"
                    value=""
                    class="hopeui-input"
                    id={this.ele.id}
                    placeholder="请输入"
                    autoprompt
                />
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
