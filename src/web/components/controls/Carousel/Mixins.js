/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-20 14:29:40
 * @Description  :
 */
import styleSheet from "../../stylesheet/carousel.json";
import { utils } from "../../../utils/utils.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_carousel",
    label: "轮播图",
    icon: "icon-shuffling-banner",
    isSelected: false,
    includes: { options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        pagination: "",
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
        keyboardControl: false,
        mousewheelControl: false,
    },
    script(ele) {
        try {
            if (ele.scriptParams.pagination) {
                ele.scriptParams.pagination =
                    "#" + ele.id + " .hope-pagination";
            }
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
        } catch (error) {}
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
                    style="width:600px;height:300px"
                >
                    <div class="hope-wrapper">
                        <div class="hope-slide">
                            <div
                                class="title"
                                style={
                                    "height:300px;color:#fff;font-size:20px;line-height:300px;text-align: center;background:" +
                                    "#" +
                                    Math.floor(
                                        Math.random() * 0xffffff
                                    ).toString(16)
                                }
                            >
                                Slide 1
                            </div>
                        </div>
                        <div class="hope-slide">
                            <div
                                class="title"
                                style={
                                    "height:300px;color:#fff;font-size:20px;line-height:300px;text-align: center;background:" +
                                    "#" +
                                    Math.floor(
                                        Math.random() * 0xffffff
                                    ).toString(16)
                                }
                            >
                                Slide 2
                            </div>
                        </div>
                        <div class="hope-slide">
                            <div
                                class="title"
                                style={
                                    "height:300px;color:#fff;font-size:20px;line-height:300px;text-align: center;background:" +
                                    "#" +
                                    Math.floor(
                                        Math.random() * 0xffffff
                                    ).toString(16)
                                }
                            >
                                Slide 3
                            </div>
                        </div>
                        <div class="hope-slide">
                            <div
                                class="title"
                                style={
                                    "height:300px;color:#fff;font-size:20px;line-height:300px;text-align: center;background:" +
                                    "#" +
                                    Math.floor(
                                        Math.random() * 0xffffff
                                    ).toString(16)
                                }
                            >
                                Slide 4
                            </div>
                        </div>
                        <div class="hope-slide">
                            <div
                                class="title"
                                style={
                                    "height:300px;color:#fff;font-size:20px;line-height:300px;text-align: center;background:" +
                                    "#" +
                                    Math.floor(
                                        Math.random() * 0xffffff
                                    ).toString(16)
                                }
                            >
                                Slide 5
                            </div>
                        </div>
                        <div class="hope-slide">
                            <div
                                class="title"
                                style={
                                    "height:300px;color:#fff;font-size:20px;line-height:300px;text-align: center;background:" +
                                    "#" +
                                    Math.floor(
                                        Math.random() * 0xffffff
                                    ).toString(16)
                                }
                            >
                                Slide 6
                            </div>
                        </div>
                    </div>
                    <div class="hope-pagination" />
                </div>
            </div>
        );
    },
    computed: {
        style() {
            let styleSheet = this.ele.styleSheet;
            let root = this.ele.id;
            let res = {};
            Object.keys(styleSheet).forEach(function (line) {
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
            this.selectThis();
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
