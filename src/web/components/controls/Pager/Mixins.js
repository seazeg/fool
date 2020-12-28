/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-12-28 14:42:54
 * @Description  :
 */
import styleSheet from "../../stylesheet/pager.json";
export default {
    name: "hope_pager",
    label: "分页器",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: { ...styleSheet },
    script: `
    let pager = hope.pager({
        ele: "#" + _this.ele.id,
        options: {
            omit: 5, //最多保留多少按钮,必须奇数
            prevName: "prev",
            nextName: "next",
            hideNum: true,
            pageMapping: "pageNo", //当前页码字段的映射，默认pageNo
            extend: true,
        },
        params: {
            url: "/assets/page/list1.json",
            dataType: "json",
            type: "get",
            data: {
                pageNo: 1,
                pageSize: 20,
            },
        },
        reader: function (res) {
            var data = res.data;
            var template = "";
            for (var i = 0; i < data.length; i++) {
                template +=
                    "<p>" +
                    data[i].goodsName +
                    "|" +
                    data[i].goodsStar +
                    "</p>";
            }

            $("#" + _this.ele.id + "_list").html(template);
          
            return {
                pageNo: res.pageNo,
                pageSize: res.pageSize,
                totalNumber: res.totalNumber,
            };
        },
        on: {
            jumpOver: function (e) {
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
            <div class="page_list">
                <div id={this.ele.id + "_list"} />
                <div id={this.ele.id} />
            </div>
        );
    },
};
