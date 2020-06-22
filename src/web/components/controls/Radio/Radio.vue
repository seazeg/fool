<template>
    <div
        class="hope_radio"
        :class="ele.customClass"
        :custom-class="ele.customClass"
        @click.stop="choose"
        :style="isCLick ? ele.effect : ele.style"
    >
        <i class="iconfont icon-plus-unradio" :class="{'icon-plus-radio':isCLick}"></i>
        <span class="label">{{ ele.name }}</span>
    </div>
</template>

<script>
export default {
    name: "hope_radio",
    data() {
        return {
            isCLick: false,
        };
    },
    props: {
        ele: [Array, Object],
    },
    methods: {
        choose() {
            this.click();
            this.$emit("choose", this.ele);
        },
        click() {
            this.isCLick = !this.isCLick;
        },
    },
};
</script>
