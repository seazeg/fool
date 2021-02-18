<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-18 17:45:04
 * @Description  : 
-->
<template>
    <div class="edit" v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.name.includes(controlsName)
        ">
        <!-- 基础属性 -->
        <el-tabs :tab-position="'right'" type="border-card" v-model="Object.keys(this.$store.state.selected.includes)[0]">
            <el-tab-pane label="样式" name="base" v-if="selectedControl.includes.base">
                <slot name="base">
                    <span class="no-config">
                        无任何可配置项
                    </span>
                </slot>
            </el-tab-pane>
            <!-- <el-tab-pane label="布局" name="second">
                <slot name="layout"></slot>
            </el-tab-pane> -->
            <el-tab-pane label="动效" name="effect" v-if="selectedControl.includes.effect">
                <slot name="effect">
                    <span class="no-config">
                        无任何可配置项
                    </span>
                </slot>
            </el-tab-pane>
            <el-tab-pane label="选项" name="options" v-if="selectedControl.includes.options">
                <slot name="options">
                    <span class="no-config">
                        无任何可配置项
                    </span>
                </slot>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "layout-editor",
        props: {
            controlsName: [String],
        },
        computed: {
            selectedControl() {
                return this.$store.state.selected;
            },
        },
        methods: {
            visualNodeRemove() {
                this.$confirm("确定删除当前节点？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "info",
                    })
                    .then(() => {
                        this.$store.commit(
                            "Hope/RemoveControl",
                            this.selectedControl.id
                        );
                        this.$store.state.selected = {};
                    })
                    .catch(() => {});
            },
        },
    };
</script>