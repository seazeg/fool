/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 17:04:42
 * @Description  :
 */
import styleSheet from "../../stylesheet/input.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_input",
    label: "文本框",
    icon: "icon-biaodanzujian-shurukuang",
    isSelected: false,
    unitSwitch: { width: "%" },
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-input"].width),
        height: parseFloat(styleSheet[".hopeui-input"].height),
        x: 10,
        y: 10,
        resizable: true,
        draggable: true,
        lockAspectRatio: false
    },
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        extendContent: ``,
        extendContentLocation: "right",
    },
    script(ele) {
        return `
        /*
        * @Author       : Evan.G
        * @Description  : hopeUI文本框组件
        * @API          : http://seazeg.gitee.io/hopeui/
        * ***********************************************
        * ele: 元素 dom 节点
        * options: {
        *      extendContent: 扩展内容 | Html
        *      extendContentLocation: 扩展内容位置 | Boolean
        * }
        * on: {
        *      blur: 失去焦点回调
        *      focus: 获得焦点回调
        *      input: 输入后回调
        *      init: 初始化回调
        * }
        */
        var input = hope.input({
            ele: "#${ele.id}",
            options: ${JSON.stringify(ele.scriptParams)},
            on: {
                blur: function (e) {
                    console.log(e);
                },
                focus: function (e) {
                    console.log(e);
                },
                input: function (e) {
                    console.log(e);
                },
            },
        });
        return input
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
                    placeholder="请输入文本"
                    class="hopeui-input"
                    id={this.ele.id}
                    hope-verify="required"
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
