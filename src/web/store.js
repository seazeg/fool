import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        controls: [],
        selected: {
            name: "",
            style: {
                width: 0,
                height: 0,
                fontSize: 0,
            },
        },
    },
    mutations: {
        "Hope/UpdateControls": (state, eles) => {
            state.eles = eles;
            console.log(state.eles);
        },
        "Hope/ChooseControl": (state, id) => {
            for (let ele of state.controls) {
                if (ele.id == id) {
                    state.selected = ele;
                }
            }
        },
        "Hope/UpdateControlParams": (state, ele) => {
            state.selected.style[Object.keys((ele))[0]] =
                ele[Object.keys(ele)] + "px";
            state.selected.style = _.cloneDeep(state.selected.style);
        },
    }
});
