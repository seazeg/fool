<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-01-22 17:33:58
 * @Description  : 
-->
<template>
    <div class="controls_block">
        <div class="controls_inner">
            <!-- <div
                @click.stop="choose"
                class="controls_change hopeui-icon hopeui-icon-edit"
            ></div> -->
            <div v-html="style"></div>
            <div class="htmlCache">{{ thishtml }}</div>
            <div class="jsCache" :data-id="ele.id">{{ js }}</div>
            <div
                class="code"
                :class="{ selected: ele.isSelected }"
                ref="code"
                @contextmenu="showMenu(ele.id, $event)"
            >
                <Mixins
                    :ele="ele"
                    :htmlVisible="htmlVisible"
                    :cssVisible="cssVisible"
                    :jsVisible="jsVisible"
                ></Mixins>
            </div>
            <vue-context-menu
                :contextMenuData="contextMenuData"
                @selectThis="selectThis"
                @htmlView="htmlView"
                @cssView="cssView"
                @jsView="jsView"
                @delThis="delThis"
                :id="ele.id"
            ></vue-context-menu>
            <el-dialog
                title="html代码"
                :visible.sync="htmlVisible"
                custom-class="sourceStyle"
            >
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
                    language="markup"
                    readonly
                ></prism-editor>
            </el-dialog>
            <el-dialog
                title="css代码"
                :visible.sync="cssVisible"
                custom-class="sourceStyle"
            >
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
                    language="markup"
                    readonly
                ></prism-editor>
            </el-dialog>
            <el-dialog
                title="JavaScript代码"
                :visible.sync="jsVisible"
                custom-class="sourceStyle"
            >
                <el-button
                    plain
                    icon="el-icon-s-open"
                    size="mini"
                    v-clipboard:copy="copy('js')"
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
                    language="markup"
                    readonly
                ></prism-editor>
            </el-dialog>
        </div>
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

import { handle } from "../../../utils/handle";
import { utils } from "../../../utils/utils.js";
import Mixins from "./Mixins.js";

export default {
    name: Mixins.name,
    data() {
        return {
            isHover: false,
            thishtml: "",
            htmlVisible: false,
            cssVisible: false,
            jsVisible: false,
            contextMenuData: Mixins.contextMenuData,
        };
    },
    components: {
        Mixins,
        PrismEditor,
    },
    props: {
        ele: [Array, Object],
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
        js() {
            return Mixins.script;
        },
        source() {
            return {
                html: handle.reduceHTML(this.thishtml),
                css: handle.getCSS(this.ele),
                js: handle.getJS(this.ele),
            };
        },
    },
    methods: {
        ...Mixins.methods,
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
        }
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function() {
            _this.thishtml = _this.$refs.code.innerHTML;
            console.log(_this.html);
            _this.ele.html = $(_this.$refs.code)
                .children()
                .html();
            Function("_this", Mixins.script)(_this);
        });
    },
};
</script>
