<template>
  <div class="Button">
    <div class="eg_button solid_gradient texture">提交</div>
    <div class="eg_button solid">提交</div>
    <div class="eg_button solid_gradient">提交</div>
    <div class="eg_button hollow">提交</div>
    <div class="eg_button hollow_gradient">提交</div>
    <div class="eg_button disabled">提交</div>

    <input type="text" v-model="widthval" />
    <input type="button" value="change" @click="go" />
    <textarea name="" id="" cols="30" rows="10" v-model="res"></textarea>

    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import './base.less'
  import {
    cssProcess
  } from '@/libs/utils.js'


  export default {
    name: 'fool_button',
    data() {
      return {
        widthval: document.styleSheets[2].cssRules[0].style.width,
        res: cssProcess.format(document.styleSheets[2].cssRules[0].cssText)
      }
    },
    methods: {
      go() {
        this.res = cssProcess.pack(document.styleSheets[2].cssRules[0].cssText)
      }
    },
    watch: {
      widthval: function (n, o) {
        document.styleSheets[2].cssRules[0].style.width = n;
        this.res = cssProcess.format(document.styleSheets[2].cssRules[0].cssText)
      },
    },
    mounted() {
      console.log();
    }
  }
</script>