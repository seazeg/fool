/*
 * @Author       : Evan.G
 * @Date         : 2020-09-14 16:28:14
 * @LastEditTime : 2021-01-25 16:33:49
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
            this.$store.commit("Hope/UpdateControlJsParams", {
                slidesPerView: value,
                key: ["slidesPerView"]
            });
        },
    },
};
