/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 15:08:23
 * @Description  :
 */
import styleSheet from "../../stylesheet/selector.json";

export default {
    name: "hope_selector",
    label: "下拉框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet},
    script: `
    let select = hope.selector({
        ele: "#" + _this.ele.id,
        on: {
            change: function (e) {
                console.log(e);
            },
            toggle: function (e) {
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
                <select name="city" id={this.ele.id} hope-verify="required">
                    <option value="">请选择一个选项</option>
                    <option value="青岛">青岛</option>
                    <option value="武汉">武汉</option>
                    <option value="乌鲁木齐">乌鲁木齐</option>
                    <option value="南京">南京</option>
                    <option value="天津">天津</option>
                    <option value="郑州">郑州</option>
                    <option value="重庆">重庆</option>
                    <option value="成都">成都</option>
                    <option value="云南">云南</option>
                </select>
            </div>
        );
    },
};
