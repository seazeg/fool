<template>
    <div class="eg_button" @click="get()" :style="opt.style">{{opt.label}}</div>
</template>

<script>
    export default {
        name: 'gbutton',
        props:{
            opt:[Array,Object]
        },
        methods:{
            get(){
                this.$emit('get',this.opt)
            }
        },
        mounted() {
            console.log(this.opt.style);
        },
        update(){
             console.log(this.opt.style);
        }
    }
</script>

<style>

</style>