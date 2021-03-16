/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-16 10:01:03
 * @Description  :
 */
import styleSheet from "../../stylesheet/zoom.json";
import { methods, computed } from "../public.js";
import rightMenu from "../../plugins/contextMenu/menu.json";

export default {
    name: "hope_zoom",
    label: "图片放大镜",
    icon: "icon-49",
    isSelected: false,
    zoomParams: {
        width: "auto",
        height: "auto",
        x: 0,
        y: 0,
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
