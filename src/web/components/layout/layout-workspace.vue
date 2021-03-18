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
                <div @click="importControl" class="box">
                    <i class="iconfont icon-printdaoru"></i><span>导入</span>
                </div>
                <b>|</b>
                <div @click="clearView" class="box">
                    <i class="iconfont icon-changyonggoupiaorenshanchu"></i
                    ><span>清空画布</span>
                </div>
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

import { utils } from "../../utils/utils.js";
import { handle } from "../../utils/handle";
import ruleraxisy from "../plugins/ruleraxisy";

import ButtonMixins from "../controls/Button/Mixins";

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
        importControl() {
            // ButtonMixins
            const style = {
                ".hopeui-btn": {
                    display: "inline-block",
                    width: "980px",
                    height: "40px",
                    "line-height": "40px",
                    "background-color": "#2DB4EE",
                    color: "#ffffff",
                    "text-align": "center",
                    "font-size": "14px",
                    border: "none",
                    "border-radius": "2px",
                    transition: "all 0.3s",
                    "white-space": "nowrap",
                    overflow: "hidden",
                    "text-overflow": "ellipsis",
                    cursor: "pointer",
                    "border-width": "0px",
                },
                ".hopeui-btn i": { padding: "0 2px" },
                ".hopeui-btn:hover": {
                    opacity: "0.8",
                    filter: "alpha(opacity=80)",
                    transition: "all 0.3s",
                    color: "#ffffff",
                },
                ".hopeui-btn.hopeui-btn-primary": {
                    border: "1px solid #d8d8d8",
                    "background-color": "#ffffff",
                    color: "#555555",
                    "line-height": "36px",
                },
                ".hopeui-btn.hopeui-btn-radius": { "border-radius": "100px" },
                ".hopeui-btn.hopeui-btn-disabled": {
                    border: "1px solid #e6e6e6",
                    "background-color": "#fafafa",
                    color: "#d2d2d2",
                    cursor: "not-allowed",
                    opacity: "1",
                    "line-height": "36px",
                },
                ".hopeui-btn.hopeui-btn-disabled:active": {
                    border: "1px solid #e6e6e6",
                    "background-color": "#fafafa",
                    color: "#d2d2d2",
                    cursor: "not-allowed",
                    opacity: "1",
                    "line-height": "36px",
                },
                ".hopeui-btn.hopeui-btn-disabled:hover": {
                    border: "1px solid #e6e6e6",
                    "background-color": "#fafafa",
                    color: "#d2d2d2",
                    cursor: "not-allowed",
                    opacity: "1",
                    "line-height": "36px",
                },
                ".hopeui-btn-group": {
                    display: "inline-block",
                    "font-size": "0",
                    "vertical-align": "top",
                },
                ".hopeui-btn-group .hopeui-btn": {
                    "margin-left": "0 !important",
                    "margin-right": "0 !important",
                    "border-left": "1px solid rgba(255, 255, 255, 0.5)",
                    "border-radius": "0",
                },
                ".hopeui-btn-group .hopeui-btn:first-child": {
                    "border-left": "none",
                    "border-radius": "2px 0 0 2px",
                },
                ".hopeui-btn-group .hopeui-btn:last-child": {
                    "border-radius": "0 2px 2px 0",
                },
            };
            let _this = this,
                ele = ButtonMixins,
                oo;
            ele.styleSheet = styleSheet;
            ele.zoomParams = zoomParams;
            ele.scriptParams = scriptParams;
            oo = _.cloneDeep(ele);
            (function func(cls) {
                for (let ele of cls) {
                    let id = "hope_" + utils.getRandomName(6);
                    _this.$set(ele, "id", id);
                    if ($egu.isArray(ele.children) && ele.children.length > 0) {
                        func(ele.children);
                    }
                }
            })([oo]);
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ControlsAddContainer", oo);
            this.$store.commit("Hope/ChooseControl", {
                id: oo.id,
                type: false,
            });
            this.$store.commit("Hope/ControlsSelected", oo);

            // console.log(JSON.stringify(this.$store.state.selected.styleSheet));
        },
        clearView() {
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
