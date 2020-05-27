<template>
  <div class="row">

    <h3>Draggable 2</h3>
    <draggable class="dragArea list-group" :list="cps" @change="log" @end="end()" @update="update()"
      :group="{ name: 'cps'}">

      <component :is="'g'+ ele.name" v-for="(ele,i) in cps" :key="i" :opt="ele" @get="get(ele)">

      </component>

    </draggable>



    <div class="edit" v-if="$store.state.eles.length>0">
      <!-- 基础属性 -->
      <div class="control_group_title">基础属性：</div>
      <div class="control_group">
        <div class="box">
          <span class="field">按钮标题（buttonText）</span>
          <p>
            <el-input v-model="$store.state.sel.label" placeholder="请输入名称"></el-input>
          </p>
        </div>
      </div>

      <div class="control_group_title">基础样式：</div>
      <div class="control_group">
        <div class="box">
          <span class="field">宽度（width）</span>
          <p>
            <el-slider v-model="width" :min="100" :max="500" show-input></el-slider>
          </p>
        </div>
        <!-- <div class="box">
          <span class="field">高度（height）</span>
          <p>
            <el-slider v-model="height" :min="40" :max="500" show-input></el-slider>
          </p>
        </div>
        <div class="box">
          <span class="field">字号（fontSize）</span>
          <p>
            <el-slider v-model="fontSize" :max="50" show-input></el-slider>
          </p>
        </div> -->

      </div>
    </div>

  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "clone",
    display: "Clone",
    order: 2,
    data() {
      return {
        ck: ''
      };
    },
    computed: {
      cps: {
        get() {
          return this.$store.state.eles
        },
        set(value) {

          this.$store.commit('updateList', value)
        }
      },
      width:{
        get() {
          console.log(this.$store.state.sel.id);
          return parseInt(this.$store.state.sel.style.width)
        },
        set(value) {
          
          this.$store.commit('updateParam', {'width':value})
        }
       
      },

      
      // height:{
      //    get() {
      //     return parseInt(this.$store.state.sel.style.height)
      //   },
      //    set(value) {
      //     this.$store.commit('update', {'height':value})
      //   }
      // },
      // fontSize:{
      //     get() {
      //     return parseInt(this.$store.state.sel.style.fontSize)
      //   },
      //    set(value) {
      //     this.$store.commit('update', {'fontSize':value})
      //   }
      // }
    },
    methods: {
      cloneDog(o) {
      
        console.log('oo',o);
        return {
          id: this.$set(o, 'id', Math.random() * 100),
          ...o
        };
      },
      log: function (evt) {
        console.log(evt);
        console.log('x', this.cps);

      },
      get(e) {

        this.$store.commit('selectEle2', e.id);
      },
      end(e) {
        console.log(e);
      },
      update() {
        console.log('update');
      }
    }
  };
</script>
<style scoped></style>