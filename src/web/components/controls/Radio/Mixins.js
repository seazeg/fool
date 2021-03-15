/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-15 15:25:49
 * @Description  :
 */
import styleSheet from "../../stylesheet/radio.json";
import { methods, computed } from "../public.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

export default {
    name: "hope_radio",
    label: "单选框",
    icon: "icon-danxuankuangzu",
    isSelected: false,
    zoomParams: {
        width: 250,
        height: 50,
        x: 0,
        y: 0,
        resizable:true
    },
    includes: { base: true},
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele) {
        return `
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
