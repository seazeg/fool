<template>
    <div class="wrapper">
        <!-- 视图 -->
        <div class="view">
            <el-tabs v-model="tabChecked" type="border-card">
                <el-tab-pane name="preview">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-yulan"></i>preview</span
                    >
                    <draggable
                        class="view-box preview"
                        id="preview"
                        :list="controls"
                        :group="{ name: 'controls' }"
                    >
                        <component
                            :is="ele.label"
                            v-for="(ele, i) in controls"
                            :key="i"
                            :ele="ele"
                            @choose="choose(ele)"
                        >
                        </component>
                    </draggable>
                </el-tab-pane>
                <el-tab-pane name="html">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-html"></i>html</span
                    >
                    <div class="view-box html" v-highlight>
                        <!-- <pre>
                        <code v-text="workarea.html">
                        </code>
                        </pre> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane name="css">
                    <span slot="label" class="lab-icon">
                        <i class="iconfont icon-css"></i>css</span
                    >
                    <div class="view-box css" v-highlight>
                        <!-- <pre>
              <code v-html="workarea.css">
              </code>
            </pre> -->
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

        <div class="edit">
            <!-- 基础属性 -->
            <div class="control_group_title">基础属性：</div>
            <div class="control_group">
                <div class="box">
                    <span class="field">按钮标题（buttonText）</span>
                    <p>
                        <el-input
                            v-model="$store.state.selected.name"
                            placeholder="请输入名称"
                        ></el-input>
                    </p>
                </div>
            </div>
            <div class="control_group_title">基础样式：</div>
            <div class="control_group">
                <div class="box">
                    <span class="field">宽度（width）</span>
                    <p>
                        <el-slider
                            v-model="width"
                            :min="100"
                            :max="500"
                            show-input
                        ></el-slider>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "layout-view",
    display: "Clone",
    order: 2,
    data() {
        return {
            tabChecked: "preview",
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
        width: {
            get() {
                return parseInt(this.$store.state.selected.style.width);
            },
            set(value) {
                this.$store.commit("Hope/UpdateControlParams", {
                    width: value,
                });
            },
        },
    },
    methods: {
        choose(e) {
            this.$store.commit("Hope/ChooseControl", e.id);
        },
    },
};
</script>
