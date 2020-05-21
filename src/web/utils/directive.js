import Vue from 'vue';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css' //样式文件
Vue.directive('highlight', {
  inserted (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  componentUpdated(el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
})