<template>
    <div
        class="hope_grid theme-border"
        :class="ele.customClass"
        :custom-class="ele.customClass"
        @click.stop="choose"
        :style="mergeStyle"
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
    computed: {
        mergeStyle() {
            return Object.assign(this.ele.style, this.ele.layout);
        },
        mergeEffect() {
            return Object.assign(this.ele.effect, this.ele.layout);
        },
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
    },
};
</script>
