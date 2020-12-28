/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 14:42:09
 * @Description  :
 */
import styleSheet from "../../stylesheet/checkbox.json";
export default {
    name: "hope_checkbox",
    label: "复选框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
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
    props: {
        ele: [Object, Array],
    },
    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    name="subject"
                    value="音乐"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="checkbox"
                    name="subject"
                    value="历史"
                    class={this.ele.id}
                    hope-verify="required"
                />
                <input
                    type="checkbox"
                    name="subject"
                    value="生物"
                    class={this.ele.id}
                    disabled
                    hope-verify="required"
                />
            </div>
        );
    },
};
