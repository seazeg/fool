<!--
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-11-12 15:27:15
 * @Description  : 
-->
<template>
    <div
        class="edit"
        v-if="
            Object.keys(selectedControl).length > 0 &&
                selectedControl.name.includes(controlsName)
        "
    >
        <!-- 基础属性 -->
        <el-tabs
            :tab-position="'right'"
            type="border-card"
            v-model="activeName"
            @tab-click=""
        >
            <el-tab-pane label="基础" name="first">
                <slot name="base"></slot>
            </el-tab-pane>
            <el-tab-pane label="布局" name="second">
                <slot name="layout"></slot>
            </el-tab-pane>
            <el-tab-pane label="效果" name="third">
                <slot name="effect"></slot>
            </el-tab-pane>
            <el-tab-pane label="其他" name="four">
                <slot name="other"></slot>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: "layout-editor",
    data() {
        return {
            activeName: "first",
        };
    },
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
