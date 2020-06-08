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
            for (let cls of state.controls) {
                cls.isSelected = false;
            }
        },
        "Hope/ControlsSelected": (state, eles) => {
            eles.isSelected = true;
          
        },
        "Hope/UpdateControls": (state, eles) => {
            state.eles = eles;
        },
        "Hope/ChooseControl": (state, id) => {
            for (let ele of state.controls) {
                if (ele.id == id) {
                    state.selected = ele;
                }
            }
        },
        "Hope/UpdateControlParams": (state, ele) => {
            switch (ele.isDiff) {
                case "px":
                    state.selected[ele.container][Object.keys(ele)[0]] =
                        ele[Object.keys(ele)[0]] + "px";
                    break;
                case "time":
                    state.selected[ele.container][Object.keys(ele)[0]] =
                        ele[Object.keys(ele)[0]] + "s";
                    break;
                case "same":
                    state.selected[ele.container][Object.keys(ele)[0]] =
                        ele[Object.keys(ele)[0]];
                    break;
                default:
                    break;
            }

            state.selected[ele.container] = _.cloneDeep(
                state.selected[ele.container]
            );

        },
    },
});
