/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 14:44:14
 * @Description  :
 */
import styleSheet from "../../stylesheet/textarea.json";
export default {
    name: "hope_textarea",
    label: "多行文本框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {...styleSheet},
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
    props: {
        ele: [Object, Array],
    },
    render() {
        return (
            <div>
                <textarea
                    name="textarea"
                    class="hopeui-textarea"
                    placeholder="请输入内容"
                    id={this.ele.id}
                    hope-verify="required"
                />
            </div>
        );
    },
};
