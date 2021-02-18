/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-02-18 13:57:56
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
    mode: {
        get() {
            return this.$store.state.selected.scriptParams.mode;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "mode",
                value: value,
            });
        },
    },
    zoom: {
        get() {
            return this.$store.state.selected.scriptParams.zoom;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "zoom",
                value: value,
            });
        },
    },
    zoomable: {
        get() {
            return this.$store.state.selected.scriptParams.zoomable;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "zoomable",
                value: value,
            });
        },
    },
};
