/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-21 15:53:38
 * @Description  :
 */
import styleSheet from "../../stylesheet/button.json";
export default {
    name: "hope_button",
    label: "按钮",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
    script: "",
    props: {
        ele: [Object, Array],
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
        menuName: "rightMenu",
        // The coordinates of the display(菜单显示的位置)
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
        showMenu(event) {
            event.preventDefault();
            let x = event.clientX;
            let y = event.clientY;
            // Get the current location
            this.contextMenuData.axis = {
                x,
                y,
            };
        },
        selectThis() {
            this.$emit("choose", this.ele);
        },
        delThis() {
            // this.$emit("choose", this.ele);
        },
        jsView() {
            console.log("newdata!");
        },
        cssView() {
            console.log("newdata!");
        },
        htmlView() {
            console.log("newdata!");
        },
    },
};
