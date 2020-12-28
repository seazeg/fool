/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 14:43:26
 * @Description  :
 */
import styleSheet from "../../stylesheet/radio.json";
export default {
    name: "hope_radio",
    label: "单选框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
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
