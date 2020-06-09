<template>
    <div class="layout-chooseBox" :class="{'selected':element.isSelected}" >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "chooseBox",
    props: {
        element:[Object,Array]
    }
};
</script>

<style></style>
