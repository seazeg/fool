/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-01-26 15:35:47
 * @Description  :
 */
export const fields = {
    slidesPerView: {
        get() {
            return parseInt(
                this.$store.state.selected.scriptParams.slidesPerView
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "slidesPerView",
                value: value,
            });
        },
    },
    mode: {
        get() {
            return this.$store.state.selected.scriptParams.mode;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "mode",
                value: value,
            });
        },
    },
    loop: {
        get() {
            return this.$store.state.selected.scriptParams.loop;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "loop",
                value: value,
            });
        },
    },
};
