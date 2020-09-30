/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-09-30 15:52:01
 * @Description  :
 */
export default {
    name: "下拉框",
    label: "hope_selector",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-form-select": {
            width: "183px",
        },
        ".hopeui-form-select .hopeui-input": {
            width: "inherit",
            height: "38px",
            "font-size": "14px",
            color: "#333",
        },
        ".hopeui-form-select .hopeui-select-list": {
            width: "inherit",
            border: "1px solid #d2d2d2",
            "background-color": "#fff",
            "border-radius": "2px",
            top: "39px",
        },
        ".hopeui-form-select .hopeui-select-list .option": {
            "line-height": "36px",
            "font-size": "inherit",
            color: "#333",
        },
        ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this": {
            "background-color": "#ff7400",
            color: "#fff",
        },
        ".hopeui-form-select .hopeui-select-list .option.hopeui-select-this:hover": {
            "background-color": "#ff7400",
            color: "#fff",
        },
        ".hopeui-form-select .hopeui-select-list .option:hover": {
            "background-color": "#f2f2f2",
            color: "#333",
        },
        ".hopeui-form-select .hopeui-select-list .groupTitle": {
            "font-size": "12px",
            color: "#999",
            "line-height": "36px",
        },
        "input::-webkit-input-placeholder": {
            color: "#555",
        },
        "input::-moz-placeholder": {
            color: "#555",
        },
        "input::-ms-input-placeholder": {
            color: " #555",
        },
    },
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
    html: `
    <select name="city" class="hopeui-hide" id="ele.id">
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
    `,
};
