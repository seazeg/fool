/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-14 17:28:49
 * @Description  :
 */
import { utils } from "../../../utils/utils.js";
let basis = {
    mainColor: utils.getRandomColor(),
    subColor: utils.getRandomColor(),
};
export const ButtonParams = {
    name: "按钮",
    label: "hope_button",
    icon: "icon-anniu",
    isSelected: false,
    spcConfig: {
        isPer: {
            width: false,
            height: false,
        },
        isAutoLineHeight: true,
    },
    event: "hover",
    defaultClass: "hope_button",
    customClass: "",
    styleSheet: {
        ".hopeui-form-select": {
            width: "183px",
        },
        ".hopeui-form-select .hopeui-input": {
            width: "inherit",
            height: "38px",
            "font-size": "14px",
            color: "#333",
        },
        ".hopeui-form-select .hopeui-select-list": {
            width: "inherit",
            border: "1px solid #d2d2d2",
            "background-color": "#fff",
            "border-radius": "2px",
            top: "39px",
        },
        ".hopeui-form-select .hopeui-select-list .option": {
            "line-height": "36px",
            "font-size": "inherit",
            color: "#333",
        },
        ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this": {
            "background-color": "#ff7400",
            color: "#fff",
        },
        ".hopeui-form-select .hopeui-select-list .option:hover": {
            "background-color": "#f2f2f2",
        },
        ".hopeui-form-select .hopeui-select-list .groupTitle": {
            "font-size": "12px",
            color: "#999",
            "line-height": "36px",
        },
        "input::-webkit-input-placeholder": {
            color: "#555",
        },
        "input::-moz-placeholder": {
            color: "#555",
        },
        "input::-ms-input-placeholder": {
            color: " #555",
        },
    },
};
