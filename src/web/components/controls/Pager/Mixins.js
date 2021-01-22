/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-22 11:52:20
 * @Description  :
 */
import styleSheet from "../../stylesheet/pager.json";
export default {
    name: "hope_pager",
    label: "分页器",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
    script: `
    let pager = hope.pager({
        ele: "#" + _this.ele.id,
        options: {
            omit: 5, //最多保留多少按钮,必须奇数
            prevName: "prev",
            nextName: "next",
            hideNum: true,
            pageMapping: "pageNo", //当前页码字段的映射，默认pageNo
            extend: true,
        },
        params: {
            url: "/assets/page/list1.json",
            dataType: "json",
            type: "get",
            data: {
                pageNo: 1,
                pageSize: 20,
            },
        },
        reader: function (res) {
            var data = res.data;
            var template = "";
            for (var i = 0; i < data.length; i++) {
                template +=
                    "<p>" +
                    data[i].goodsName +
                    "|" +
                    data[i].goodsStar +
                    "</p>";
            }

            $("#" + _this.ele.id + "_list").html(template);
          
            return {
                pageNo: res.pageNo,
                pageSize: res.pageSize,
                totalNumber: res.totalNumber,
            };
        },
        on: {
            jumpOver: function (e) {
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
            <div class="page_list">
                <div id={this.ele.id + "_list"} />
                <div id={this.ele.id} />
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
        selectThis(ele) {
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
    }
};
