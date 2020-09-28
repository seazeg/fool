/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2020-09-28 15:33:31
 * @Description  :
 */
export const fields = {
    width: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-textarea"].width
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                key: [".hopeui-textarea"],
                isDiff: "px",
            });
        },
    },
    height: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-textarea"].height
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                key: [".hopeui-textarea"],
                isDiff: "px",
            });
        },
    },
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-textarea"][
                    "font-size"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [".hopeui-textarea"],
                isDiff: "px",
            });
        },
    },
    borderRadius: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-textarea"][
                    "border-radius"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-radius": value,
                key: [".hopeui-textarea"],
                isDiff: "px",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-textarea"].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hopeui-textarea",
                    "textarea::-webkit-input-placeholder",
                    "textarea::-moz-placeholder",
                    "textarea::-ms-input-placeholder",
                ],
                isDiff: "same",
            });
        },
    },
    borderColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-textarea"][
                "border-color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [
                    ".hopeui-textarea"
                ],
                isDiff: "same",
            });
        },
    },
    hoverBorderColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-textarea:hover"][
                "border-color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-textarea:hover"],
                isDiff: "same",
            });
        },
    },
    focusBorderColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-textarea:focus"][
                "border-color"
            ];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-textarea:focus"],
                isDiff: "same",
            });
        },
    },
};
