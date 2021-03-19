/*
 * @Author       : Evan.G
 * @Date         : 2020-06-08 15:06:52
 * @LastEditTime : 2021-03-19 18:00:59
 * @Description  :
 */
import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import { utils } from "./utils/utils.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dragElement: {},
        controls: [],
        selected: {},
        dialogGridVisible: false,
        gridEle: {},
        resetFlag: true,
    },
    mutations: {
        "Hope/UpdateControlParams": (state, ele) => {
            let styleSheet = state.selected.styleSheet;
            let handler = (ele, isDiff) => {
                Object.keys(styleSheet).forEach(function(key) {
                    ele.key.forEach(function(item) {
                        if (key == item) {
                            Object.keys(styleSheet[key]).forEach(function(
                                line
                            ) {
                                if (line == Object.keys(ele)[0]) {
                                    styleSheet[key][line] =
                                        ele[Object.keys(ele)[0]] + isDiff;
                                } else {
                                    Vue.set(
                                        styleSheet[key],
                                        Object.keys(ele)[0],
                                        ele[Object.keys(ele)[0]] + isDiff
                                    );
                                }
                            });
                        }
                    });
                });
            };
            switch (ele.isDiff) {
                case "px":
                    handler(ele, "px");
                    break;
                case "time":
                    handler(ele, "s");
                    break;
                case "per":
                    handler(ele, "%");
                    break;
                case "same":
                    handler(ele, "");
                    break;
                default:
                    break;
            }
        },
        "Hope/UpdateControlJsOptions": (state, ele) => {
            try {
                let selectedControl = state.selected,
                    key = ele.key,
                    value = ele.value;
                selectedControl.scriptParams[key] = value;
                if (state.resetFlag) {
                    selectedControl.id = "hope_" + utils.getRandomName(6);
                }
                // selectedControl.key = "key_" + utils.getRandomName(6);
                selectedControl.controlObject = Function(
                    selectedControl.script(selectedControl)
                )();
            } catch (error) {}
        },
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
        "Hope/ControlsAddContainer": (state, eles) => {
            state.controls.push(eles);
        },
        "Hope/ChooseControl": (state, data) => {
            (function func(cls, data, state) {
                for (let ele of cls) {
                    if (ele.id == data.id) {
                        state.selected = ele;
                        ele.isSelected = true;
                        data.type
                            ? (state.resetFlag = false)
                            : (state.resetFlag = true);
                    } else {
                        if (ele.children) {
                            func(ele.children, data, state);
                        }
                    }
                }
            })(state.controls, data, state);
        },
        "Hope/RemoveControl": (state, id) => {
            (function func(cls, id, state) {
                cls.forEach(function(ele, i) {
                    if (ele.id == id) {
                        cls.splice(i, 1);
                    } else {
                        if (ele.children) {
                            func(ele.children, id, state);
                        }
                    }
                });
            })(state.controls, id, state);
        },
        "Hope/clearControlsList": (state) => {
            state.controls = [];
            state.selected = {};
        },
        "Hope/CopyControl": (state, id) => {
            (function func(cls, id, state) {
                cls.forEach(function(ele, i) {
                    if (ele.id == id) {
                        let newEle = _.cloneDeep(ele);
                        newEle.id = "hope_" + utils.getRandomName(6);
                        newEle.zoomParams.x = 10;
                        newEle.zoomParams.y = 10;
                        newEle.isSelected = false;
                        state.controls.push(newEle);
                        return;
                    } else {
                        if (ele.children) {
                            func(ele.children, id, state);
                        }
                    }
                });
            })(state.controls, id, state);
        },
        "Hope/LockControl": (state, id) => {
            (function func(cls, id, state) {
                cls.forEach(function(ele, i) {
                    if (ele.id == id) {
                        ele.zoomParams.draggable = !ele.zoomParams.draggable;
                    } else {
                        if (ele.children) {
                            func(ele.children, id, state);
                        }
                    }
                });
            })(state.controls, id, state);
        },
        "Hope/lockRatioControl": (state, id) => {
            (function func(cls, id, state) {
                cls.forEach(function(ele, i) {
                    if (ele.id == id) {
                        ele.zoomParams.lockAspectRatio = !ele.zoomParams
                            .lockAspectRatio;
                    } else {
                        if (ele.children) {
                            func(ele.children, id, state);
                        }
                    }
                });
            })(state.controls, id, state);
        },
        "Hope/stagingDragElement": (state, ele) => {
            state.dragElement = ele;
        },
    },
    getters: {
        getStagingDragElement: (state) => {
            return state.dragElement;
        },
    },
});
