/*
 * @Author       : Evan.G
 * @Date         : 2021-03-19 14:52:45
 * @LastEditTime : 2021-03-22 11:31:31
 * @Description  :
 */
const { ipcRenderer } = require("electron");

export const message = {
    importFunc: (type) => {
        return new Promise((resolve, reject) => {
            ipcRenderer.send("import-message", {});
            ipcRenderer.on("import-callback", (event, res) => {
                if (res != "canceled") {
                    let data = JSON.parse(res);
                    if (data.type == type) {
                        resolve(data.metaData);
                    } else {
                        resolve(false);
                    }
                } else {
                    resolve(res);
                }
            });
        });
    },
    exportFunc: (type, info) => {
        ipcRenderer.send("export-message", {
            type: type,
            metaData: info,
        });
        ipcRenderer.on("export-callback", (event, result) => {
            if (result) {
                vm.$message({
                    message:
                        type == "workspace" ? "工作区保存成功" : "组件导出成功",
                    type: "success",
                });
            } else {
                vm.$message({
                    message:
                        type == "workspace"
                            ? "工作区保存失败!"
                            : "组件导出失败!",
                    type: "error",
                });
            }
        });
    },
};