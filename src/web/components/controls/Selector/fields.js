/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2020-09-15 15:11:34
 * @Description  :
 */
export const fields = {
    width: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-form-select"]
                    .width
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                key: [
                    ".hopeui-form-select",
                    ".hopeui-form-select .hopeui-input",
                    ".hopeui-form-select .hopeui-select-list",
                ],
                isDiff: "px",
            });
        },
    },
    height: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[
                    ".hopeui-form-select .hopeui-input"
                ].height
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                key: [".hopeui-form-select .hopeui-input"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                top: value + 1,
                key: [".hopeui-form-select .hopeui-select-list"],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                'line-height': value - 2,
                key: [".hopeui-form-select .hopeui-select-list .option"],
                isDiff: "px",
            });
        },
    },
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[
                    ".hopeui-form-select .hopeui-input"
                ]["font-size"]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [
                    ".hopeui-form-select .hopeui-input",
                    ".hopeui-form-select .hopeui-select-list .option",
                ],
                isDiff: "px",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-select .hopeui-input"
            ].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hopeui-form-select .hopeui-input",
                    ".hopeui-form-select .hopeui-select-list .option",
                    "input::-webkit-input-placeholder",
                    "input::-moz-placeholder",
                    "input::-ms-input-placeholder",
                ],
                isDiff: "same",
            });
        },
    },
    hoverColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-select .hopeui-select-list .option:hover"
            ].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [".hopeui-form-select .hopeui-select-list .option:hover"],
                isDiff: "same",
            });
        },
    },
    hoverBg: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-select .hopeui-select-list .option:hover"
            ]["background-color"];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "background-color": value,
                key: [".hopeui-form-select .hopeui-select-list .option:hover"],
                isDiff: "same",
            });
        },
    },
    selectColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this"
            ].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this",
                    ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this:hover",
                ],
                isDiff: "same",
            });
        },
    },
    selectBg: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this"
            ]["background-color"];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "background-color": value,
                key: [
                    ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this",
                    ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this:hover",
                ],
                isDiff: "same",
            });
        },
    },
};
