<template>
  <div class="dragDemo">
    <!--列表1-->
    <draggable class="list-group" element="div" :list="listLeft" :options="dragOptions1" :move="onMove"
      @start="isDragging=true" @end="isDragging=false" :clone="cloneDog">
      <div v-for="(item,key) in listLeft" :key="key">
        <img src="http://oss.shangmian.xin/ciBm3U1544694909000?imageslim">
        {{item.name}}-{{item.value}}
      </div>
    </draggable>
    <!--列表2-->
    <draggable class="list-group" element="div" :list="listRight" :options="dragOptions2" :move="onMove"
      @start="isDragging=true" @end="isDragging=false" @change="log">
      <div v-for="(item,key) in listRight" :key="key"  @click="fuck(item.id)">
        <img src="http://oss.shangmian.xin/ciBm3U1544694909000?imageslim">
        <input type="text" v-model="item.name" >
      </div>
    </draggable>
    <input type="text" v-model="$store.state.sel.name">
  </div>
</template>

<script>
  import draggable from "vuedraggable";

  export default {
    name: 'dragDemo',
    components: {
      draggable
    },
    data() {
      return {
        isDragging: false,
        listLeft: [{
          name: '数据一',
          value: '1'
        }, {
          name: '数据二',
          value: '2'
        }, {
          name: '数据三',
          value: '3'
        }, {
          name: '数据四',
          value: '4'
        }, {
          name: '数据五',
          value: '5'
        }],
        // listRight: [],
      }
    },
    computed: {
      listRight: {
        get() {
          return this.$store.state.list
        },
        set(value) {
          // this.$set(value,'id',Math.random()*100)
          this.$store.commit('updateList2', value)
        }
      },
      dragOptions1() {
        return {
          animation: 0,
          group: {
            name: "description",
            pull: 'clone',
            put: false,
  
          },
                    sort:false,
          ghostClass: "ghost",
        };
      },
      dragOptions2() {
        return {
          animation: 0,
          group: "description",
        };
      }
    },
    methods: {
      cloneDog(o) {
        return {
          id: this.$set(o,'id',Math.random()*100),
          name: o.name + 'xx',
          value:o.value
        };
      },
      log(e) {
        console.log(e);
      },
      onMove({
        relatedContext,
        draggedContext
      }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
          (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
      },
      fuck(id){
    
        this.$store.commit('selectEle',id);
      }
    
    }
  }
</script>

<style scoped lang="less">
  .dragDemo {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    color: #555;

    .list-group {
      width: 300px;
      border: 1px solid #ddd;
      text-align: center;
      margin-right: 50px;

      >div {
        padding: 10px;
        border-bottom: 1px dashed #ddd;

        img {
          width: 25px;
          height: 25px;
          vertical-align: middle;
          padding-right: 10px;
        }
      }
    }
  }
</style>