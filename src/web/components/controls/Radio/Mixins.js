/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-11-12 18:00:38
 * @Description  :
 */
export default {
    name: "hope_radio",
    label: "单选框",
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
            color: "#c2c2c2",
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
            init:function(e){
                console.log(e);
            },
            change: function (e) {
                console.log(e);
            },
        },
    });
    `,
    props: {
        ele: [Object, Array],
    },
    render() {
        return (
            <div>
                <input
                    type="radio"
                    name="radio"
                    value="男"
                    title="男"
                    class={this.ele.id}
                    checked
                    hope-verify="required"
                />
                <input
                    type="radio"
                    name="radio"
                    value="女"
                    title="女"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="radio"
                    name="radio"
                    value="什么玩意"
                    title="什么玩意"
                    class={this.ele.id}
                    disabled
                    hope-verify="required"
                />
            </div>
        );
    },
};