/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2020-09-23 17:06:35
 * @Description  :
 */
export const fields = {
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[
                    ".hopeui-form-checkbox > span"
                ]["font-size"]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [".hopeui-form-checkbox > span"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": value + 2,
                key: [".hopeui-form-checkbox > span"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                width: value + 2,
                key: [".hopeui-form-checkbox > i"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                height: value + 2,
                key: [".hopeui-form-checkbox > i"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value - 4,
                key: [".hopeui-form-checked i"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": value,
                key: [".hopeui-form-checked i"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "min-width": value,
                key: [".hopeui-form-checked i"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "padding-left": value + 14,
                key: [".hopeui-form-checkbox"],
                isDiff: "px",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-checkbox > span"
            ].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [".hopeui-form-checkbox > span"],
                isDiff: "same",
            });
        },
    },
    iconColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-checkbox > i"
            ]["border-color"];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-form-checkbox > i"],
                isDiff: "same",
            });
        },
    },
    iconHoverSelectColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-checkbox:hover i"
            ]["border-color"];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value + "!important",
                key: [
                    ".hopeui-form-checkbox:hover i",
                    ".hopeui-form-checked i",
                ],
                isDiff: "same",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "background-color": value,
                key: [".hopeui-form-checked i"],
                isDiff: "same",
            });
        },
    },
};
