/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2020-10-14 11:09:30
 * @Description  :
 */
import formatter from "./html-formatter";
import { utils } from "./utils.js";

export const handle = {
    reduceHTML: (ele) => {
        try {
            if (!ele.label.includes("grid")) {
                let html = ele.html,
                    id = ele.id;
                html = html.replace(/ele.id/g, ele.id);
                return formatter.render(html);
            } else {
                let html = $("#preview").html();
                html = html.replace(/ hope_([A-Za-z0-9]*)/g, "");
                html = html.replace(/ ignoreEle/g, "");
                html = html.replace(/ selected/g, "");
                let filterData = $(html)
                    .find(".draggable_box")
                    .each(function() {
                        let _this = $(this);
                        let _this_parent = _this.parent();
                        let _this_child = _this.contents();
                        _this.remove();
                        _this_parent.append(_this_child);
                    });

                let controlProcess = $(filterData.prevObject[0].innerHTML)
                    .find(".controls_block")
                    .each(function() {
                        let _this = $(this);
                        let htmlCache = $(this)
                            .find(".htmlCache")
                            .text();
                        let _this_parent = _this.parent();
                        _this.remove();
                        _this_parent.append(htmlCache);
                    });
                let result = $('<div id="tmp"></div>').html(
                    controlProcess.prevObject[0]
                );
                return formatter.render(result.html());
            }
        } catch (error) {}
    },
    getCSS: (ele) => {
        let css = ele.styleSheet;
        return utils.cssFormat(utils.json2css(css));
    },
    getJS: (ele) => {
        let js = ele.script,
            id = ele.id;
        if (js) {
            js = js.replace('"." + _this.ele.id', `'.${id}'`);
            js = js.replace('"#" + _this.ele.id', `'#${id}'`);
        }
        return js && js.trim();
    },
};
