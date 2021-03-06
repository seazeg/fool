import {utils} from '../../../utils/utils.js'
let basis = {
    mainColor: utils.getRandomColor(),
    subColor: utils.getRandomColor(),
};
export const ImagerParams = {
    name: "图片",
    label: "hope_imager",
    icon: "icon-anniu",
    isSelected: false,
    spcConfig:{
        isPer: {
            width: true,
            height: true,
        },
        isAutoLineHeight: true,
    },
    event: "hover",
    defaultClass: "hope_imager",
    customClass: "inner_img",
    cssInherit: " ",
    uploadImg:
        "http://attach.bbs.miui.com/forum/201105/17/113554rnu40q7nbgnn3lgq.jpg",
    style: {
        width: "100%",
        height: "100%",
        transitionDelay: "0s",
        transitionDuration: "0.5s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        borderStyle: "solid",
        borderWidth: "0px",
        borderColor: basis.mainColor,
    },
    effect: {
        width: "100%",
        height: "100%",
        transitionDelay: "0s",
        transitionDuration: "0.5s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        borderStyle: "solid",
        borderWidth: "0px",
        borderColor: basis.mainColor,
        // transform: "scale(1.5)",
    }
};
