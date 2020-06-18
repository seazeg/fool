<template>
    <input
        type="text"
        class="hope_input"
        :class="ele.customClass"
        :custom-class="ele.customClass"
        :style="isFocus ? mergeEffect : mergeStyle"
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
    computed: {
        mergeStyle(){
            return  Object.assign(this.ele.style, this.ele.layout)
        },
        mergeEffect(){
            return  Object.assign(this.ele.style, this.ele.layout)
        }
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
