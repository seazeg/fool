/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-08 11:49:52
 * @Description  :
 */
import styleSheet from "../../stylesheet/button.json";
export default {
    name: "hope_button",
    label: "按钮",
    icon: "icon-anniu",
    isSelected: false,
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {},
    script(ele) {
        return ``;
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
                <button type="button" class="hopeui-btn">
                    普通按钮
                </button>
            </div>
        );
    },
    contextMenuData: {
        axis: {
            x: null,
            y: null,
        },
        // Menu options (菜单选项)
        menulists: [
            {
                fnHandler: "selectThis",
                icoName: "el-icon-tickets",
                btnName: "选中组件",
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
            this.selectThis()
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
    },
};
