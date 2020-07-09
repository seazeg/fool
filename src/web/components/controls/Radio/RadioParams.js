import {utils} from '../../../utils/utils.js'
let basis = {
    mainColor: utils.getRandomColor(),
    subColor: utils.getRandomColor(),
};
export const RadioParams = {
    name: "单选框",
    label: "hope_radio",
    icon: "icon-anniu",
    isSelected: false,
    spcConfig:{
        isPer: {
            width: true,
            height: true,
        },
        isAutoLineHeight: true,
    },
    event: "",
    defaultClass: "hope_radio",
    customClass: "",
    style: {
        width: "100px",
        color: "rgb(255,255,255)",
        fontSize: "16px",
    },
    effect: { width: "100px", color: basis.mainColor, fontSize: "16px" },
};
