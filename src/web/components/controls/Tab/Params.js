/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-30 14:58:10
 * @Description  :
 */
export default {
    name: "选项卡",
    label: "hope_tab",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-input": {
            display: "block",
            width: "300px",
            padding: "0 10px",
            height: "38px",
            "line-height": "38px",
            "border-radius": "2px",
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#e6e6e6",
            "font-size": "14px",
            color: "#333333",
        },
        ".hopeui-input:focus": {
            "border-color": "#c9c9c9",
        },
        ".hopeui-input:hover": {
            "border-color": "#d2d2d2",
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
        ".hopeui-placeholder":{
            color: " #555",
            "line-height":"38px"
        }
    },
};
