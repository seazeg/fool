/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-11 11:50:25
 * @Description  :
 */
import styleSheet from "../../stylesheet/selector.json";
import { methods, computed } from "../public.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_selector",
    label: "下拉框",
    icon: "icon-biaodanzujian-xialakuang",
    isSelected: false,
    unitSwitch: { width: "%" },
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-form-select"].width),
        height: parseFloat(
            styleSheet[".hopeui-form-select .hopeui-input"].height
        ),
        x: 10,
        y: 10,
    },
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: { autoHideBar: false, switchIcon: "", searchMode: false },
    script(ele) {
        return ` 
        var select = hope.selector({
            ele: "#${ele.id}",
            options: ${JSON.stringify(ele.scriptParams)},
            on: {
                change: function (e) {
                    console.log(e);
                },
                toggle: function (e) {
                    console.log(e);
                },
            },
        });
        return select
        `;
    },
    render() {
        return (
            <div>
                <select name="city" id={this.ele.id} hope-verify="required">
                    <option value="">请选择一个选项</option>
                    <option value="青岛">青岛</option>
                    <option value="武汉">武汉</option>
                    <option value="乌鲁木齐">乌鲁木齐</option>
                    <option value="南京">南京</option>
                    <option value="天津">天津</option>
                    <option value="郑州">郑州</option>
                    <option value="重庆">重庆</option>
                    <option value="成都">成都</option>
                    <option value="云南">云南</option>
                </select>
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
