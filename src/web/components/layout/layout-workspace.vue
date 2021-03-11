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
                    <div class="view-box preview" id="preview" ref="preview">
                        <layout-draggable
                            :controls="controls"
                        ></layout-draggable>
                        <img
                            class="theme-watermark"
                            src="../../assets/watermark.svg"
                            alt=""
                        />
                    </div>
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
                            v-clipboard:copy="copy('html')"
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
                            v-clipboard:copy="copy('html')"
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
                <el-tab-pane name="tree">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-tree"></i><b>组件树</b></span
                    >
                    <div class="view-box tree">
                        <el-tree
                            :data="controls"
                            node-key="controlsTree"
                            @node-click="treeNodeClick"
                            :expand-on-click-node="false"
                            default-expand-all
                            :allow-drop="allowDrop"
                            draggable
                        >
                            <span
                                class="custom-tree-node"
                                slot-scope="{ node, data }"
                            >
                                <span
                                    :class="{
                                        'theme-select':
                                            data.id == selectedControl.id,
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
                                        @click="
                                            () => treeNodeRemove(node, data)
                                        "
                                    >
                                    </el-button>
                                </span>
                            </span>
                        </el-tree>
                        <img
                            class="theme-watermark"
                            src="../../assets/watermark.svg"
                            alt=""
                        />
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

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

export default {
    name: "layout-workspace",
    data() {
        return {
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
        dialogGridVisible: {
            get() {
                return this.$store.state.dialogGridVisible;
            },
            set(value) {
                this.$store.commit("Hope/ChangeDialogGridVisible", value);
            },
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
        htmlGenerator() {
            let defaultHTML = `
                <!DOCTYPE html>
                    <html lang="zh">
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta charset="UTF-8">
                        <title>HOPE</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
                        <meta name="format-detection" content="telephone=no, email=no" />
                        <meta name="renderer" content="webkit">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                        <meta http-equiv="X-UA-Compatible" content="IE=10;IE=9; IE=8; IE=7; IE=EDGE">
                        <link rel="stylesheet" href="hopeui\/hopeui.min.css" />
                        <style>
                            ${this.source.css}
                        </style>
                    </head>

                    <body>
                        ${this.source.html}
                        <script src="hopeui\/hopeui.min.js"><\/script>

                        <script>
                        ${this.source.js}
                        <\/script><\/body><\/html>
                `;

            $http
                .post("http://localhost:2599/generateHTML", {
                    html: defaultHTML,
                })
                .then(function (res) {
                    window.open("http://localhost:2599/preview.html");
                });
        },
        allowDrop(draggingNode, dropNode, type) {
            if (!dropNode.data.name.includes("grid")) {
                return type !== "inner";
            } else {
                return true;
            }
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
                type: "info",
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
