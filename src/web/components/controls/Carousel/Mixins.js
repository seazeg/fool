/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-26 14:16:38
 * @Description  :
 */
import styleSheet from "../../stylesheet/carousel.json";
export default {
    name: "hope_carousel",
    label: "轮播图",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
    scriptParams: {
        paginationClickable: true,
        slidesPerView: 3,
        calculateHeight: true,
        resizeReInit: true,
        roundLengths: true,
        loop: true,
    },
    script(ele) {
        return `
        window.carousel = hope.carousel({
            ele: '#${ele.id}',
            options:${JSON.stringify(ele.scriptParams)},
            on:{
                onFirstInit: function (e) {
                    console.log(e);
                },
                onSlideChangeStart: function (e) {
                    console.log(e);
                }
            }
        })
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
                <div
                    class="hope-container"
                    id={this.ele.id}
                    style="width:500px;height:300px"
                >
                    <div class="hope-wrapper">
                        <div class="hope-slide">
                            <div
                                class="title"
                                style="width:500px;height:300px;background:red"
                            >
                                Slide 1
                            </div>
                        </div>
                        <div class="hope-slide">
                            <div
                                class="title"
                                style="width:500px;height:300px;background:green"
                            >
                                Slide 2
                            </div>
                        </div>
                        <div class="hope-slide">
                            <div
                                class="title"
                                style="width:500px;height:300px;background:blue"
                            >
                                Slide 3
                            </div>
                        </div>
                    </div>
                    <div class="hope-pagination" />
                </div>
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
    },
};
