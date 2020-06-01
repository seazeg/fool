import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        controls: [],
        selected: {},
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
            if (ele.isDiff) {
                state.selected[ele.container][Object.keys(ele)[0]] =
                    ele[Object.keys(ele)[0]] + "px";
            } else {
                state.selected[ele.container][Object.keys(ele)[0]] =
                    ele[Object.keys(ele)[0]];
            }
            state.selected[ele.container] = _.cloneDeep(state.selected[ele.container]);
        },
    },
});
