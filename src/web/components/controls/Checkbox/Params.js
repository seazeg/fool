/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-30 15:59:16
 * @Description  :
 */
export default {
    name: "复选框",
    label: "hope_checkbox",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-form-checkbox": {
            "padding-left": "28px",
        },
        ".hopeui-form-checkbox:hover i": {
            "border-color": "#ff7400",
        },
        ".hopeui-form-checkbox > span": {
            "line-height": "18px",
            color: "#666666",
            "font-size": "14px",
            "border-radius": "2px 0 0 2px",
        },
        ".hopeui-form-checkbox > i": {
            width: "16px",
            height: "16px",
            "line-height": "16px",
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#c2c2c2",
            "font-size": "12px",
            "border-radius": "2px",
        },
        ".hopeui-form-checked i": {
            "background-color": "#ff7400",
            "border-color": "#ff7400",
            "font-size": "12px",
            "line-height": "16px",
        },
    },
    script: `
        let checkbox = hope.checkbox({
            ele: "." + _this.ele.id,
            on: {
                change: function (e) {
                    console.log(e);
                },
            },
        });
    `,
    html: `
    <input type="checkbox" name="subject" value="音乐" class="ele.id" />
    <input type="checkbox" name="subject" value="历史" class="ele.id" />
    <input type="checkbox" name="subject" value="生物" class="ele.id" disabled />
    `,
};
