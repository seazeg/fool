/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-02-08 15:23:34
 * @Description  :
 */
export const fields = {
    width: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-pager > span"][
                    "padding-left"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "padding-left": value,
                key: [
                    ".hopeui-pager > span",
                    ".hopeui-pager .hopeui-pager-omit",
                    ".hopeui-pager .hopeui-pager-jump button",
                ],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "padding-right": value,
                key: [
                    ".hopeui-pager > span",
                    ".hopeui-pager .hopeui-pager-omit",
                    ".hopeui-pager .hopeui-pager-jump button",
                ],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                width: value * 2 + this.fontSize,
                key: [".hopeui-pager .hopeui-pager-jump input"],
                isDiff: "px",
            });
        },
    },
    height: {
        get() {
            return parseFloat(
                this.$store.state.selected.styleSheet[".hopeui-pager > span"]
                    .height
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                key: [
                    ".hopeui-pager > span",
                    ".hopeui-pager .hopeui-pager-omit",
                    ".hopeui-pager .hopeui-pager-jump",
                    ".hopeui-pager .hopeui-pager-jump button",
                    ".hopeui-pager .hopeui-pager-jump input",
                ],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": value - 2,
                key: [
                    ".hopeui-pager > span",
                    ".hopeui-pager .hopeui-pager-omit",
                    ".hopeui-pager .hopeui-pager-jump",
                    ".hopeui-pager .hopeui-pager-jump button",
                    ".hopeui-pager .hopeui-pager-jump input",
                ],
                isDiff: "px",
            });
        },
    },
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hopeui-pager > span"][
                    "font-size"
                ]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [
                    ".hopeui-pager > span",
                    ".hopeui-pager .hopeui-pager-omit",
                    ".hopeui-pager .hopeui-pager-jump",
                    ".hopeui-pager .hopeui-pager-jump button",
                    ".hopeui-pager .hopeui-pager-jump input",
                    ".hopeui-pager .hopeui-pager-count"
                ],
                isDiff: "px",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.styleSheet[".hopeui-pager > span"].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hopeui-pager > span",
                    ".hopeui-pager .hopeui-pager-omit",
                    ".hopeui-pager .hopeui-pager-jump",
                    ".hopeui-pager .hopeui-pager-jump button",
                    ".hopeui-pager .hopeui-pager-count"
                ],
                isDiff: "same",
            });
        },
    },
    borderColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-pager > span"
            ]["border-color"];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [
                    ".hopeui-pager > span",
                    ".hopeui-pager .hopeui-pager-omit",
                    ".hopeui-pager .hopeui-pager-jump",
                    ".hopeui-pager .hopeui-pager-jump button",
                ],
                isDiff: "same",
            });
        },
    },
    hoverColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-pager span:hover"
            ].color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [".hopeui-pager span:hover"],
                isDiff: "same",
            });
        },
    },
    selectColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-pager .hopeui-pager-cur"
            ]["background-color"];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "background-color": value,
                key: [".hopeui-pager .hopeui-pager-cur"],
                isDiff: "same",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "border-color": value,
                key: [".hopeui-pager .hopeui-pager-cur"],
                isDiff: "same",
            });
        },
    },
    omit: {
        get() {
            return this.$store.state.selected.scriptParams.omit;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "omit",
                value: value,
            });
        },
    },
    prevName: {
        get() {
            return this.$store.state.selected.scriptParams.prevName;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "prevName",
                value: value,
            });
        },
    },
    nextName: {
        get() {
            return this.$store.state.selected.scriptParams.nextName;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "nextName",
                value: value,
            });
        },
    },
    extend: {
        get() {
            return this.$store.state.selected.scriptParams.extend;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "extend",
                value: value,
            });
        },
    }    
};
