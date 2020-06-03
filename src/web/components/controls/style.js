export const button = {
    width: {
        get() {
            return parseInt(this.$store.state.selected.style.width);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                isDiff: true,
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                width: value,
                isDiff: true,
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
                isDiff: true,
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: value,
                isDiff: true,
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                height: value,
                isDiff: true,
                container: "effect",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: value,
                isDiff: true,
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
                isDiff: true,
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
                isDiff: true,
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
                isDiff: false,
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
                isDiff: false,
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
                isDiff: false,
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
                isDiff: true,
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: this.height - value * 2,
                isDiff: true,
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
                isDiff: false,
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
                isDiff: false,
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
                isDiff: true,
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
                isDiff: true,
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
                isDiff: false,
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
                isDiff: false,
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
                isDiff: false,
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
                isDiff: true,
                container: "effect",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: this.height - value * 2,
                isDiff: true,
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
                isDiff: false,
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
                isDiff: false,
                container: "effect",
            });
        },
    },
};
