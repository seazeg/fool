/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-26 16:01:02
 * @Description  :
 */
import styleSheet from "../../stylesheet/suggest.json";
import styleSheet_ext from "../../stylesheet/input.json";
export default {
    name: "hope_suggest",
    label: "联想提示框",
    icon: "icon-anniu",
    isSelected: false,
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet, ...styleSheet_ext },
    scriptParams: {},
    script(ele) {
        return `
        var suggest = hope.suggest({
            ele: "#${ele.id}",
            options: {
                noMatchName: '-- 没有匹配的内容 --'
            },
            params: {
                url: '/assets/page/list1.json',
                dataType: "json",
                type: 'get',
                searchField: 'searchword'
            },
            reader: function (res) {
                var list = res.data;
                var tmp = [];
                for (var i = 0; i < list.length; i++) {
                    tmp.push(list[i].goodsName)
                }
                return tmp
            },
            on: {
                input: function (e) {
                    console.log(e);
                }
            }
        })
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
                    name="text"
                    type="text"
                    value=""
                    class="hopeui-input"
                    id={this.ele.id}
                    placeholder="请输入"
                    autoprompt
                />
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
    }
};
