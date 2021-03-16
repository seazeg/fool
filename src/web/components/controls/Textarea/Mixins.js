/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 13:57:26
 * @Description  :
 */
import styleSheet from "../../stylesheet/textarea.json";
import { methods, computed } from "../public.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_textarea",
    label: "多行文本框",
    icon: "icon-textarea",
    isSelected: false,
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-textarea"].width),
        height: parseFloat(styleSheet[".hopeui-textarea"].height),
        x: 10,
        y: 10,
        resizable: true,
        draggable: true,
        lockAspectRatio: false,
    },
    unitSwitch: { width: "%" },
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: { remainingWords: false },
    script(ele) {
        return `
        var textarea = hope.textarea({
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
        return textarea;
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
                <textarea
                    name="textarea"
                    class="hopeui-textarea"
                    placeholder="请输入内容"
                    id={this.ele.id}
                    hope-verify="required"
                    maxlength="500"
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
