/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-02-18 14:59:04
 * @Description  :
 */
export const fields = {
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[
                    ".hope-datepicker .day ul li"
                ]["font-size"]
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [
                    ".hope-datepicker .day ul li",
                    ".hope-datepicker .year-month .year span",
                    ".hope-datepicker .month-list ul li",
                    ".hope-datepicker .year-list ul li",
                    ".hope-datepicker .time-list .warp p",
                    ".hope-datepicker .time-list .warp .item",
                    ".hope-datepicker .time-list .group .return",
                    ".hope-datepicker .year-month span",
                    ".hope-datepicker .action span.selectTime",
                    ".hope-datepicker .action button"
                ],
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
    format: {
        get() {
            return this.$store.state.selected.scriptParams.format;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "format",
                value: value,
            });
        },
    },
    type: {
        get() {
            return this.$store.state.selected.scriptParams.type;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "type",
                value: value,
            });
        },
    },
};
