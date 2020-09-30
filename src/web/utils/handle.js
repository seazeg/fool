/*
 * @Author       : Evan.G
 * @Date         : 2020-07-09 17:02:39
 * @LastEditTime : 2020-09-30 16:02:58
 * @Description  :
 */
import formatter from "./html-formatter";
import { utils } from "./utils.js";

export const handle = {
    reduceHTML: (ele) => {
        try {
            let html = ele.html,
                id = ele.id;
            html = html.replace(/ele.id/g, ele.id)
            return formatter.render(html);
        } catch (error) {}
    },
    getCSS: (ele) => {
        let css = ele.styleSheet
        // let css = "";
        // return (function func(cls) {
        //     for (let ele of cls) {
        //         let customClass = ele.customClass
        //                 ? `.${ele.customClass}`
        //                 : `${ele.customClass}`,
        //             effect = ele.effect,
        //             style = ele.style,
        //             defaultClass = ele.defaultClass,
        //             event = ele.event,
        //             cssInherit = ele.cssInherit || "",
        //             filterCSS = {};

        //         filterCSS = utils.json2css(style);
        //         if (!css.includes(filterCSS)) {
        //             css += `.${defaultClass}${cssInherit}${customClass}{${filterCSS}}`;
        //         }

        //         if (event) {
        //             let eventCSS = utils.getEndEffect(style, effect);
        //             if (!css.includes(eventCSS)) {
        //                 css += `.${defaultClass}${cssInherit}${customClass}:${event}{${eventCSS}}`;
        //             }
        //         }

        //         if (ele.children && ele.children.length > 0) {
        //             func(ele.children);
        //         }
        //     }
        return utils.cssFormat(utils.json2css(css));
            // return utils.cssFormat(utils.filterParamsZero(css));
        // })(controls);
    },
    dragEndMethod: (vue, ele) => {},
};
