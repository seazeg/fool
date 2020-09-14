export const fields = {
    width: {
        get() {
            if (/\d/.test(this.$store.state.selected.style.width)) {
                return parseFloat(this.$store.state.selected.style.width);
            } else {
                return this.$store.state.selected.style.width;
            }
        },
        set(value) {
            this.$store.commit("Hope/newUpdate", {
                width: value,
                isDiff: "px",
            });
        },
    },
    height: {
        get() {
            if (/\d/.test(this.$store.state.selected.style.height)) {
                return parseFloat(this.$store.state.selected.style.height);
            } else {
                return this.$store.state.selected.style.height;
            }
        },
        set(value) {
            this.$store.commit("Hope/newUpdate", {
                height: value,
                isDiff: "px",
            });
            this.$store.commit("Hope/newUpdate", {
                top: value,
                isDiff: "px",
            });
        },
    },
    fontSize: {
        get() {
            return parseInt(this.$store.state.selected.style['font-size']);
        },
        set(value) {
            this.$store.commit("Hope/newUpdate", {
                "font-size": value,
                isDiff: "px",
            });
        },
    },
    lineHeight: {
        get() {
            return parseInt(this.$store.state.selected.style.lineHeight);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                lineHeight: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    letterSpacing: {
        get() {
            return parseInt(this.$store.state.selected.style.letterSpacing);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                letterSpacing: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                letterSpacing: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    fontWeight: {
        get() {
            return parseInt(this.$store.state.selected.style.fontWeight);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                fontWeight: value,
                isDiff: "same",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                fontWeight: value,
                isDiff: "same",
                container: "effect",
            });
        },
    },
    fontStyle: {
        get() {
            return this.$store.state.selected.style.fontStyle;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                fontStyle: value,
                isDiff: "same",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                fontStyle: value,
                isDiff: "same",
                container: "effect",
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
            this.$store.commit("Hope/newUpdate", {
                color: value,
                isDiff: "same",
            });
        },
    },
    backgroundColor: {
        get() {
            return this.$store.state.selected.style['background-color'];
        },
        set(value) {
            this.$store.commit("Hope/newUpdate", {
                "background-color": value,
                isDiff: "same",
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
    transitionDuration: {
        get() {
            return parseFloat(
                this.$store.state.selected.style.transitionDuration
            );
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
        },
    },
    animationName: {
        get() {
            return this.$store.state.selected.effect.animationName;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                animationName: value,
                isDiff: "same",
                container: "effect",
            });
        },
    },
    paddingLeft: {
        get() {
            return parseInt(this.$store.state.selected.style.paddingLeft) || 0;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                paddingLeft: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                paddingLeft: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    paddingRight: {
        get() {
            return parseInt(this.$store.state.selected.style.paddingRight) || 0;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                paddingRight: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                paddingRight: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    paddingTop: {
        get() {
            return parseInt(this.$store.state.selected.style.paddingTop) || 0;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                paddingTop: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                paddingTop: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    paddingBottom: {
        get() {
            return (
                parseInt(this.$store.state.selected.style.paddingBottom) || 0
            );
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                paddingBottom: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                paddingBottom: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    marginLeft: {
        get() {
            return parseInt(this.$store.state.selected.style.marginLeft) || 0;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                marginLeft: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                marginLeft: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    marginRight: {
        get() {
            return parseInt(this.$store.state.selected.style.marginRight) || 0;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                marginRight: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                marginRight: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    marginTop: {
        get() {
            return parseInt(this.$store.state.selected.style.marginTop) || 0;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                marginTop: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                marginTop: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    marginBottom: {
        get() {
            return parseInt(this.$store.state.selected.style.marginBottom) || 0;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                marginBottom: value,
                isDiff: "px",
                container: "style",
            });
            this.$store.commit("Hope/UpdateControlParams", {
                marginBottom: value,
                isDiff: "px",
                container: "effect",
            });
        },
    },
    evt_fontSize: {
        get() {
            return parseInt(this.$store.state.selected.effect.fontSize);
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                fontSize: value,
                isDiff: "px",
                container: "effect",
            });
            // this.$store.commit("Hope/UpdateControlParams", {
            //     lineHeight: value,
            //     isDiff: "px",
            //     container: "effect",
            // });
        },
    },
    evt_borderRadius: {
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
    evt_color: {
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
    evt_backgroundColor: {
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
    evt_backgroundImage: {
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
    evt_borderWidth: {
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
    evt_borderStyle: {
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
    evt_borderColor: {
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
    uploadImg: {
        get() {
            return this.$store.state.selected.uploadImg;
        },
        set(value) {
            this.$store.commit("Hope/UpdateControlParams", {
                uploadImg: value,
                container: "uploadImg",
            });
        },
    },
};
