<template>
  <div class="Button">

    <input type="text" v-model="widthval" />
    <input type="button" value="change" @click="go" />
    <textarea name="" id="" cols="30" rows="10" v-model="res"></textarea>
  </div>
</template>

<script>
  // @ is an alias to /src
  import './base.less'
  import {
    cssProcess
  } from '@/utils/utils.js'


  export default {
    name: 'fool_selector',
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