/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 13:20:57
 * @Description  :
 */
import styleSheet from "../../stylesheet/button.json";
import { methods, computed } from "../public.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_button",
    label: "按钮",
    icon: "icon-biaodanzujian-anniu",
    isSelected: false,
    unitSwitch: { width: "px" },
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-btn"].width),
        height: parseFloat(styleSheet[".hopeui-btn"].height),
        x: 0,
        y: 0,
        resizable: true,
        draggable: true,
        lockAspectRatio: false
    },
    includes: { base: true, effect: true },
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele) {
        return ``;
    },
    render() {
        return (
            <div>
                <button type="button" class="hopeui-btn">
                    普通按钮
                </button>
            </div>
        );
    },
    props: {
        ele: [Object, Array],
    },
    computed: {
        ...computed,
    },
    contextMenuData: rightMenu,
    methods: {
        ...methods,
    },
};
