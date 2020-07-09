import {utils} from '../../../utils/utils.js'
let basis = {
    mainColor: utils.getRandomColor(),
    subColor: utils.getRandomColor(),
};
export const TextParams = {
    name: "内容块",
    label: "hope_text",
    icon: "icon-anniu",
    isSelected: false,
    spcConfig: {
        isPer: {
            width: true,
            height: true,
        },
        isAutoLineHeight: false,
    },
    event: "hover",
    defaultClass: "hope_text",
    customClass: "",
    style: {
        width: "100%",
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: 0,
        fontWeight: 0,
        fontStyle: "normal",
        color: basis.mainColor,
    },
    effect: {
        width: "100%",
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: 0,
        fontWeight: 0,
        fontStyle: "normal",
        color: basis.subColor,
    },
};
