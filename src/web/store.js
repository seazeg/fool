import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eles: [],
    sel:{
      name: ''
    },
    list:[]
  },
  mutations: {
    updateList(state, eles) {

      state.eles = eles
      console.log( state.eles);
    },
    updateList2(state, eles) {
      state.list = eles
    },
    selectEle(state,id){
       for(let i of state.list){
         if(i.id == id){
           state.sel = i;
         }
       }
    }
    
  },
  actions: {

  }
})