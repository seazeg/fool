<template>
    <div
        class="hope_grid theme-border"
        :class="ele.customClass"
        :custom-class="ele.customClass"
        @click.stop="choose"
        :style="Object.assign(this.ele.style, this.ele.layout)"
    >
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
