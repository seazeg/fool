<style lang="less" scoped></style>
<template>
    <div class="hope_grid" @click="choose" :style="ele.style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "hope_grid",
    data() {
        return {
            isSlot: false,
        };
    },
    props: {
        ele: [Array, Object],
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
    },
};
</script>
