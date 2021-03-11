/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-11 09:45:08
 * @Description  :
 */
import styleSheet from "../../stylesheet/selector.json";
import { utils } from "../../../utils/utils.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_selector",
    label: "下拉框",
    icon: "icon-biaodanzujian-xialakuang",
    isSelected: false,
    unitSwitch: { width: "%" },
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-form-select"].width),
        height: parseFloat(styleSheet[".hopeui-form-select"].height),
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
    props: {
        ele: [Object, Array],
        htmlVisible: Boolean,
        cssVisible: Boolean,
        jsVisible: Boolean,
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
    computed: {
        style() {
            let styleSheet = this.ele.styleSheet;
            let root = this.ele.id;
            let res = {};
            Object.keys(styleSheet).forEach(function(line) {
                res[`.${root} ${line}`] = styleSheet[line];
            });
            return `<style>${utils.json2css(res)}</style>`;
        },
    },
    contextMenuData: rightMenu,
    methods: {
        showMenu(id, event) {
            event.preventDefault();
            let x = event.clientX;
            let y = event.clientY;
            // Get the current location
            this.contextMenuData.axis = {
                x,
                y,
                id,
            };
        },
        selectThis() {
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ChooseControl", {
                id: this.ele.id,
                type: true,
            });
            this.$store.commit("Hope/ControlsSelected", this.ele);
        },
        delThis() {
            this.$confirm("确定移除当前组件？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info",
            })
                .then(() => {
                    this.$store.commit("Hope/RemoveControl", this.ele.id);
                    this.$store.state.selected = {};
                })
                .catch(() => {});
        },
        jsView() {
            this.selectThis();
            this.jsVisible = !this.jsVisible;
        },
        cssView() {
            this.selectThis();
            this.cssVisible = !this.cssVisible;
        },
        htmlView() {
            this.selectThis();
            this.htmlVisible = !this.htmlVisible;
        },
    },
};
