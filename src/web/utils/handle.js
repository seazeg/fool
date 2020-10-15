/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2020-10-15 16:45:08
 * @Description  :
 */

import { utils } from "./utils.js";
import beautify from "js-beautify";

export const handle = {
    reduceHTML: (ele) => {
        try {
            if (!ele.name.includes("grid")) {
                return beautify.html(ele.html);
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

                return beautify.html(result.html());
            }
        } catch (error) {}
    },
    getCSS: (ele) => {
        try {
            if (!ele.name.includes("grid")) {
                let css = ele.styleSheet;
                return beautify.css(utils.json2css(css));
            } else {
                let result = "";
                $("#preview")
                    .find("style")
                    .each(function() {
                        result += $(this).text();
                    });
                result = result.replace(/.hope_([A-Za-z0-9]*)/g, "");

                return beautify.css(utils.json2css(result.trim()));
            }
        } catch (error) {}
    },
    getJS: (ele) => {
        try {
            if (!ele.name.includes("grid")) {
                let js = ele.script,
                    id = ele.id;
                if (js) {
                    js = js.replace('"." + _this.ele.id', `'.${id}'`);
                    js = js.replace('"#" + _this.ele.id', `'#${id}'`);
                }
                return beautify(js && js.trim());
            } else {
                let result = "";
                $("#preview")
                    .find(".jsCache")
                    .each(function() {
                        result += $(this)
                            .text()
                            .replace(
                                '"." + _this.ele.id',
                                `'.${$(this).attr("data-id")}`
                            )
                            .replace(
                                '"#" + _this.ele.id',
                                `'#${$(this).attr("data-id")}'`
                            );
                    });
                return beautify(result && result.trim());
            }
        } catch (error) {}
    },
};
