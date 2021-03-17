/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 17:04:32
 * @Description  :
 */
import styleSheet from "../../stylesheet/datepicker.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_datepicker",
    label: "日期时间选择",
    icon: "icon-date",
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
    includes: { base: true, effect: false, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        format: "yyyy-MM-dd HH:mm:ss",
        type: "datetime", //date：日期，datetime:日期+时间
    },
    script(ele) {
        return `
        /*
        * @Author       : Evan.G
        * @Description  : hopeUI日期时间选择器组件
        * @API          : http://seazeg.gitee.io/hopeui/
        * ***********************************************
        * ele: 元素 dom 节点
        * options: {
        *      format: 日期格式 | String
        *      type: 日期模式/日期时间模式 | String
        * }
        * on: {
        *      change: 状态改变后回调
        *      clear: 清空后回调
        *      open: 选择框打开后回调
        *      close: 选择框关闭后回调
        *      init: 初始化回调
        * }
        */
        var datepicker = hope.datepicker({
            ele: '#${ele.id}',
            options: ${JSON.stringify(ele.scriptParams)},
            on:{
                init: function (e){
                    console.log('初始化',e);
                },
                change: function (e){
                    console.log(e);
                },
                clear: function (e){
                    console.log(e);
                }
            }
        })
        return datepicker
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
                    name="date"
                    type="text"
                    value=""
                    id={this.ele.id}
                    class="hopeui-input"
                    placeholder="请选择日期"
                    readonly
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
