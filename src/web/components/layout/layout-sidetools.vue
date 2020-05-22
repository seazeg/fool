<template>
  <div class="layout-sidetools">
    <span class="operate iconfont icon-youshuangjiantou"></span>
    <div class="group">
      <div class="box" v-for="item in navInfo" :class="{'checked':$route.name==item.meta.lname}">
        <a class="iconfont" :class="item.meta.icon" @click="goPage(item)">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    navInfo
  } from '../../router.js'
  console.log(navInfo);
  export default {
    name: "layout-sidetools",
    data() {
      return {
        navInfo: navInfo
      }
    },
    methods: {
      goPage(obj) {
        this.$router.replace({
          path: obj.path,
        })
      }
    },
    mounted() {

    }
  }
</script>