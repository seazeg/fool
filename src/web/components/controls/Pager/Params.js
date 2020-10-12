/*
 * @Author       : Evan.G
 * @Date         : 2020-09-11 10:59:23
 * @LastEditTime : 2020-10-12 13:50:07
 * @Description  :
 */
export default {
    name: "分页器",
    label: "hope_pager",
    icon: "icon-anniu",
    isSelected: false,
    defaultClass: "",
    customClass: "",
    styleSheet: {
        ".hopeui-pager .hopeui-pager-omit": {
            "padding-right": "15px",
            "padding-left": "15px",
            height: "28px",
            "line-height": "26px",
            "background-color": "#fff",
            color: "#2f2f2f",
            "font-size": "12px",
            "border-color": "#e2e2e2",
        },
        ".hopeui-pager > span": {
            "padding-right": "15px",
            "padding-left": "15px",
            height: "28px",
            "line-height": "26px",
            "background-color": "#fff",
            color: "#2f2f2f",
            "font-size": "12px",
            "border-color": "#e2e2e2",
        },
        ".hopeui-pager span:hover": {
            color: "#ff7400",
        },
        ".hopeui-pager .hopeui-pager-count":{
            "font-size": "12px",
            color: "#2f2f2f",
        },
        ".hopeui-pager .hopeui-pager-jump": {
            height: "28px",
            "line-height": "26px",
            color: "#2f2f2f",
            "font-size": "12px",
        },
        ".hopeui-pager .hopeui-pager-jump button": {
            height: "28px",
            "line-height": "26px",
            "border-radius": "2px",
            "background-color": "#fff",
            "border-color": "#e2e2e2",
            "padding-right": "15px",
            "padding-left": "15px",
            color: "#2f2f2f",
            "font-size": "12px",
        },
        ".hopeui-pager .hopeui-pager-jump input": {
            height: "28px",
            "line-height": "26px",
            "border-radius": "2px",
            "background-color": "#fff",
            "border-color": "#e2e2e2",
            "font-size": "12px",
            width: "40px",
        },
        ".hopeui-pager .hopeui-pager-cur": {
            "background-color": "#ff7400",
            color: "#fff!important",
            "border-color": "#ff7400",
        },
    },
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
    html: `
    <div id="ele.id_list"></div>
    <div id="ele.id"></div>
    `,
};
