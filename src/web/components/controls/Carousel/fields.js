/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-02-07 16:19:56
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
    slidesPerGroup: {
        get() {
            return parseInt(
                this.$store.state.selected.scriptParams.slidesPerGroup
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "slidesPerGroup",
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
    isAutoplay: {
        get() {
            return !!this.$store.state.selected.scriptParams.autoplay;
        },
        set(value) {
            if (value) {
                value = 2000;
            } else {
                value = 0;
            }
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "autoplay",
                value: value,
            });
        },
    },
    autoplay: {
        get() {
            return this.$store.state.selected.scriptParams.autoplay;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "autoplay",
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
    calculateHeight: {
        get() {
            return this.$store.state.selected.scriptParams.calculateHeight;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "calculateHeight",
                value: value,
            });
        },
    },
    roundLengths: {
        get() {
            return this.$store.state.selected.scriptParams.roundLengths;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "roundLengths",
                value: value,
            });
        },
    },
    autoResize: {
        get() {
            return this.$store.state.selected.scriptParams.autoResize;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "autoResize",
                value: value,
            });
        },
    },
    resizeReInit: {
        get() {
            return this.$store.state.selected.scriptParams.resizeReInit;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "resizeReInit",
                value: value,
            });
        },
    },
    preventLinks: {
        get() {
            return this.$store.state.selected.scriptParams.preventLinks;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "preventLinks",
                value: value,
            });
        },
    },
    hopeToPrev: {
        get() {
            return this.$store.state.selected.scriptParams.hopeToPrev;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "hopeToPrev",
                value: value,
            });
        },
    },
    hopeToNext: {
        get() {
            return this.$store.state.selected.scriptParams.hopeToNext;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "hopeToNext",
                value: value,
            });
        },
    },
    keyboardControl: {
        get() {
            return this.$store.state.selected.scriptParams.keyboardControl;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "keyboardControl",
                value: value,
            });
        },
    },
    mousewheelControl: {
        get() {
            return this.$store.state.selected.scriptParams.mousewheelControl;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "mousewheelControl",
                value: value,
            });
        },
    },
    speed: {
        get() {
            return this.$store.state.selected.scriptParams.speed;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "speed",
                value: value,
            });
        },
    },
    initialSlide: {
        get() {
            return this.$store.state.selected.scriptParams.initialSlide;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "initialSlide",
                value: value,
            });
        },
    },
    touchRatio: {
        get() {
            return this.$store.state.selected.scriptParams.touchRatio;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "touchRatio",
                value: value,
            });
        },
    },
    moveStartThreshold: {
        get() {
            return this.$store.state.selected.scriptParams.moveStartThreshold;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlJsOptions", {
                key: "moveStartThreshold",
                value: value,
            });
        },
    },
};
