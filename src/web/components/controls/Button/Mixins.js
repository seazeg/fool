/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-23 17:44:36
 * @Description  :
 */
export default {
    name: "hope_button",
    label: "按钮",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-btn": {
            height: "38px",
            "line-height": "38px",
            padding: "0 18px",
            "background-color": "#ff7400",
            color: "#fff",
            "font-size": "14px",
            "border-radius": "2px",
        },
        ".hopeui-btn i": {
            padding: "0 2px",
        },
        ".hopeui-btn:hover": {
            opacity: "0.8",
            filter: "alpha(opacity=80)",
            color: "#fff",
        },
        ".hopeui-btn:active": {
            opacity: 1,
        },
    },
    script: "",
    props: {
        ele: [Object, Array],
    },
    render() {
        return (
            <div>
                <button type="button" class="hopeui-btn">
                    普通按钮
                </button>
            </div>
        );
    },
};
