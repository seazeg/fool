/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-08-02 11:52:42
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
        width: "auto",
        height: "auto",
        x: 10,
        y: 10,
        resizable: false,
        draggable: true,
        lockAspectRatio: false
    },
    includes: { base: true, effect:true},
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
            ele: ".all_group .${ele.id}",
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
            <div class="all_group">
                <input
                    type="radio"
                    name="radio"
                    value="选项一"
                    title="选项一"
                    class={this.ele.id}
                    checked
                    hope-verify="required"
                />
                <input
                    type="radio"
                    name="radio"
                    value="选项二"
                    title="选项二"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="radio"
                    name="radio"
                    value="选项三"
                    title="选项三"
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
