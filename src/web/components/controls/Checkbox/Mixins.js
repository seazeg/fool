/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 13:56:51
 * @Description  :
 */
import styleSheet from "../../stylesheet/checkbox.json";
import { methods, computed } from "../public.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_checkbox",
    label: "复选框",
    icon: "icon-kongjianyixuan",
    isSelected: false,
    zoomParams: {
        width: 250,
        height: 50,
        x: 0,
        y: 0,
        resizable: true,
        draggable: true,
        lockAspectRatio: false
    },
    includes: { base: true },
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele) {
        return `
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
                    value="音乐"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="checkbox"
                    name="subject"
                    value="历史"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="checkbox"
                    name="subject"
                    value="生物"
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
