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
    getCSS: (controls, filter) => {
        let css = "";
        return (function func(cls, filter) {
            for (let ele of cls) {
                if (ele.children && ele.children.length > 0) {
                    func(ele.children, filter);
                } else {
                    let customClass = ele.customClass
                            ? `.${ele.customClass}`
                            : `${ele.customClass}`,
                        effect = ele.effect,
                        style = ele.style,
                        defaultClass = ele.defaultClass,
                        label = ele.label,
                        event = ele.event,
                        filterCSS = {};

                    if (filter) {
                        Object.keys(filter).forEach(function(filterKey) {
                            if (filterKey == label) {
                                Object.keys(style).forEach(function(key) {
                                    if (!key.includes(filter[filterKey])) {
                                        filterCSS[key] = style[key];
                                    }
                                });
                            } else {
                                filterCSS = style;
                            }
                        });
                    }

                    css += `.${defaultClass}${customClass}{${utils.json2css(
                        filterCSS
                    )}}`;

                    if (event) {
                        css += `.${defaultClass}${customClass}:${event}{${utils.getEndEffect(
                            style,
                            effect
                        )}}`;
                    }
                }
            }
            return utils.cssFormat(css);
        })(controls, filter);
    },
};
