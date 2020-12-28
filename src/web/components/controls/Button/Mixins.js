/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 14:40:32
 * @Description  :
 */
import styleSheet from "../../stylesheet/button.json";
export default {
    name: "hope_button",
    label: "按钮",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
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
