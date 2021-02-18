/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-02-18 16:36:42
 * @Description  :
 */
export const fields = {
    bgColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-zoom-lens"][
                "background"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                background: value,
                key: [".hopeui-zoom-lens"],
                isDiff: "same",
            });
        },
    },
    bgOpacity: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-zoom-lens"][
                    "opacity"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                opacity: value,
                key: [".hopeui-zoom-lens"],
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
