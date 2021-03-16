/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-15 14:17:22
 * @Description  :
 */
import styleSheet from "../../stylesheet/datepicker.json";
import { methods, computed } from "../public.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

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
