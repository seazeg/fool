<template>
  <div id="app">

    <el-container>
      <el-aside width="200px">
        <div class="sys_arrow_box">
          <span class="el-icon-iconName el-icon-d-arrow-left" @click="prev"></span>
          <span class="el-icon-iconName el-icon-d-arrow-right" @click="next"></span>
        </div>
      </el-aside>
      <el-container>
        <!-- <el-header>Header</el-header> -->
        <el-main>
          <div class="sys_arrow_box">
            <transition :name='transition'>
              <navigation>
                <router-view />
              </navigation>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>
<script>
  export default {
    name: 'app',
    methods: {
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
