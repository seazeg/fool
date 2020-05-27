<template>
  <div class="layout-sidetools">
    <span class="operate iconfont icon-youshuangjiantou"></span>
    <!-- <div class="group"> -->
    <draggable class="group" :list="cps" :group="{ name: 'cps', pull: 'clone', put: false }" @change="log" >
      <div class="box" v-for="(ele,i) in cps" :key="i" :alt="ele.label">
        <a class="iconfont" :class="ele.icon" @click="goPage(ele)" >
          {{ele.label}}
        </a>
      </div>
    </draggable>


    <!-- </div> -->
  </div>
</template>
<script>
  import {
    navInfo
  } from '../../router.js'
  export default {
    name: "layout-sidetools",
    data() {
      return{
        cps: [{
        name: 'button',
        icon: 'icon-anniu',
        label: 'Button'
      }]
      }
    },
    methods: {
      goPage(obj) {
        this.$router.replace({
          path: obj.path,
        })
      },
      log(e) {
        console.log(222222222222);
        // console.log(e);
      }
    },
    mounted() {

    }
  }
</script>