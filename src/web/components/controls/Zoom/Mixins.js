/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-18 16:26:15
 * @Description  :
 */
import styleSheet from "../../stylesheet/zoom.json";
import { utils } from "../../../utils/utils.js";

export default {
    name: "hope_zoom",
    label: "图片放大镜",
    icon: "icon-49",
    isSelected: false,
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
        style() {
            let styleSheet = this.ele.styleSheet;
            let root = this.ele.id;
            let res = {};
            Object.keys(styleSheet).forEach(function(line) {
                res[`.${root} ${line}`] = styleSheet[line];
            });
            return `<style>${utils.json2css(res)}</style>`;
        },
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
