<template>
    <div
        class="hope_button"
        :class="ele.customClass"
        :custom-class="ele.customClass"
        @click.stop="choose"
        :style="isHover ? ele.effect : ele.style"
        @mouseenter.stop="enter"
        @mouseleave.stop="leave"
    >
        {{ ele.name }}
    </div>
</template>

<script>
export default {
    name: "hope_button",
    data() {
        return {
            isHover: false,
        };
    },
    props: {
        ele: [Array, Object],
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
        enter() {
            this.isHover = true;
        },
        leave() {
            this.isHover = false;
        },
    },
};
</script>
