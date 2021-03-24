<style lang="less">
#tab-tree {
    float: right;
}
</style>
<template>
    <div class="wrapper">
        <!-- 视图 -->
        <div class="view">
            <el-tabs
                v-model="tabChecked"
                type="border-card"
                @tab-click="tabClick"
            >
                <el-tab-pane name="preview">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-yulan"></i><b>视图</b>
                    </span>
                    <div
                        class="view-box preview"
                        id="preview"
                        ref="preview"
                        style="background: linear-gradient(-90deg,rgba(0, 0, 0, 0.1) 1px,transparent 1px)0% 0% / 10px 10px,linear-gradient(rgba(0, 0, 0, 0.1) 1px,transparent 1px)0% 0% / 10px 10px;"
                    >
                        <layout-draggable
                            :controls="controls"
                        ></layout-draggable>
                        <img
                            class="theme-watermark"
                            src="../../assets/watermark.svg"
                            alt=""
                        />
                    </div>
                    <ruleraxisy></ruleraxisy>
                </el-tab-pane>
                <el-tab-pane name="html">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-HTML"></i><b>HTML</b>
                    </span>
                    <div class="view-box html">
                        <el-button
                            plain
                            icon="el-icon-s-open"
                            size="mini"
                            v-clipboard:copy="copy('html')"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError"
                            class="codeCopy"
                            >代码复制
                        </el-button>
                        <prism-editor
                            class="editor-code"
                            v-model="source.html"
                            :highlight="highHTML"
                            line-numbers
                            language="html"
                            readonly
                        ></prism-editor>
                        <img
                            class="theme-watermark"
                            src="../../assets/watermark.svg"
                            alt=""
                        />
                    </div>
                </el-tab-pane>
                <el-tab-pane name="css">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-css"></i><b>CSS</b>
                    </span>
                    <div class="view-box css">
                        <el-button
                            plain
                            icon="el-icon-s-open"
                            size="mini"
                            v-clipboard:copy="copy('css')"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError"
                            class="codeCopy"
                            >代码复制
                        </el-button>
                        <prism-editor
                            class="editor-code"
                            v-model="source.css"
                            :highlight="highCSS"
                            line-numbers
                            language="css"
                            readonly
                        ></prism-editor>
                        <img
                            class="theme-watermark"
                            src="../../assets/watermark.svg"
                            alt=""
                        />
                    </div>
                </el-tab-pane>
                <el-tab-pane name="javascript">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-js"></i><b>javascript</b></span
                    >
                    <div class="view-box js">
                        <el-button
                            plain
                            icon="el-icon-s-open"
                            size="mini"
                            v-clipboard:copy="copy('javascript')"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError"
                            class="codeCopy"
                            >代码复制
                        </el-button>
                        <prism-editor
                            class="editor-code"
                            v-model="source.js"
                            :highlight="highJS"
                            line-numbers
                            language="js"
                            readonly
                        >
                        </prism-editor>
                        <img
                            class="theme-watermark"
                            src="../../assets/watermark.svg"
                            alt=""
                        />
                    </div>
                </el-tab-pane>
            </el-tabs>
            <div class="viewTools">
                <el-dropdown @command="menuHandler" trigger="click" :show-timeout="50" :hide-timeou="50">
                    <span class="el-dropdown-link">
                        <i
                            class="iconfont icon-caidan"
                            style="position: relative;top: 2px;"
                        ></i>
                        <span>功能菜单</span
                        ><i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            :command="item.command"
                            v-for="(item, index) in menu"
                            :divided="item.divided"
                            :key="'menu' + index"
                            v-if="item.isClient == isClient"
                        >
                            <i class="iconfont" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </el-dropdown-item>
                        <el-dropdown-item command="clearWorkspace" :divided="isClient">
                            <i
                                class="iconfont icon-changyonggoupiaorenshanchu"
                            ></i>
                            <span>清空画布</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <b>|</b>
                <div @click="isTreeShow = true" class="box">
                    <i class="iconfont icon-tree"></i><span>组件树</span>
                </div>
            </div>
            <layout-statusbar :ele="selectedControl"></layout-statusbar>
        </div>

        <el-drawer
            title="组件树"
            :visible.sync="isTreeShow"
            :with-header="false"
            size="20%"
        >
            <el-tree
                :data="controls"
                node-key="controlsTree"
                @node-click="treeNodeClick"
                :expand-on-click-node="false"
                default-expand-all
                :allow-drop="allowDrop"
                draggable
            >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span
                        :class="{
                            'theme-select': data.id == selectedControl.id,
                        }"
                        ><i class="iconfont" :class="data.icon"></i
                        >{{ data.label }} - {{ data.id }}</span
                    >
                    <span>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            circle
                            size="mini"
                            @click="() => treeNodeRemove(node, data)"
                        >
                        </el-button>
                    </span>
                </span>
            </el-tree>
        </el-drawer>

        <SelectorEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></SelectorEditor>
        <InputEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></InputEditor>
        <RadioEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></RadioEditor>
        <CheckboxEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></CheckboxEditor>
        <TextareaEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></TextareaEditor>
        <PagerEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></PagerEditor>
        <ButtonEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></ButtonEditor>
        <SuggestEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></SuggestEditor>
        <CarouselEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></CarouselEditor>
        <DatepickerEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></DatepickerEditor>
        <ZoomEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></ZoomEditor>
        <LoadmoreEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></LoadmoreEditor>
    </div>
</template>
<script>
import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "vue-prism-editor/dist/prismeditor.min.css";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-coy.css"; //okaidia

import { message } from "../../utils/message";

import { handle } from "../../utils/handle";
import ruleraxisy from "../plugins/ruleraxisy";

import SelectorMixins from "../controls/Selector/Mixins";
import RadioMixins from "../controls/Radio/Mixins";
import InputMixins from "../controls/Input/Mixins";
import SuggestMixins from "../controls/Suggest/Mixins";
import CheckboxMixins from "../controls/Checkbox/Mixins";
import TextareaMixins from "../controls/Textarea/Mixins";
import PagerMixins from "../controls/Pager/Mixins";
import ButtonMixins from "../controls/Button/Mixins";
import CarouselMixins from "../controls/Carousel/Mixins";
import DatapickerMixins from "../controls/Datepicker/Mixins";
import ZoomMixins from "../controls/Zoom/Mixins";
import LoadmoreMixins from "../controls/Loadmore/Mixins";

export default {
    name: "layout-workspace",
    data() {
        return {
            isTreeShow: false,
            tabChecked: "preview",
            source: {
                html: "",
                css: "",
                js: "",
            },
            menu: [
                {
                    name: "打开工作区",
                    icon: "icon-dakai",
                    command: "openWorkspace",
                    divided: false,
                    isClient: true,
                },
                {
                    name: "保存工作区",
                    icon: "icon-baocun",
                    command: "saveWorkspace",
                    divided: false,
                    isClient: true,
                },
                {
                    name: "导入组件",
                    icon: "icon-printdaoru",
                    command: "importControl",
                    divided: true,
                    isClient: true,
                },
                {
                    name: "导出组件",
                    icon: "icon-exportdaochu",
                    command: "exportControl",
                    divided: false,
                    isClient: true,
                },
            ],
            animationOption: [
                {
                    label: "基础动画",
                    options: [
                        {
                            value: "bounce",
                            label: "bounce",
                        },
                        {
                            value: "flash",
                            label: "flash",
                        },
                        {
                            value: "pulse",
                            label: "pulse",
                        },
                        {
                            value: "rubberBand",
                            label: "rubberBand",
                        },
                        {
                            value: "shakeX",
                            label: "shakeX",
                        },
                        {
                            value: "shakeY",
                            label: "shakeY",
                        },
                        {
                            value: "headShake",
                            label: "headShake",
                        },
                        {
                            value: "swing",
                            label: "swing",
                        },
                        {
                            value: "tada",
                            label: "tada",
                        },
                        {
                            value: "wobble",
                            label: "wobble",
                        },
                        {
                            value: "jello",
                            label: "jello",
                        },
                        {
                            value: "heartBeat",
                            label: "heartBeat",
                        },
                    ],
                },
            ],
            borderStyleOption: [
                {
                    value: "solid",
                    label: "solid",
                },
                {
                    value: "dotted",
                    label: "dotted",
                },
                {
                    value: "dashed",
                    label: "dashed",
                },
                {
                    value: "double",
                    label: "double",
                },
                {
                    value: "groove",
                    label: "groove",
                },
                {
                    value: "ridge",
                    label: "ridge",
                },
                {
                    value: "inset",
                    label: "inset",
                },
                {
                    value: "outset",
                    label: "outset",
                },
                {
                    value: "none",
                    label: "none",
                },
            ],
            fontStyleOption: [
                {
                    value: "normal",
                    label: "normal",
                },
                {
                    value: "italic",
                    label: "italic",
                },
            ],
            generalStyleOption: [
                {
                    value: 100,
                    label: "默认数值化",
                },
                {
                    value: "auto",
                    label: "auto",
                },
                {
                    value: "inherit",
                    label: "inherit",
                },
                {
                    value: "initial",
                    label: "initial",
                },
                {
                    value: "unset",
                    label: "unset",
                },
            ],
        };
    },
    components: {
        PrismEditor,
        ruleraxisy,
    },
    computed: {
        controls: {
            get() {
                return this.$store.state.controls;
            },
            set(value) {
                this.$store.commit("Hope/UpdateControls", value);
            },
        },
        selectedControl() {
            return this.$store.state.selected;
        },
        metaData() {
            return {
                hope_selector: SelectorMixins,
                hope_radio: RadioMixins,
                hope_input: InputMixins,
                hope_suggest: SuggestMixins,
                hope_checkbox: CheckboxMixins,
                hope_textarea: TextareaMixins,
                hope_pager: PagerMixins,
                hope_button: ButtonMixins,
                hope_carousel: CarouselMixins,
                hope_datepicker: DatapickerMixins,
                hope_zoom: ZoomMixins,
                hope_loadmore: LoadmoreMixins,
            };
        }
    },
    methods: {
        highHTML(code) {
            return highlight(code, languages.markup);
        },
        highCSS(code) {
            return highlight(code, languages.css);
        },
        highJS(code) {
            return highlight(code, languages.js);
        },
        copy(type) {
            let source = "";
            switch (type) {
                case "html":
                    source = this.source.html;
                    break;
                case "css":
                    source = this.source.css;
                    break;
                case "javascript":
                    source = this.source.js;
                    break;
                default:
                    break;
            }
            return source;
        },
        onCopy(e) {
            this.$message({
                message: "复制成功",
                type: "success",
                duration: 500,
            });
        },
        onError(e) {
            this.$message({
                message: "复制失败",
                type: "error",
                duration: 500,
            });
        },
        allowDrop(draggingNode, dropNode, type) {
            if (!dropNode.data.name.includes("grid")) {
                return type !== "inner";
            } else {
                return true;
            }
        },
        getCoords(e){
            this.$store.commit("Hope/coordsSwap",{x:e.offsetX, y:e.offsetY})
        },
        menuHandler(cmd) {
            switch (cmd) {
                case "importControl":
                    this.importControl();
                    break;
                case "exportControl":
                    this.exportControl();
                    break;
                case "openWorkspace":
                    this.openWorkspace();
                    break;
                case "saveWorkspace":
                    this.saveWorkspace();
                    break;
                case "clearWorkspace":
                    this.clearWorkspace();
                default:
                    break;
            }
        },
        controlRepeatCheck(id) {
            let _this = this;
            return new Promise((resolve, reject) => {
                for (let item of _this.$store.state.controls) {
                    if (item.id == id) {
                        resolve(true);
                        return;
                    } else {
                        resolve(false);
                    }
                }
                resolve(false);
            });
        },
        importControl() {
            let _this = this;
            message.importFunc("control").then(function(data) {
                if (data != "canceled") {
                    if (data) {
                        _this.controlRepeatCheck(data.id).then(function(res) {
                            if (!res) {
                                let openControl = data;
                                let ele = _.cloneDeep(
                                    _this.metaData[openControl.name]
                                );
                                ele.styleSheet = openControl.styleSheet;
                                ele.zoomParams = openControl.zoomParams;
                                ele.scriptParams = openControl.scriptParams;
                                ele.html = openControl.html;
                                ele.unitSwitch = openControl.unitSwitch;
                                ele.id = openControl.id;
                                _this.$store.commit(
                                    "Hope/ResetControlSelected"
                                );
                                _this.$store.commit(
                                    "Hope/ControlsAddContainer",
                                    ele
                                );
                                _this.$store.commit("Hope/ChooseControl", {
                                    id: ele.id,
                                    type: false,
                                });
                                _this.$store.commit(
                                    "Hope/ControlsSelected",
                                    ele
                                );
                            } else {
                                vm.$message({
                                    message: "组件文件重复导入",
                                    type: "error",
                                });
                            }
                        });
                    } else {
                        vm.$message({
                            message: "不是组件文件",
                            type: "error",
                        });
                    }
                }
            });
        },
        exportControl() {
            if (this.selectedControl.name) {
                let selectedControl = this.selectedControl;
                let exportControl = {};
                exportControl.name = selectedControl.name;
                exportControl.styleSheet = selectedControl.styleSheet;
                exportControl.scriptParams = selectedControl.scriptParams;
                exportControl.zoomParams = selectedControl.zoomParams;
                exportControl.html = selectedControl.html;
                exportControl.unitSwitch = selectedControl.unitSwitch;
                exportControl.id = selectedControl.id;
                message.exportFunc("control", exportControl, selectedControl.label);
            } else {
                this.$message({
                    message: "未选中任何组件",
                    type: "error",
                });
            }
        },
        openWorkspace() {
            let _this = this;
            message.importFunc("workspace").then(function(data) {
                if (data != "canceled") {
                    if (data) {
                        let openList = data; //外部载入
                        let importList = [];
                        for (let item of openList) {
                            let obj = _this.metaData[item.name];
                            obj.styleSheet = item.styleSheet;
                            obj.scriptParams = item.scriptParams;
                            obj.zoomParams = item.zoomParams;
                            obj.isSelected = item.isSelected;
                            obj.html = item.html;
                            obj.unitSwitch = item.unitSwitch;
                            obj.id = item.id;
                            importList.push(obj);
                            console.log(item);
                            if (item.isSelected) {
                                _this.$store.state.selected = obj;
                            }
                        }
                        _this.$store.state.controls = importList;
                    } else {
                        vm.$message({
                            message: "不是工作区文件",
                            type: "error",
                        });
                    }
                }
            });
        },
        saveWorkspace() {
            if (this.controls.length > 0) {
                let controlsList = this.controls;
                let exportList = [];
                for (let item of controlsList) {
                    let obj = {};
                    obj.name = item.name;
                    obj.styleSheet = item.styleSheet;
                    obj.scriptParams = item.scriptParams;
                    obj.zoomParams = item.zoomParams;
                    obj.isSelected = item.isSelected;
                    obj.html = item.html;
                    obj.unitSwitch = item.unitSwitch;
                    obj.id = item.id;
                    exportList.push(obj);
                }
                message.exportFunc("workspace", exportList, "工作区");
            } else {
                this.$message({
                    message: "工作区没有任何内容",
                    type: "error",
                });
            }
        },
        clearWorkspace() {
            this.$confirm("确定清空画布？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.$store.commit("Hope/clearControlsList");
                })
                .catch(() => {});
        },
        treeNodeClick(e) {
            console.log(e);
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ChooseControl", e);
        },
        treeNodeRemove(node, e) {
            this.$confirm("确定移除当前组件？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.$store.commit("Hope/RemoveControl", e.id);
                })
                .catch(() => {});
        },
        tabClick(e) {
            switch (e.name) {
                case "html":
                    this.source.html = handle.reduceHTML(this.selectedControl);
                    break;
                case "css":
                    this.source.css = handle.getCSS(this.selectedControl);
                    break;
                case "js":
                    this.source.js = handle.getJS(this.selectedControl);
                    break;
                default:
                    break;
            }
        },
        codeListener() {
            this.source.html = handle.reduceHTML(this.selectedControl);
            this.source.css = handle.getCSS(this.selectedControl);
            this.source.js = handle.getJS(this.selectedControl);
        },
    },
    watch: {
        selectedControl: {
            handler(n, o) {
                this.codeListener();
            },
            deep: true,
        },
    },
    updated() {
        // this.codeListener();
    },
};
</script>
