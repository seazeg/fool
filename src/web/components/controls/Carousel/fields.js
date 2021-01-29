/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-01-26 16:54:42
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
            if (value != "horizontal") {
                this.$store.commit("Hope/UpdateControlJsOptions", {
                    key: "centeredSlides",
                    value: false,
                });
            }
        },
    },
    freeMode: {
        get() {
            return this.$store.state.selected.scriptParams.freeMode;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "freeMode",
                value: value,
            });
        },
    },
    centeredSlides: {
        get() {
            return this.$store.state.selected.scriptParams.centeredSlides;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "centeredSlides",
                value: value,
            });
        },
    },
};
