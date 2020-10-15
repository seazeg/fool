<template>
    <div class="wrapper">
        <!-- 视图 -->
        <div class="view">
            <el-tabs v-model="tabChecked" type="border-card">
                <el-tab-pane name="preview">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-edit-outline"></i>preview</span
                    >
                    <div class="view-box preview" id="preview" ref="preview">
                        <layout-draggable
                            :controls="controls"
                        ></layout-draggable>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="html">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-notebook-2"></i>html</span
                    >
                    <div class="view-box html">
                        <prism-editor
                            class="editor-code"
                            v-model="source.html"
                            :highlight="highHTML"
                            line-numbers
                            language="markup"
                            readonly
                        ></prism-editor>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="css">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-magic-stick"></i>css</span
                    >
                    <div class="view-box css">
                        <prism-editor
                            class="editor-code"
                            v-model="source.css"
                            :highlight="highCSS"
                            line-numbers
                            language="css"
                            readonly
                        ></prism-editor>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="javascript">
                    <span slot="label" class="lab-icon">
                        <i class="el-icon-cpu"></i>javascript</span
                    >
                    <div class="view-box js">
                        <prism-editor
                            class="editor-code"
                            v-model="source.js"
                            :highlight="highJS"
                            line-numbers
                            readonly
                        ></prism-editor>
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

        <el-drawer title="控件树" :visible.sync="drawer" :with-header="false">
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
                        >{{ data.name }} - {{ data.label }}</span
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

        <el-dialog
            title="栅格参数配置"
            :visible.sync="dialogFormVisible"
            width="600px"
        >
            <el-form :model="form">
                <el-form-item label="总列数" :label-width="formLabelWidth">
                    <el-select
                        v-model="form.totalNum"
                        placeholder="请选择总列数"
                        @change="totalNumChange"
                        style="width:100%"
                    >
                        <el-option label="共8列" value="8"></el-option>
                        <el-option label="共12列" value="12"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="栅格数量" :label-width="formLabelWidth">
                    <el-select
                        v-model="form.colNum"
                        placeholder="请选择栅格数量"
                        style="width:100%"
                    >
                        <el-option
                            :label="opt.label"
                            :value="opt.value"
                            :key="opt.value"
                            v-for="opt in colOptions"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogClose()">取消</el-button>
                <el-button type="primary" @click="dialogEnter()"
                    >确定</el-button
                >
            </div>
        </el-dialog>

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
    </div>
</template>
<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-coy.css"; //okaidia
import { handle } from "../../utils/handle.js";
import { utils } from "../../utils/utils.js";
export default {
    name: "layout-editor",
    data() {
        return {
            tabChecked: "preview",
            drawer: false,
            copySource: "",
            form: {
                totalNum: "",
                colNum: "",
            },
            formLabelWidth: "80px",
            source: {
                html: "",
                css: "",
                js: "",
            },
            colOptions: [],
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
        dialogFormVisible() {
            return this.$store.state.dialogFormVisible;
        },
    },
    methods: {
        totalNumChange(e) {
            let tmp = [];
            for (let i = 1; i <= e; i++) {
                if (e % i == 0) {
                    tmp.push({
                        value: i,
                        label: i + "列",
                    });
                }
            }
            this.colOptions = tmp;
        },
        dialogClose() {
            this.$store.commit("Hope/ChangeDialogFormVisible", false);
        },
        dialogEnter() {
            let e = this.$store.state.gridEle;
            //自定义栅格列数
            let col = parseInt(this.form.colNum);
            let total = parseInt(this.form.totalNum);
            if (col && total) {
                for (let i = 1; i <= col; i++) {
                    e.added.element.children.push({
                        name: "hope_grid",
                        label: "自定义",
                        className: `hopeui-col-xl-${total / col}-${total}`,
                        icon: "icon-anniu",
                        isCustom: true,
                        isSelected: false,
                        id: "hope_" + utils.getRandomName(6),
                        children: [],
                        styleSheet: {},
                    });
                }
                try {
                    this.$store.commit("Hope/ResetControlSelected");
                    this.$store.commit(
                        "Hope/ControlsSelected",
                        e.added.element
                    );
                    this.$store.commit(
                        "Hope/ChooseControl",
                        e.added.element.id
                    );
                } catch (error) {}
            }
            this.dialogClose();
        },
        highHTML(code) {
            return highlight(code, languages.markup);
        },
        highCSS(code) {
            return highlight(code, languages.css);
        },
        highJS(code) {
            return highlight(code, languages.js);
        },
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
            if (!dropNode.data.name.includes("grid")) {
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
                    this.$store.commit("Hope/RemoveControl", e.id);
                })
                .catch(() => {});
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
        this.codeListener();
    },
};
</script>
