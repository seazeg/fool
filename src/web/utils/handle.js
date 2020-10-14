/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2020-10-14 09:56:26
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
                html = html.replace(/ignoreEle/g, "");
                html = html.replace(/ selected/g, "");
                let result = $(html)
                    .find(".draggable_box")
                    .each(function() {
                        let _this = $(this);
                        let _this_parent = _this.parent();
                        let _this_child = _this.contents();
                        _this.remove();
                        _this_parent.append(_this_child);
                    });

                // return formatter.render(`
                //     <div class="hopeui-row">
                //     ${result.prevObject[0].innerHTML}
                //     </div>
                // `);
                return formatter.render(result.prevObject[0].innerHTML);
                // return formatter.render($ele.html());
                // return "<div>特么是个栅格啊</div>";
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
