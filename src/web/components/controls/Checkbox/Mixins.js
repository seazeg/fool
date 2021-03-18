/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-18 10:51:37
 * @Description  :
 */
import styleSheet from "../../stylesheet/checkbox.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_checkbox",
    label: "复选框",
    icon: "icon-kongjianyixuan",
    isSelected: false,
    zoomParams: {
        width: "auto",
        height: "auto",
        x: 10,
        y: 10,
        resizable: false,
        draggable: true,
        lockAspectRatio: false,
    },
    includes: { base: true, effect: true },
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele) {
        return `
        /*
        * @Author       : Evan.G
        * @Description  : hopeUI复选框组件
        * @API          : http://seazeg.gitee.io/hopeui/
        * ***********************************************
        * ele: 元素 dom 节点
        * on: {
        *      change: 选中后回调
        *      init: 初始化回调
        * }
        */
        var checkbox = hope.checkbox({
            ele: '.${ele.id}',
            on: {
                change: function (e) {
                    console.log(e);
                },
            },
        });
        return checkbox
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
                    type="checkbox"
                    name="subject"
                    value="选项一"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="checkbox"
                    name="subject"
                    value="选项二"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="checkbox"
                    name="subject"
                    value="选项三"
                    class={this.ele.id}
                    disabled
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
