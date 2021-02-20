/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-18 17:48:05
 * @Description  :
 */
import styleSheet from "../../stylesheet/checkbox.json";
import { utils } from "../../../utils/utils.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

export default {
    name: "hope_checkbox",
    label: "复选框",
    icon: "icon-kongjianyixuan",
    isSelected: false,
    includes: { base: true},
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele){
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
    `
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
            this.$store.commit("Hope/ControlsSelected", this.ele);
        },
        delThis() {
            this.selectThis()
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
            this.selectThis()
            this.jsVisible = !this.jsVisible;
        },
        cssView() {
            this.selectThis()
            this.cssVisible = !this.cssVisible;
        },
        htmlView() {
            this.selectThis()
            this.htmlVisible = !this.htmlVisible;
        },
    }
};
