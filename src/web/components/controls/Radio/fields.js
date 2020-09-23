/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2020-09-23 10:55:25
 * @Description  :
 */
export const fields = {
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-form-radio *"][
                    "font-size"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [".hopeui-form-radio *"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value + 6,
                key: [".hopeui-form-radio i"],
                isDiff: "px",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-radio.hopeui-form-radio"
            ].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [".hopeui-form-radio.hopeui-form-radio"],
                isDiff: "same",
            });
        },
    },
    iconColor: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-form-radio i"]
                .color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [".hopeui-form-radio i"],
                isDiff: "same",
            });
        },
    },
    iconHoverSelectColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-radio.hopeui-form-radio > i:hover"
            ].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hopeui-form-radio.hopeui-form-radio > i:hover",
                    ".hopeui-form-radio.hopeui-form-radioed > i",
                ],
                isDiff: "same",
            });
        },
    },
};
