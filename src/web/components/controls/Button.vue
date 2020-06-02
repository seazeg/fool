<template>
    <div
        class="hope_button"
        @click="choose"
        :style="isHover ? ele.effect : ele.style"
        @mouseenter="enter"
        @mouseleave="leave"
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
