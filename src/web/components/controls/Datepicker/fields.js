/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-02-19 16:11:02
 * @Description  :
 */
export const fields = {
    winSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[".hope-datepicker"].width
            );
        },
        set(value) {
            //主窗口宽度
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                key: [".hope-datepicker"],
                isDiff: "px",
            });
            //数格的宽，高，行高
            this.$store.commit("Hope/UpdateControlParams", {
                width: (value - 20) / 7,
                key: [
                    ".hope-datepicker .day ul li",
                    ".hope-datepicker .week ul li",
                    ".hope-datepicker .year-month .left",
                    ".hope-datepicker .year-month .right",
                ],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                height: (value - 20) / 7,
                key: [
                    ".hope-datepicker .day ul li",
                    ".hope-datepicker .year-month",
                    ".hope-datepicker .year-month span",
                    ".hope-datepicker .action",
                ],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": (value - 20) / 7,
                key: [
                    ".hope-datepicker .day ul li",
                    ".hope-datepicker .year-month span",
                ],
                isDiff: "px",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                "line-height": (value - 20) / 7 - 10,
                key: [".hope-datepicker .time-list .warp .item"],
                isDiff: "px",
            });

            //头部功能宽度
            this.$store.commit("Hope/UpdateControlParams", {
                width: (value - 20) / 7 + (value - 20) / 7 / 2,
                key: [
                    ".hope-datepicker .year-month .year",
                    ".hope-datepicker .year-month .month",
                ],
                isDiff: "px",
            });

            //时间选择
            this.$store.commit("Hope/UpdateControlParams", {
                "margin-top": (value - 20) / 7,
                key: [".hope-datepicker .time-list .warp"],
                isDiff: "px",
            });

            this.$store.commit("Hope/UpdateControlParams", {
                height: ((value - 20) / 7) * 4,
                key: [".hope-datepicker .time-list .warp .list"],
                isDiff: "px",
            });
        },
    },
    fontSize: {
        get() {
            return parseInt(
                this.$store.state.selected.styleSheet[
                    ".hope-datepicker .day ul li"
                ]["font-size"] || 14
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "font-size": value,
                key: [
                    ".hope-datepicker .week ul li",
                    ".hope-datepicker .day ul li",
                    ".hope-datepicker .year-month .year span",
                    ".hope-datepicker .month-list ul li",
                    ".hope-datepicker .year-list ul li",
                    ".hope-datepicker .time-list .warp p",
                    ".hope-datepicker .time-list .warp .item",
                    ".hope-datepicker .time-list .group .return",
                    ".hope-datepicker .year-month span",
                    ".hope-datepicker .action button.changeTime",
                    ".hope-datepicker .action button.changeResult",
                    ".hope-datepicker .action button.clear",
                    ".hope-datepicker .action span.selectTime",
                ],
                isDiff: "px",
            });
        },
    },
    mainColor: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hope-datepicker .day ul li.active"
            ]["background-color"];
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                "background-color": value,
                key: [
                    ".hope-datepicker .day ul li.active",
                    ".hope-datepicker .time-list .warp .item.active",
                    ".hope-datepicker .action button.changeTime",
                    ".hope-datepicker .action button.changeResult",
                ],
                isDiff: "same",
            });

            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                key: [
                    ".hope-datepicker .action span.selectTime:hover",
                    ".hope-datepicker .time-list .warp .item:hover",
                    ".hope-datepicker .time-list .group .return:hover",
                    ".hope-datepicker .year-month span:hover",
                    ".hope-datepicker .year-month span.active",
                    ".hope-datepicker .month-list ul li:hover",
                    ".hope-datepicker .month-list ul li.active",
                    ".hope-datepicker .year-list ul li:hover",
                    ".hope-datepicker .year-list ul li.active",
                ],
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
