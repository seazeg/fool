/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-22 09:20:16
 * @Description  :
 */
import styleSheet from "../../stylesheet/selector.json";

export default {
    name: "hope_selector",
    label: "下拉框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
    script: `
    let select = hope.selector({
        ele: "#" + _this.ele.id,
        on: {
            change: function (e) {
                console.log(e);
            },
            toggle: function (e) {
                console.log(e);
            },
        },
    });
    `,
    props: {
        ele: [Object, Array],
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
