/*
 * @Author       : Evan.G
 * @Date         : 2021-03-19 14:52:45
 * @LastEditTime : 2021-03-19 17:16:34
 * @Description  :
 */
const { ipcRenderer } = require("electron");

export const message = {
    importFunc: (type) => {
        ipcRenderer.send("import-message", {});
        return new Promise((resolve, reject) => {
            ipcRenderer.on("import-callback", (event, res) => {
                let data = JSON.parse(res);
                if (data.type == type) {
                    resolve(data.metaData);
                } else {    
                    resolve(false);
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
