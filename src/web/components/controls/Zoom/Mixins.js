/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 17:06:03
 * @Description  :
 */
import styleSheet from "../../stylesheet/zoom.json";
import { methods, computed } from "../public.js";
import rightMenu from "./menu.json";

export default {
    name: "hope_zoom",
    label: "图片放大镜",
    icon: "icon-49",
    isSelected: false,
    zoomParams: {
        width: "auto",
        height: "auto",
        x: 10,
        y: 10,
        resizable: false,
        draggable: true,
        lockAspectRatio: false
    },
    includes: { base: true, effect: false, options: true },
    styleSheet: { ...styleSheet },
    scriptParams: {
        largeWrapper: "preview",
        mode: "outside",
        zoom: 2,
        zoomable: true,
    },
    script(ele) {
        if (ele.scriptParams.largeWrapper) {
            ele.scriptParams.largeWrapper = ele.id + "-preview";
        }
        return `
        /*
        * @Author       : Evan.G
        * @Description  : hopeUI图像放大镜组件
        * @API          : http://seazeg.gitee.io/hopeui/
        * ***********************************************
        * ele: 元素 dom 节点
        * options: {
        *      largeWrapper: 放大图像承载容器ID | String
        *      mode: 图外放大模式/图上放大模式 | String
        *      zoom: 缩放倍率 | Number
        *      zoomable: 是否可以随时缩放 | Boolean
        * }
        * on: {
        *      enter: 进入图片区域时
        *      move: 图片区域移动时
        *      leave: 离开图片区域时
        *      scale: 图片区域缩放时
        * }
        */
        var zoom = hope.zoom({
            ele: '#${ele.id}',
            options: ${JSON.stringify(ele.scriptParams)},
            on:{
                enter: function (e) {},
                move: function (e) {},
                leave: function (e) {},
                scale: function (e) {},
            }
        });   
        return zoom;     
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
                    class="hopeui-zoom-thumb-wrapper"
                    style="width:300px;height:300px;display: inline-block"
                >
                    <img
                        id={this.ele.id}
                        src="http://test.haier.com/frontDEMO/ProgressiveJPEG/ProgressiveJPEG.jpg"
                        hope-large-img-url="http://test.haier.com/frontDEMO/ProgressiveJPEG/ProgressiveJPEG.jpg"
                        hope-large-img-wrapper="preview"
                    />
                </div>
                <div
                    class="hopeui-zoom-preview"
                    id={this.ele.id + "-preview"}
                    style="width: 300px; height: 300px;display: inline-block;vertical-align: top;background:rgba(0,0,0,0.1);"
                >
                    局部显示区域
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
