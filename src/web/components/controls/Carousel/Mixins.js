/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-15 14:17:11
 * @Description  :
 */
import styleSheet from "../../stylesheet/carousel.json";
import { methods, computed } from "../public.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_carousel",
    label: "轮播图",
    icon: "icon-shuffling-banner",
    isSelected: false,
    zoomParams: {
        width: "auto",
        height: "auto",
        x: 0,
        y: 0,
        resizable: false
    },
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
        ...computed,
    },
    contextMenuData: rightMenu,
    methods: {
        ...methods,
    },
};
