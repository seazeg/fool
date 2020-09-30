/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-30 15:58:42
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
    script: `
    let radio = hope.radio({
        ele: "." + _this.ele.id,
        on: {
            change: function (e) {
                console.log(e);
            },
        },
    });
    `,
    html: `
    <input type="radio" name="radio" value="男" title="男" class="ele.id" checked />
    <input type="radio" name="radio" value="女" title="女" class="ele.id"  />
    <input type="radio" name="radio" value="什么玩意" title="什么玩意" class="ele.id" disabled />
    `,
};