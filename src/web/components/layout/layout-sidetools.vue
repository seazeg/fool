<template>
  <div class="layout-sidetools">
    <span class="operate iconfont icon-youshuangjiantou"></span>
    <!-- <div class="group"> -->
    <draggable class="group" :list="cps" :group="{ name: 'cps', pull: 'clone', put: false }" @change="log"
      :clone="cloneDog">
      <div class="box" v-for="(ele,i) in cps" :key="i" :alt="ele.label">
        <a class="iconfont" :class="ele.icon" @click="goPage(ele)">
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
      return {
        cps: [{
          name: 'button',
          icon: 'icon-anniu',
          label: 'Button',
          style: {
            width: '200px',
            height: '50px',
            fontSize: '14px'
          }
        }]
      }
    },
    methods: {
      cloneDog(o) {
        console.log('clone',o);
        return {
          id: this.$set(o, 'id', Math.random() * 100),
          ...o
        };
      },
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