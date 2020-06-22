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
        "Hope/ResetControlSelected": (state, eles) => {
            (function func(cls, state) {
                for (let ele of cls) {
                    if (ele.isSelected) {
                        ele.isSelected = false;
                    } else {
                        if (ele.children) {
                            func(ele.children, state);
                        }
                    }
                }
            })(state.controls, state);
        },
        "Hope/ControlsSelected": (state, eles) => {
            eles.isSelected = true;
        },
        "Hope/UpdateControls": (state, eles) => {
            state.eles = eles;
        },
        "Hope/ChooseControl": (state, id) => {
            (function func(cls, id, state) {
                for (let ele of cls) {
                    if (ele.id == id) {
                        state.selected = ele;
                        ele.isSelected = true;
                    } else {
                        if (ele.children) {
                            func(ele.children, id, state);
                        }
                    }
                }
            })(state.controls, id, state);
            console.log(state.selected);
        },
        "Hope/UpdateControlParams": (state, ele) => {
            if (Object.keys(ele)[0] == ele.container) {
                state.selected[ele.container] = ele[Object.keys(ele)[0]];
            } else {
                switch (ele.isDiff) {
                    case "px":
                        state.selected[ele.container][Object.keys(ele)[0]] =
                            ele[Object.keys(ele)[0]] + "px";
                        break;
                    case "time":
                        state.selected[ele.container][Object.keys(ele)[0]] =
                            ele[Object.keys(ele)[0]] + "s";
                        break;
                    case "per":
                        state.selected[ele.container][Object.keys(ele)[0]] =
                            ele[Object.keys(ele)[0]] + "%";
                        break;
                    case "same":
                        state.selected[ele.container][Object.keys(ele)[0]] =
                            ele[Object.keys(ele)[0]];
                        break;
                    default:
                        break;
                }
            }
            state.selected[ele.container] = _.cloneDeep(
                state.selected[ele.container]
            );
        },
    },
});
