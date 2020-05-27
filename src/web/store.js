import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eles: [],
    sel: {
      name: '',
      style: {
        width: 200,
        height: 100,
        fontSize: 14
      }
    },
    list: []
  },
  mutations: {
    updateList(state, eles) {

      state.eles = eles
      console.log(state.eles);
    },
    updateList2(state, eles) {
      state.list = eles
    },
    selectEle(state, id) {
      for (let i of state.list) {
        if (i.id == id) {
          state.sel = i;
        }
      }
    },
    selectEle2(state, id) {

      for (let i of state.eles) {
        if (i.id == id) {
          state.sel = i;
        }
      }
      console.log('x',state.sel.style);
    },
    updateParam(state,o){
      console.log(state.sel.style.width);
      state.sel.style[Object.keys(o)[0]] = o[Object.keys(o)] + 'px'
    }

  },
  actions: {

  }
})