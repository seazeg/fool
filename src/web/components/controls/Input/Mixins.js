/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-18 15:03:28
 * @Description  :
 */
import styleSheet from "../../stylesheet/input.json";
import { utils } from "../../../utils/utils.js";

export default {
    name: "hope_input",
    label: "文本框",
    icon: "icon-biaodanzujian-shurukuang",
    isSelected: false,
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        extendContent: ``,
        extendContentLocation: "right",
    },
    script(ele) {
        return `
        var input = hope.input({
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
        return input
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
                    name="text"
                    type="text"
                    placeholder="请输入文本"
                    class="hopeui-input"
                    id={this.ele.id}
                    hope-verify="required"
                />
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
    contextMenuData: {
        axis: {
            x: null,
            y: null,
        },
        // Menu options (菜单选项)
        menulists: [
            {
                fnHandler: "selectThis", // Binding events(绑定事件)
                icoName: "el-icon-tickets", // icon (icon图标 )
                btnName: "选中组件", // The name of the menu option (菜单名称)
            },
            {
                fnHandler: "htmlView",
                icoName: "el-icon-tickets",
                btnName: "html代码",
            },
            {
                fnHandler: "cssView",
                icoName: "el-icon-tickets",
                btnName: "css代码",
            },
            {
                fnHandler: "jsView",
                icoName: "el-icon-tickets",
                btnName: "javascript代码",
            },
            {
                fnHandler: "delThis",
                icoName: "el-icon-tickets",
                btnName: "移除组件",
            },
        ],
    },
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
            this.$store.commit("Hope/ChooseControl", this.ele.id);
        },
        delThis() {
            this.$confirm("确定删除当前组件？", "提示", {
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
            this.jsVisible = !this.jsVisible;
        },
        cssView() {
            this.cssVisible = !this.cssVisible;
        },
        htmlView() {
            this.htmlVisible = !this.htmlVisible;
        },
    },
};
