/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 14:42:33
 * @Description  :
 */
import styleSheet from "../../stylesheet/input.json";
export default {
    name: "hope_input",
    label: "文本框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
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
    props: {
        ele: [Object, Array],
    },
    render() {
        return (
            <div>
                <input
                    name="text"
                    type="text"
                    placeholder="请输入文本"
                    class="hopeui-input"
                    id={this.ele.id}
                    hope-verify="required"
                />
            </div>
        );
    },
};
