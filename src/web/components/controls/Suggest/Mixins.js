/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 14:43:46
 * @Description  :
 */
import styleSheet from "../../stylesheet/suggest.json";
export default {
    name: "hope_suggest",
    label: "联想提示框",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {...styleSheet},
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
