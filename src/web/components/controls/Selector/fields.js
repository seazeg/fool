/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-01-21 15:12:22
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
                    ".hopeui-form-select"
                ],
                isDiff: "per",
            });
        },
    },
    height: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[
                    ".hopeui-form-select .hopeui-input"
                ].height || 38
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
                "line-height": value - 2,
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
                ]["font-size"] || "14px"
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
            return (
                this.$store.state.selected.styleSheet[
                    ".hopeui-form-select .hopeui-input"
                ].color
            );
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
            return (
                this.$store.state.selected.styleSheet[
                    ".hopeui-form-select .hopeui-select-list .option:hover"
                ].color
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hopeui-form-select .hopeui-select-list .option:hover",
                    ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this:hover",
                ],
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
                key: [
                    ".hopeui-form-select .hopeui-select-list .option:hover",
                    ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this:hover",
                ],
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
                ],
                isDiff: "same",
            });
        },
    },
};
