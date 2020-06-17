<template>
    <div
        class="hope_imager"
        :custom-class="ele.customClass"
        @click.stop="choose"
        @mouseenter.stop="enter"
        @mouseleave.stop="leave"
    >
        <img
            :src="ele.src"
            :class="ele.customClass"
            :style="isHover ? ele.effect : ele.style"
            :alt="ele.name"
        />
    </div>
</template>

<script>
export default {
    name: "hope_imager",
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
