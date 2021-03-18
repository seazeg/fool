/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-03-18 14:52:30
 * @Description  :
 */
export const fields = {
    loadBtnName: {
        get() {
            return this.$store.state.selected.scriptParams.loadBtnName;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "loadBtnName",
                value: value,
            });
        },
    },
    offset: {
        get() {
            return this.$store.state.selected.scriptParams.offset;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "offset",
                value: value,
            });
        },
    },
    autoLoad: {
        get() {
            return this.$store.state.selected.scriptParams.autoLoad;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "autoLoad",
                value: value,
            });
        },
    },
};
