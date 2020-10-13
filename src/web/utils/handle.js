/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2020-10-13 16:21:10
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
                let $ele = $(`.${ele.id}`);
                
                return formatter.render($ele.html())
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
