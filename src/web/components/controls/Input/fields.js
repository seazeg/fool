/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-01-26 14:51:50
 * @Description  :
 */
export const fields = {
    width: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-input"].width
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                key: [".hopeui-input"],
                isDiff: "per",
            });
        },
    },
    height: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-input"].height
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                key: [".hopeui-input"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": value - 2,
                key: [".hopeui-input"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": value - 2,
                key: [".hopeui-placeholder"],
                isDiff: "px",
            });
        },
    },
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-input"][
                    "font-size"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [".hopeui-input"],
                isDiff: "px",
            });
        },
    },
    borderRadius: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-input"][
                    "border-radius"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-radius": value,
                key: [".hopeui-input"],
                isDiff: "px",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-input"].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hopeui-input",
                    ".hopeui-placeholder",
                    "input::-webkit-input-placeholder",
                    "input::-moz-placeholder",
                    "input::-ms-input-placeholder",
                ],
                isDiff: "same",
            });
        },
    },
    borderColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-input"][
                "border-color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-input"],
                isDiff: "same",
            });
        },
    },
    hoverBorderColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-input:hover"][
                "border-color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-input:hover"],
                isDiff: "same",
            });
        },
    },
    focusBorderColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-input:focus"][
                "border-color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-input:focus"],
                isDiff: "same",
            });
        },
    },
    extendContent: {
        get() {
            return this.$store.state.selected.scriptParams.extendContent;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "extendContent",
                value: value,
            });
        },
    },
    extendContentLocation: {
        get() {
            return this.$store.state.selected.scriptParams.extendContentLocation;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "extendContentLocation",
                value: value,
            });
        },
    },
};
