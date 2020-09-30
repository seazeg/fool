/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-23 10:55:56
 * @Description  :
 */
export default {
    name: "单选框",
    label: "hope_radio",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-form-radio *": {
            "font-size": "14px",
        },
        ".hopeui-form-radio i": {
            "font-size": "20px",
            color: "#c2c2c2"
        },
        ".hopeui-form-radio.hopeui-form-radio": {
            color: "#666",
        },
        ".hopeui-form-radio.hopeui-form-radio > i:hover": {
            color: "#ff7400",
        },
        ".hopeui-form-radio.hopeui-form-radioed > i": {
            color: "#ff7400",
        },
    },
};