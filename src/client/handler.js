/*
 * @Author       : Evan.G
 * @Date         : 2021-03-19 14:44:37
 * @LastEditTime : 2021-03-22 11:27:33
 * @Description  :
 */
const fs = require("fs");
import { ipcMain, dialog } from "electron";

const filters = [
    {
        name: "Custom File Type",
        extensions: ["json"],
    },
];

export const handler = {
    importFunc: (mainWindow) => {
        ipcMain.on("import-message", (event, arg) => {
            dialog
                .showOpenDialog(mainWindow, {
                    properties: ["openFile"],
                    filters: filters,
                })
                .then((res) => {
                    console.log('取消状态：',res.canceled);
                    if (!res.canceled) {
                        readFile(res.filePaths[0]).then(function(result) {
                            event.reply("import-callback", result);
                        });
                    }else{
                        event.reply("import-callback", 'canceled');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    },
    exportFunc: (mainWindow) => {
        ipcMain.on("export-message", (event, arg) => {
            dialog
                .showSaveDialog(mainWindow, {
                    filters: filters,
                })
                .then((res) => {
                    if (!res.canceled) {
                        let json = JSON.stringify(arg);
                        writeFile(res.filePath, json).then(function(result) {
                            event.reply("export-callback", result);
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    },
};

function writeFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, "utf-8", function(err) {
            if (err) {
                reject(err);
                console.log(err);
            } else {
                resolve(true);
            }
        });
    });
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", function(err, data) {
            if (err) {
                reject(err);
                console.log(err);
            } else {
                resolve(data);
            }
        });
    });
}
