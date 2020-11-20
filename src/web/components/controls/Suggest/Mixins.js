/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-11-17 16:35:53
 * @Description  :
 */
export default {
    name: "hope_suggest",
    label: "联想提示框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-input": {
            display: "block",
            width: "300px",
            padding: "0 10px",
            height: "38px",
            "line-height": "38px",
            "border-radius": "2px",
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#e6e6e6",
            "font-size": "14px",
            color: "#333333",
        },
        ".hopeui-input:focus": {
            "border-color": "#c9c9c9",
        },
        ".hopeui-input:hover": {
            "border-color": "#d2d2d2",
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
        ".hopeui-placeholder": {
            color: " #555",
            "line-height": "38px",
        },
        ".hopeui-suggest": {
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#d2d2d2",
            "background-color": "#fff",
            "border-radius": "2px",
            top: "1px",
        },
        ".hopeui-suggest .option": {
            "line-height": "36px",
            color: "#333",
            "font-size": "14px",
        },
        ".hopeui-suggest .option.hopeui-suggest-this": {
            "background-color": "#ff7400 !important",
            color: "#fff !important",
        },
        ".hopeui-suggest .option.hopeui-suggest-tips": {
            color: "#666",
        },
        ".hopeui-suggest .option:hover": {
            "background-color": "#f2f2f2",
        },
    },
    script: `
    let suggest = hope.suggest({
        ele: "#" + _this.ele.id,
        options: {
            noMatchName: '-- 没有匹配的内容 --'
        },
        params: {
            url: '/assets/page/list1.json',
            dataType: "json",
            type: 'get',
            searchField: 'searchword'
        },
        reader: function (res) {
            var list = res.data;
            var tmp = [];
            for (var i = 0; i < list.length; i++) {
                tmp.push(list[i].goodsName)
            }
            return tmp
        },
        on: {
            input: function (e) {
                console.log(e);
            }
        }
    })
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
                    value=""
                    class="hopeui-input"
                    id={this.ele.id}
                    placeholder="请输入"
                    autoprompt
                />
            </div>
        );
    },
};
