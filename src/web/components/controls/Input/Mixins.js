/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-18 17:21:50
 * @Description  :
 */
import styleSheet from "../../stylesheet/input.json";
import { utils } from "../../../utils/utils.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

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
