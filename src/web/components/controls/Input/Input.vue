<template>
    <input
        type="text"
        class="hope_input"
        :class="ele.customClass"
        :custom-class="ele.customClass"
        :style="isFocus ? ele.effect : ele.style"
        @click.stop="choose"
        @focus.stop="focus"
        @blur.stop="blur"
        v-model="ele.name"
        :placeholder="ele.placeholder"
    >
    </input>
</template>

<script>
export default {
    name: "hope_input",
    data() {
        return {
            isFocus: false,
        }
    },
    props: {
        ele: [Array, Object],
    },
    methods: {
        choose() {
            this.$emit("choose", this.ele);
        },
        focus() {
            this.isFocus = true;
        },
        blur() {
            this.isFocus = false;
        },
    }
};
</script>
