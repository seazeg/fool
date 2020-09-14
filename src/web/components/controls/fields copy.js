/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:18:49
 * @LastEditTime : 2020-09-14 16:27:46
 * @Description  : 
 */
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
    
};
