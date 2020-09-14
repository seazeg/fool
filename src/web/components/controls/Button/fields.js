/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2020-09-14 17:34:12
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
            this.$store.commit("Hope/newUpdate", {
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
    // height: {
    //     get() {
    //         return parseFloat(this.$store.state.selected.style.height);
    //     },
    //     set(value) {
    //         this.$store.commit("Hope/newUpdate", {
    //             height: value,
    //             isDiff: "px",
    //         });
    //         this.$store.commit("Hope/newUpdate", {
    //             top: value,
    //             isDiff: "px",
    //         });
    //     },
    // },
    // fontSize: {
    //     get() {
    //         return parseInt(this.$store.state.selected.style["font-size"]);
    //     },
    //     set(value) {
    //         this.$store.commit("Hope/newUpdate", {
    //             "font-size": value,
    //             isDiff: "px",
    //         });
    //     },
    // },

    // color: {
    //     get() {
    //         return this.$store.state.selected.style.color;
    //     },
    //     set(value) {
    //         this.$store.commit("Hope/newUpdate", {
    //             color: value,
    //             isDiff: "same",
    //         });
    //     },
    // },
    selectBG: {
        get() {
            return this.$store.state.selected.styleSheet[
                ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this"
            ]["background-color"];
        },
        set(value) {
            this.$store.commit("Hope/newUpdate", {
                "background-color": value,
                key: [
                    ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this",
                ],
                isDiff: "same",
            });
        },
    },
};