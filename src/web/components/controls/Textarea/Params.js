/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-30 15:50:35
 * @Description  :
 */
export default {
    name: "多行文本框",
    label: "hope_textarea",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-textarea": {
            height: "200px",
            width: "600px",
            "background-color": "#fff",
            "border-radius": "2px",
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#e6e6e6",
            "font-size":"14px",
            "color":"#555555"
        },
        ".hopeui-textarea:focus": {
            "border-color": "#c9c9c9",
        },

        ".hopeui-textarea:hover": {
            "border-color": "#d2d2d2",
        },
        "textarea::-webkit-input-placeholder": {
            color: "#555",
        },
        "textarea::-moz-placeholder": {
            color: "#555",
        },
        "textarea::-ms-input-placeholder": {
            color: " #555",
        },
        ".hopeui-placeholder":{
            color: " #555",
        }
    },
    script: `
    let textarea = hope.textarea({
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
    <textarea name="textarea" class="hopeui-textarea" placeholder="请输入内容" id="ele.id"></textarea>
    `,
};
