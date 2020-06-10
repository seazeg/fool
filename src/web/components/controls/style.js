export const button = {
    width: {
        get() {
            return parseInt(this.$store.state.selected.style.width);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    height: {
        get() {
            return parseInt(this.$store.state.selected.style.height);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                isDiff: "px",
                container: "effect",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: value,
                isDiff: "px",
                container: "effect",
            });

        },
    },
    fontSize: {
        get() {
            return parseInt(this.$store.state.selected.style.fontSize);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                fontSize: value,
                isDiff: "px",
                container: "style",
            });
        },
    },
    borderRadius: {
        get() {
            return parseInt(this.$store.state.selected.style.borderRadius);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderRadius: value,
                isDiff: "px",
                container: "style",
            });
        },
    },
    color: {
        get() {
            return this.$store.state.selected.style.color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                isDiff: "same",
                container: "style",
            });
        },
    },
    backgroundColor: {
        get() {
            return this.$store.state.selected.style.backgroundColor;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                backgroundColor: value,
                isDiff: "same",
                container: "style",
            });
        },
    },
    backgroundImage: {
        get() {
            return this.$store.state.selected.style.backgroundImage;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                backgroundImage: value,
                isDiff: "same",
                container: "style",
            });
        },
    },
    borderWidth: {
        get() {
            return parseInt(this.$store.state.selected.style.borderWidth);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderWidth: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: this.height - value * 2,
                isDiff: "px",
                container: "style",
            });
        },
    },
    borderStyle: {
        get() {
            return this.$store.state.selected.style.borderStyle;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderStyle: value,
                isDiff: "same",
                container: "style",
            });
        },
    },
    borderColor: {
        get() {
            return this.$store.state.selected.style.borderColor;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderColor: value,
                isDiff: "same",
                container: "style",
            });
        },
    },
    hvr_fontSize: {
        get() {
            return parseInt(this.$store.state.selected.effect.fontSize);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                fontSize: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    hvr_borderRadius: {
        get() {
            return parseInt(this.$store.state.selected.effect.borderRadius);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderRadius: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    hvr_color: {
        get() {
            return this.$store.state.selected.effect.color;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                color: value,
                isDiff: "same",
                container: "effect",
            });
        },
    },
    hvr_backgroundColor: {
        get() {
            return this.$store.state.selected.effect.backgroundColor;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                backgroundColor: value,
                isDiff: "same",
                container: "effect",
            });
        },
    },
    hvr_backgroundImage: {
        get() {
            return this.$store.state.selected.effect.backgroundImage;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                backgroundImage: value,
                isDiff: "same",
                container: "effect",
            });
        },
    },
    hvr_borderWidth: {
        get() {
            return parseInt(this.$store.state.selected.effect.borderWidth);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderWidth: value,
                isDiff: "px",
                container: "effect",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: this.height - value * 2,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    hvr_borderStyle: {
        get() {
            return this.$store.state.selected.effect.borderStyle;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderStyle: value,
                isDiff: "same",
                container: "effect",
            });
        },
    },
    hvr_borderColor: {
        get() {
            return this.$store.state.selected.effect.borderColor;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                borderColor: value,
                isDiff: "same",
                container: "effect",
            });
        },
    },
    transitionDuration:{
        get(){
            return parseFloat(this.$store.state.selected.style.transitionDuration);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                transitionDuration: value,
                isDiff: "time",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                transitionDuration: value,
                isDiff: "time",
                container: "effect",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                animationDuration: value,
                isDiff: "time",
                container: "effect",
            });
        }
    },
    animationName:{
        get(){
            return this.$store.state.selected.effect.animationName;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                animationName: value,
                isDiff: "same",
                container: "effect",
            });
        }
    }
};




export const grid = {
    width: {
        get() {
            return parseInt(this.$store.state.selected.style.width);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                isDiff: "per",
                container: "style",
            });
        },
    },
    height: {
        get() {
            return parseInt(this.$store.state.selected.style.height);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                isDiff: "per",
                container: "style",
            });
        },
    }
};
