const formatter = require("html-formatter");
import { utils } from "./utils.js";

export const handle = {
    reduceHTML: (html) => {
        try {
            const style = /style\s*?=\s*?([‘"])[\s\S]*?\1/g;
            const datav = /data-v-([A-Za-z0-9]*)=""/g;
            const draggable = /draggable="false"/g;
            const customClass = /custom-class\s*?=\s*?([‘"])[\s\S]*?\1/g;
            const effect = /data-effect\s*?=\s*?([‘"])[\s\S]*?\1/g;
            const mycss = /data-css\s*?=\s*?([‘"])[\s\S]*?\1/g;
            const label = /data-label\s*?=\s*?([‘"])[\s\S]*?\1/g;
            html = html.replace(style, "");
            html = html.replace(datav, "");
            html = html.replace(draggable, "");
            html = html.replace(" selected", "");
            html = html.replace(customClass, "");
            html = html.replace(effect, "");
            html = html.replace(mycss, "");
            html = html.replace(label, "");
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
    pullCSS: (html, filter) => {
        try {
            const style = /style\s*?=\s*?([‘"])[\s\S]*?\1/g;
            let css = "";
            for (let line of html.match(style)) {
                let filterCSS = {};
                let o = $(html).find(
                        `[style=${line.match(/\"([^\"]*)\"/)[0]}]`
                    ),
                    e = o.attr("data-effect"),
                    s = o.attr("data-css"),
                    className = o.attr("custom-class")
                        ? `.${o.attr("custom-class")}`
                        : `${o.attr("custom-class")}`;

                if (filter) {
                    Object.keys(filter).forEach(function(filterKey) {
                        if (filterKey == o.eq(0).attr("data-label")) {
                            Object.keys(JSON.parse(s)).forEach(function(key) {
                                if (!key.includes(filter[filterKey])) {
                                    filterCSS[key] = JSON.parse(s)[key];
                                }
                            });
                        }else{
                            filterCSS = JSON.parse(s)
                        }
                    });
                }
      
                css += `.${o[0].classList[0]}${className}{${utils.json2css(
                    filterCSS
                )}}`;

                if (e && s) {
                    css += `.${
                        o[0].classList[0]
                    }${className}:hover{${utils.getEndEffect(
                        JSON.parse(s),
                        JSON.parse(e)
                    )}}`;
                }
            }
            return utils.cssFormat(css);
        } catch (error) {}
    },
};
