/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2020-09-15 15:31:14
 * @Description  : 
 */
import formatter from "./html-formatter";
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
            html = html.replace(/ theme-border /g, " ");
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
    getCSS: (controls) => {
        let css = "";
        return (function func(cls) {
            for (let ele of cls) {
                let customClass = ele.customClass
                        ? `.${ele.customClass}`
                        : `${ele.customClass}`,
                    effect = ele.effect,
                    style = ele.style,
                    defaultClass = ele.defaultClass,
                    event = ele.event,
                    cssInherit = ele.cssInherit || "",
                    filterCSS = {};

                filterCSS = utils.json2css(style);
                if (!css.includes(filterCSS)) {
                    css += `.${defaultClass}${cssInherit}${customClass}{${filterCSS}}`;
                }

                if (event) {
                    let eventCSS = utils.getEndEffect(style, effect);
                    if (!css.includes(eventCSS)) {
                        css += `.${defaultClass}${cssInherit}${customClass}:${event}{${eventCSS}}`;
                    }
                }

                if (ele.children && ele.children.length > 0) {
                    func(ele.children);
                }
            }

            return utils.cssFormat(utils.filterParamsZero(css));
        })(controls);
    },
    dragEndMethod: (vue, ele) => {},
};
