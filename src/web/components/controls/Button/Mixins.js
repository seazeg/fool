/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-18 15:24:23
 * @Description  :
 */
import styleSheet from "../../stylesheet/button.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_button",
    label: "按钮",
    icon: "icon-biaodanzujian-anniu",
    isSelected: false,
    unitSwitch: { width: "px" },
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-btn"].width),
        height: parseFloat(styleSheet[".hopeui-btn"].height),
        x: 10,
        y: 10,
        resizable: true,
        draggable: true,
        lockAspectRatio: false,
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
                <button
                    type="button"
                    class="hopeui-btn"
                    contenteditable="true"
                    onInput={this.input}
                >
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
        input(e) {
            let _this = this;
            _this.thishtml = _this.ele.html = $(
                `#${_this.ele.id}_container`
            ).html();
        },
    },
};
