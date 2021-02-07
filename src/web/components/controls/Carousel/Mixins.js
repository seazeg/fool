/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-07 16:15:23
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
        // pagination: ".banner .hope-pagination",
        paginationClickable: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        calculateHeight: true,
        resizeReInit: true,
        roundLengths: true,
        loop: true,
        mode: "horizontal",
        freeMode: false,
        freeModeFluid: true,
        centeredSlides: false,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        speed: 300,
        autoResize: true,
        resizeReInit: false,
        preventLinks: true,
        initialSlide: 0,
        touchRatio: 1,
        moveStartThreshold: 5,
        hopeToPrev: true,
        hopeToNext: true,
        keyboardControl:false,
        mousewheelControl:false
    },
    script(ele) {
        return `
        var carousel = hope.carousel({
            ele: '#${ele.id}',
            options: ${JSON.stringify(ele.scriptParams)},
            on:{
                onFirstInit: function (e) {
                    //console.log(e);
                },
                onSlideChangeStart: function (e) {
                    //console.log(e);
                }
            }
        })
        return carousel
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
                        <div
                            class="hope-slide"
                            style="width:500px;background:red;font-size:16px;color:#fff"
                        >
                            <div class="title" style="height:300px;">
                                Slide 1
                            </div>
                        </div>
                        <div
                            class="hope-slide"
                            style="width:500px;background:green;font-size:16px;color:#fff"
                        >
                            <div class="title" style="height:300px;">
                                Slide 2
                            </div>
                        </div>
                        <div
                            class="hope-slide"
                            style="width:500px;background:blue;font-size:16px;color:#fff"
                        >
                            <div class="title" style="height:300px;">
                                Slide 3
                            </div>
                        </div>
                        <div
                            class="hope-slide"
                            style="width:500px;background:red;font-size:16px;color:#fff"
                        >
                            <div class="title" style="height:300px;">
                                Slide 4
                            </div>
                        </div>
                        <div
                            class="hope-slide"
                            style="width:500px;background:green;font-size:16px;color:#fff"
                        >
                            <div class="title" style="height:300px;">
                                Slide 5
                            </div>
                        </div>
                        <div
                            class="hope-slide"
                            style="width:500px;background:blue;font-size:16px;color:#fff"
                        >
                            <div class="title" style="height:300px;">
                                Slide 6
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
        selectThis() {
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ChooseControl", this.ele.id);
        },
        delThis() {
            this.selectThis();
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
