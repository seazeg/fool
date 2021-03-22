/*
 * @Author       : Evan.G
 * @Date         : 2021-03-11 11:45:34
 * @LastEditTime : 2021-03-22 15:10:21
 * @Description  : 公用函数
 */
import { utils } from "../../utils/utils.js";
import { message } from "../../utils/message";

export const methods = {
    showMenu(id, event) {
        event.preventDefault();
        event.stopPropagation();
        let x = event.offsetX;
        let y = event.offsetY;
        console.log(x, y);
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
    delThis(e) {
        this.$confirm("确定移除当前组件？", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        })
            .then(() => {
                this.$store.commit("Hope/RemoveControl", this.ele.id);
                this.$store.state.selected = {};
            })
            .catch(() => {});
    },
    copyThis(e) {
        this.$store.commit("Hope/CopyControl", this.ele.id);
    },
    lockThis(e) {
        this.$store.commit("Hope/LockControl", this.ele.id);
    },
    lockRatioThis(e) {
        this.$store.commit("Hope/lockRatioControl", this.ele.id);
    },
    exportThis(e) {
        let selectedControl = this.ele;
        let exportControl = {};
        exportControl.name = selectedControl.name;
        exportControl.styleSheet = selectedControl.styleSheet;
        exportControl.scriptParams = selectedControl.scriptParams;
        exportControl.zoomParams = selectedControl.zoomParams;
        exportControl.html = selectedControl.html;
        exportControl.id = selectedControl.id;
        message.exportFunc("control", exportControl, selectedControl.label);
    },
};

export const computed = {
    style() {
        let styleSheet = this.ele.styleSheet;
        let root = this.ele.id;
        let res = {};
        Object.keys(styleSheet).forEach(function(line) {
            res[`.${root} ${line}`] = styleSheet[line];
        });
        return `<style>${utils.json2css(res)}</style>`;
    },
};
