/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-03-10 17:36:46
 * @Description  :
 */
export const fields = {
    width: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-btn"].width
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
            this.$store.state.selected.zoomParams.width = value;
        },
    },
    width_px: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-btn"].width
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
            this.$store.state.selected.zoomParams.width = value;
        },
    },
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
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": value,
                key: [".hopeui-btn"],
                isDiff: "px",
            });

            this.$store.state.selected.zoomParams.height = value;
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
    hoverBgColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-btn:hover"][
                "background-color" || ""
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "background-color": value || "",
                key: [".hopeui-btn:hover"],
                isDiff: "same",
            });
        },
    },
    bgOpacity: {
        get() {
            return parseFloat(this.$store.state.selected.styleSheet[".hopeui-btn:hover"]
            .opacity)
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                opacity: value,
                key: [".hopeui-btn:hover", ".hopeui-btn:active"],
                isDiff: "same",
            });
        },
    },
    borderRadius: {
        get() {
            return parseFloat(this.$store.state.selected.styleSheet[".hopeui-btn"]
            ['border-radius'] || 0)
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-radius": value,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
        },
    },
    borderWidth:{
        get() {
            return parseFloat(this.$store.state.selected.styleSheet[".hopeui-btn"]
            ['border-width'] || 0)
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-width": value,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": this.height - value * 2,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
        },
    },
    borderStyle:{
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-btn"]
            ['border-style'] || ''
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-style": value,
                key: [".hopeui-btn"],
                isDiff: "same",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": this.height - this.borderWidth * 2,
                key: [".hopeui-btn"],
                isDiff: "px",
            });
        },
    },
    borderColor:{
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-btn"]
            ['border-color'] || ''
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-btn"],
                isDiff: "same",
            });
        },
    }
};
