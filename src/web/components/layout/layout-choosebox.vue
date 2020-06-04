<template>
    <div class="layout-chooseBox" :class="{'selected':element.isSelected}" @click="choose()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "chooseBox",
    props: {
        element:[Object,Array]
    },
    methods: {
        choose(){
            this.$store.commit('Hope/ResetControlSelected')
            this.$store.commit('Hope/ControlsSelected',this.element)
            console.log(this.$store.state.controls);
        }
    }
};
</script>

<style></style>
