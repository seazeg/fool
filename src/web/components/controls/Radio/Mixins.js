/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-17 10:46:15
 * @Description  :
 */
import styleSheet from "../../stylesheet/radio.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_radio",
    label: "单选框",
    icon: "icon-danxuankuangzu",
    isSelected: false,
    zoomParams: {
        width: 250,
        height: 50,
        x: 10,
        y: 10,
        resizable:true,
        draggable: true,
        lockAspectRatio: false
    },
    includes: { base: true},
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele) {
        return `
        /*
        * @Author       : Evan.G
        * @Description  : hopeUI单选框组件
        * @API          : http://seazeg.gitee.io/hopeui/
        * ***********************************************
        * ele: 元素 dom 节点
        * on: {
        *      change: 选中后回调
        *      init: 初始化回调
        * }
        */
        var radio = hope.radio({
            ele: ".${ele.id}",
            on: {
                init:function(e){
                    console.log(e);
                },
                change: function (e) {
                    console.log(e);
                },
            },
        });
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
                    type="radio"
                    name="radio"
                    value="男"
                    title="男"
                    class={this.ele.id}
                    checked
                    hope-verify="required"
                />
                <input
                    type="radio"
                    name="radio"
                    value="女"
                    title="女"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="radio"
                    name="radio"
                    value="什么玩意"
                    title="什么玩意"
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
