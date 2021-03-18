/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2021-03-18 15:27:16
 * @Description  :
 */

import { utils } from "./utils.js";
import beautify from "js-beautify";
import format from "./html-formatter";

export const handle = {
    reduceHTML: (ele) => {
        try {
            let result = $(`.${ele.id}`).find('.htmlCache').text();
            result = result.replace(`contenteditable="true"`,"")
            return format.render(result);
        } catch (error) {}

        // try {
        //     if (!ele.name.includes("grid")) {
        //         return format.render(ele.html);
        //     } else {
        //         let html = $("#preview").html();
        //         html = html.replace(/ hope_([A-Za-z0-9]*)/g, "");
        //         html = html.replace(/ ignoreEle/g, "");
        //         html = html.replace(/ selected/g, "");
        //         let filterData = $(html)
        //             .find(".draggable_box")
        //             .each(function() {
        //                 let _this = $(this);
        //                 let _this_parent = _this.parent();
        //                 let _this_child = _this.contents();
        //                 _this.remove();
        //                 _this_parent.append(_this_child);
        //             });

        //         let controlProcess = $(filterData.prevObject[0].innerHTML)
        //             .find(".controls_block")
        //             .each(function() {
        //                 let _this = $(this);
        //                 let htmlCache = $(this)
        //                     .find(".htmlCache")
        //                     .text();
        //                 let _this_parent = _this.parent();
        //                 _this.remove();
        //                 _this_parent.append(htmlCache);
        //             });
        //         let result = $('<div id="tmp"></div>').html(
        //             controlProcess.prevObject[0]
        //         );

        //         return beautify.html(result.html());
        //     }
        // } catch (error) {}
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
            let result = ele.script(ele);
            result = result.replace(/return [A-Za-z0-9 | ;]*/gi, "");
            return beautify(result && result.trim());
        } catch (error) {}
    },
};
