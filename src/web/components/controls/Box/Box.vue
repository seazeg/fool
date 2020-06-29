<template>
    <div
        class="hope_box theme-border"
        :class="ele.customClass"
        :custom-class="ele.customClass"
        @click.stop="choose"
        :style="ele.style"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "hope_box",
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
