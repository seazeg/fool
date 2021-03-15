/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-03-15 14:58:49
 * @Description  :
 */
import styleSheet from "../../stylesheet/suggest.json";
import styleSheet_ext from "../../stylesheet/input.json";
import { methods, computed } from "../public.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

export default {
    name: "hope_suggest",
    label: "联想提示框",
    icon: "icon-wenbenkuang",
    isSelected: false,
    unitSwitch: { width: "%" },
    zoomParams: {
        width: parseFloat(styleSheet[".hopeui-suggest"].width),
        height: parseFloat(styleSheet_ext[".hopeui-input"].height),
        x: 0,
        y: 0,
        resizable:true
    },
    includes: { base: true, effect: true, options: true },
    styleSheet: { ...styleSheet, ...styleSheet_ext },
    scriptParams: { noMatchName: "-- 没有匹配的内容 --" },
    script(ele) {
        return `
        var suggest = hope.suggest({
            ele: "#${ele.id}",
            options: ${JSON.stringify(ele.scriptParams)},
            params: {
                url: '/assets/page/list111.json',
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
        return suggest
        `;
    },
    props: {
        ele: [Object, Array],
        htmlVisible: Boolean,
        cssVisible: Boolean,
        jsVisible: Boolean,
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
    computed: {
        ...computed,
    },
    contextMenuData: rightMenu,
    methods: {
        ...methods,
    },
};
