/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2021-02-19 11:44:59
 * @Description  :
 */
import styleSheet from "../../stylesheet/suggest.json";
import styleSheet_ext from "../../stylesheet/input.json";
import { utils } from "../../../utils/utils.js";
import rightMenu from '../../plugins/contextMenu/menu.json'

export default {
    name: "hope_suggest",
    label: "联想提示框",
    icon: "icon-wenbenkuang",
    isSelected: false,
    unitSwitch: { width: "%" },
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
        style() {
            let styleSheet = this.ele.styleSheet;
            let root = this.ele.id;
            let res = {};
            Object.keys(styleSheet).forEach(function(line) {
                res[`.${root} ${line}`] = styleSheet[line];
            });
            return `<style>${utils.json2css(res)}</style>`;
        },
    },
    contextMenuData: rightMenu,
    methods: {
        showMenu(id, event) {
            event.preventDefault();
            let x = event.clientX;
            let y = event.clientY;
            // Get the current location
            this.contextMenuData.axis = {
                x,
                y,
                id,
            };
        },
        selectThis() {
            this.$store.commit("Hope/ResetControlSelected");
            this.$store.commit("Hope/ChooseControl", this.ele.id);
        },
        delThis() {
            this.selectThis();
            this.$confirm("确定移除当前组件？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info",
            })
                .then(() => {
                    this.$store.commit("Hope/RemoveControl", this.ele.id);
                    this.$store.state.selected = {};
                })
                .catch(() => {});
        },
        jsView() {
            this.selectThis();
            this.jsVisible = !this.jsVisible;
        },
        cssView() {
            this.selectThis();
            this.cssVisible = !this.cssVisible;
        },
        htmlView() {
            this.selectThis();
            this.htmlVisible = !this.htmlVisible;
        },
    },
};
