/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-30 15:39:11
 * @Description  :
 */
export default {
    name: "文本框",
    label: "hope_input",
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
    script: `
    let input = hope.input({
        ele: "#" + _this.ele.id,
        on: {
            blur: function (e) {
                console.log(e);
            },
            focus: function (e) {
                console.log(e);
            },
            input: function (e) {
                console.log(e);
            },
        },
    });
    `,
    html: `
    <input name="text" type="text" placeholder="请输入文本" value="" class="hopeui-input input_normal" id="ele.id" />
    `
};
