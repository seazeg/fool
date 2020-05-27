<template>
    <div class="eg_button" @click="get()">{{opt}}</div>
</template>

<script>
    export default {
        name: 'gbutton',
        props:{
            opt:[String,Number]
        },
        methods:{
            get(){
                this.$emit('get',this.opt)
            }
        }
    }
</script>

<style>

</style>