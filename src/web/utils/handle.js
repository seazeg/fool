const formatter = require("html-formatter");
import { utils } from "./utils.js";

export const handle = {
    reduceHTML: (html) => {
        try {
            const style = /style\s*?=\s*?([‘"])[\s\S]*?\1/g;
            const datav = /data-v-([A-Za-z0-9]*)=""/g;
            const draggable = /draggable="false"/g;
            html = html.replace(style, "");
            html = html.replace(datav, "");
            html = html.replace(draggable, "");
            html = html.replace(" selected", "");
            let result = $(html)
                .find(".draggable_box")
                .each(function() {
                    let _this = $(this);
                    let _this_parent = _this.parent();
                    let _this_child = _this.contents();
                    _this.remove();
                    _this_parent.append(_this_child);
                });
            return formatter.render(result.prevObject[0].innerHTML);
        } catch (error) {}
    },
    pullCSS: (html) => {
        try {
            const style = /style\s*?=\s*?([‘"])[\s\S]*?\1/g;
            let css = "";
            for (let s of html.match(style)) {
                let className = $(html).find(
                    `[style=${s.match(/\"([^\"]*)\"/)[0]}]`
                )[0].classList[0];
                css += `.${className}{${s.match(/\"([^\"]*)\"/)[1]}}`;
            }
            return utils.cssFormat(css);
        } catch (error) {}
    },
};
