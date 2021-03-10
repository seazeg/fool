<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-10 18:11:12
 * @Description  : 
-->
<template>
    <vdr
        :w="ele.zoomParams.width"
        :h="ele.zoomParams.height"
        :max-width="maxWidth"
        :max-height="maxHeight"
        :parent="true"
        :debug="false"
        :isConflictCheck="false"
        :snap="true"
        :snapTolerance="20"
        class="code"
        ref="code"
        :grid="[10, 10]"
        :x="ele.zoomParams.x"
        :y="ele.zoomParams.y"
        @refLineParams="getRefLineParams"
        @resizing="onResizing"
        @activated="onActivated"
        @contextmenu="showMenu(ele.id, $event)"
    >
        <pre v-html="style"></pre>
        <pre class="htmlCache">{{ thishtml }}</pre>

        <Mixins
            :ele="ele"
            :htmlVisible="htmlVisible"
            :cssVisible="cssVisible"
            :jsVisible="jsVisible"
        ></Mixins>
        <vue-context-menu
            :contextMenuData="contextMenuData"
            @selectThis="selectThis"
            @htmlView="htmlView"
            @cssView="cssView"
            @jsView="jsView"
            @delThis="delThis"
            :id="ele.id"
        ></vue-context-menu>
        <!-- <el-dialog
            title="html代码"
            :visible.sync="htmlVisible"
            custom-class="sourceStyle"
            @opened="dialogOpened"
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
            @opened="dialogOpened"
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
            @opened="dialogOpened"
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
        </el-dialog> -->
    </vdr>
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
import Mixins from "./Mixins.js";
import { fields } from "./fields.js";

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
        ...fields,
        ...Mixins.computed,
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
        dialogOpened() {
            this.$store.commit("Hope/SetResetFlag", true);
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
        onResizing(x, y, w, h) {
            this.width = w;
            this.height = h;
        },
        onActivated() {
            this.selectThis();
        },
        getRefLineParams(params) {
            this.$emit("refLineParams", params);
        },
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function () {
            try {
                _this.thishtml = _this.$refs.code.innerHTML;
                _this.ele.html = $(_this.$refs.code).children().html();

                _this.ele.controlObject = Function(
                    "_this",
                    Mixins.script(_this.ele)
                )(_this);
            } catch (error) {}
        });
    },
};
</script>
