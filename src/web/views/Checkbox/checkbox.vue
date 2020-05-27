<template>
  <div class="row">

    <h3>Draggable 2</h3>
    <draggable class="dragArea list-group" v-model="cps"  @change="log" @end="end()" @update="update()" :group="{ name: 'cps'}">

      <component :is="'g'+ ele.name" v-for="(ele,i) in cps" :key="i" :opt="ele.label" @get="get(ele)">

      </component>

    </draggable>



    <div class="edit" v-if="$store.state.eles.length>0">
      <!-- 基础属性 -->
      <div class="control_group_title">基础属性：</div>
      <div class="control_group" >
        <div class="box">
          <span class="field">按钮标题（buttonText）</span>
          <p>
            <el-input v-model="$store.state.eles[0].label" placeholder="请输入名称"></el-input>
          </p>
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
      }
    },
    methods: {
      log: function (evt) {
        console.log(evt);
        console.log('x',this.cps);

      },
      get(e) {
        this.ck = e.id;
        console.log(e);
      },
      end(e) {
        console.log(e);
      },
      update(){
        console.log('update');
      }
    }
  };
</script>
<style scoped></style>