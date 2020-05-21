<template>
  <div id="app">

    <el-container>
      <el-aside>
        <div class="hope_info">
          <div class="logo">
            HOPE·UI
          </div>
        </div>
        <div class="menu_list">
          <div class="box" v-for="item in menu" @click="goPage(item.url)">
            <svg class="icon" aria-hidden="true" v-html="item.icon"></svg>
            <span>{{item.name}}</span>
          </div>
          <!-- <span class="el-icon-iconName el-icon-d-arrow-left" @click="prev"></span>
          <span class="el-icon-iconName el-icon-d-arrow-right" @click="next"></span> -->
        </div>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <transition enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX">
            <navigation>
              <router-view />
            </navigation>
          </transition>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        menu: [{
          name: '按钮(Button)',
          icon: '<use xlink:href="#icon-anniu"></use>',
          url: '/button'
        }, {
          name: '下拉框(Selector)',
          icon: '<use xlink:href="#icon-jilianxuanze"></use>',
          url: '/selector'
        }, {
          name: '复选框(Checkbox)',
          icon: '<use xlink:href="#icon-fuxuankuang"></use>',
          url: 'button'
        }, {
          name: '单选框(Radio)',
          icon: ' <use xlink:href="#icon-danxuankuang"></use>',
          url: 'button'
        }, {
          name: '输入框(Input)',
          icon: '<use xlink:href="#icon-shurukuang"></use>',
          url: 'button'
        }, {
          name: '表格(Table)',
          icon: '<use xlink:href="#icon-biaoge"></use>',
          url: 'button'
        }]
      }
    },
    methods: {
      goPage(url) {
        let _this = this;
        _this.$router.push({
          path: url
        })
      },
      prev() {
        let _this = this;
        let routerList = _this.$router.options.routes
        routerList.forEach((item, index) => {
          if (item.name == _this.$route.name) {
            if (routerList[index - 1]) {
              history.go(-1)
            }
          }
        });

      },
      next() {
        let _this = this;
        let routerList = _this.$router.options.routes
        routerList.forEach((item, index) => {
          if (item.name == _this.$route.name) {
            if (routerList[index + 1]) {
              _this.$router.push({
                path: routerList[index + 1].path
              })
            }
          }
        });
      }
    },
    created() {
      this.$navigation.on('forward', (to, from) => {
        this.transition = 'slide-top'
      })
      this.$navigation.on('back', (to, from) => {
        this.transition = 'slide-bottom'
      })
    }
  }
</script>