<template>
    <div class="wrapper">
        <!-- 视图 -->
        <div class="view">
            <el-tabs v-model="tabChecked" type="border-card">
                <el-tab-pane name="preview">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-yulan"></i>preview</span
                    >
                    <div class="view-box preview" ref="preview">
                        <layout-draggable
                            :controls="controls"
                        ></layout-draggable>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="html">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-html"></i>html</span
                    >
                    <button
                        type="button"
                        class="autoCopy"
                        v-clipboard:copy="source.html"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                    >
                        Copy
                    </button>
                    <div class="view-box html" v-highlight>
                        <pre>
                            <code v-text="source.html">
                            </code>
                        </pre>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="css">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-css"></i>css</span
                    >
                    <button
                        type="button"
                        class="autoCopy"
                        v-clipboard:copy="source.css"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                    >
                        Copy
                    </button>
                    <div class="view-box css" v-highlight>
                        <pre>
                            <code v-html="source.css">
                            </code>
                        </pre>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="javascript">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-js"></i>javascript</span
                    >
                    <div class="view-box js" v-highlight>
                        <!-- <pre>
              <code v-html="workarea.js">
              </code>
            </pre> -->
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <ButtonEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
        ></ButtonEditor>
        <GridEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
        ></GridEditor>
          <InputEditor
            :animationOption="animationOption"
            :borderStyleOption="borderStyleOption"
        ></InputEditor>
    </div>
</template>
<script>
import { handle } from "../../utils/handle.js";
export default {
    name: "layout-editor",
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
    },
    methods: {
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
    },
    updated() {
        this.source.html = handle.reduceHTML(this.$refs.preview.innerHTML);
        this.source.css = handle.pullCSS(this.$refs.preview.innerHTML);
    },
};
</script>
