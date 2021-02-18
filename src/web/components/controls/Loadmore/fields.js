/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-02-18 14:32:41
 * @Description  :
 */
export const fields = {
    height: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-btn"].height
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
        },
    },
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-btn"][
                    "font-size"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-btn"].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [".hopeui-btn"],
                isDiff: "same",
            });
        },
    },
    bgColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-btn"][
                "background-color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "background-color": value,
                key: [".hopeui-btn"],
                isDiff: "same",
            });
        },
    },
    hoverColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-btn:hover"][
                "color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [".hopeui-btn:hover"],
                isDiff: "same",
            });
        },
    },
    loadBtnName: {
        get() {
            return this.$store.state.selected.scriptParams.loadBtnName;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "loadBtnName",
                value: value,
            });
        },
    },
    offset: {
        get() {
            return this.$store.state.selected.scriptParams.offset;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "offset",
                value: value,
            });
        },
    },
    autoLoad: {
        get() {
            return this.$store.state.selected.scriptParams.autoLoad;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "autoLoad",
                value: value,
            });
        },
    },
};
