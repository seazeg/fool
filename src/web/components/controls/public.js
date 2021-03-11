/*
 * @Author       : Evan.G
 * @Date         : 2021-03-11 11:45:34
 * @LastEditTime : 2021-03-11 11:50:44
 * @Description  : 公用函数
 */

export const methods = {
    showMenu(id, event) {
        event.preventDefault();
        let x = event.offsetX;
        let y = event.offsetY;
        this.contextMenuData.axis = {
            x,
            y,
            id,
        };
    },
    selectThis() {
        this.$store.commit("Hope/ResetControlSelected");
        this.$store.commit("Hope/ChooseControl", {
            id: this.ele.id,
            type: true,
        });
        this.$store.commit("Hope/ControlsSelected", this.ele);
    },
    delThis() {
        this.$confirm("确定移除当前组件？", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "info",
        })
            .then(() => {
                this.$store.commit("Hope/RemoveControl", this.ele.id);
                this.$store.state.selected = {};
            })
            .catch(() => {});
    },
};


export const computed = {
    style() {
        let styleSheet = this.ele.styleSheet;
        let root = this.ele.id;
        let res = {};
        Object.keys(styleSheet).forEach(function (line) {
            res[`.${root} ${line}`] = styleSheet[line];
        });
        return `<style>${utils.json2css(res)}</style>`;
    },
}