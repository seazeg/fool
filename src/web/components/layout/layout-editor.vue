<template>
    <div class="wrapper">
        <!-- 视图 -->
        <div class="view">
            <el-tabs v-model="tabChecked" type="border-card">
                <el-tab-pane name="preview">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-edit-outline"></i>preview</span
                    >
                    <div class="view-box preview" ref="preview">
                        <layout-draggable
                            :controls="controls"
                        ></layout-draggable>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="html">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-notebook-2"></i>html</span
                    >
                    <div class="view-box html" v-highlight>
                        <pre>
                            <code v-text="source.html">
                            </code>
                        </pre>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="css">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-magic-stick"></i>css</span
                    >
                    <div class="view-box css" v-highlight>
                        <pre>
                            <code v-html="source.css">
                            </code>
                        </pre>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="javascript">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-cpu"></i>javascript</span
                    >
                    <div class="view-box js" v-highlight>
                        <!-- <pre>
                            <code v-html="workarea.js">
                            </code>
                            </pre> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane name="htmlGenerator" :disabled="true">
                    <span slot="label" class="lab-icon">
                        <el-button
                            plain
                            icon="el-icon-s-open"
                            size="mini"
                            v-clipboard:copy="copy()"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError"
                            v-show="tabChecked != 'preview'"
                            >代码复制</el-button
                        >
                        <el-button
                            plain
                            @click="drawer = true"
                            icon="el-icon-s-promotion"
                            size="mini"
                            v-show="tabChecked == 'preview'"
                            >查看控件树</el-button
                        >
                        <el-button
                            type="success"
                            @click="htmlGenerator"
                            icon="el-icon-s-help"
                            size="mini"
                            >生成预览</el-button
                        >
                    </span>
                </el-tab-pane>
            </el-tabs>
        </div>

        <el-drawer title="空间树" :visible.sync="drawer" :with-header="false">
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
                    <span>{{ node.label }}</span>
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

        <ButtonEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></ButtonEditor>
        <GridEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></GridEditor>
        <InputEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></InputEditor>
        <ImagerEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></ImagerEditor>
        <RadioEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></RadioEditor>
        <TextEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></TextEditor>
        <BoxEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
            :fontStyleOption="fontStyleOption"
            :generalStyleOption="generalStyleOption"
        ></BoxEditor>
    </div>
</template>
<script>
import { handle } from "../../utils/handle.js";
export default {
    name: "layout-editor",
    data() {
        return {
            tabChecked: "preview",
            drawer: false,
            copySource: "",
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
                    value:100,
                    label: "默认数值化"
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
        copy() {
            let source = "";
            switch (this.tabChecked) {
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
            if (!dropNode.data.label.includes("grid")) {
                return type !== "inner";
            } else {
                return true;
            }
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
                        <link rel="stylesheet" href="base.css" />
                        <link rel="stylesheet" href="hope.css" />
                        <style>
                            ${this.source.css}
                        </style>
                    </head>

                    <body>
                        ${this.source.html}
                    </body>

                </html>
           `;

            $http
                .post("http://localhost:2599/generateHTML", {
                    html: defaultHTML,
                })
                .then(function(res) {
                    window.open("http://localhost:2599/preview.html");
                });
        },
        treeNodeClick(e) {
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ChooseControl", e.id);
        },
        treeNodeRemove(node, e) {
            this.$confirm("确定删除当前节点？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info",
            })
                .then(() => {
                    this.$store.commit("Hope/removeControl", e.id);
                })
                .catch(() => {});
        },
        codeListener() {
            this.source.html = handle.reduceHTML(this.$refs.preview.innerHTML);
            this.source.css = handle.getCSS(this.controls);
        },
    },
    watch: {
        selectedControl: {
            handler(n, o) {
                // this.codeListener();
            },
            deep: true,
        },
    },
    updated() {
        // this.codeListener();
    },
};
</script>
