/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2020-09-30 16:36:26
 * @Description  :
 */
import formatter from "./html-formatter";
import { utils } from "./utils.js";

export const handle = {
    reduceHTML: (ele) => {
        try {
            let html = ele.html,
                id = ele.id;
            html = html.replace(/ele.id/g, ele.id);
            return formatter.render(html);
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
        return js;
    },
};
