import {utils} from '../../../utils/utils.js'
let basis = {
    mainColor: utils.getRandomColor(),
    subColor: utils.getRandomColor(),
};
export const InputParams = {
    name: "文本框",
    label: "hope_input",
    icon: "icon-anniu",
    isSelected: false,
    spcConfig:{
        isPer: {
            width: true,
            height: false,
        },
        isAutoLineHeight: true,
    },
    event: "focus",
    defaultClass: "hope_input",
    customClass: "",
    placeholder: "请输入",
    style: {
        width: "100%",
        height: "50px",
        color: "#333",
        fontSize: "16px",
        borderColor: basis.mainColor,
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "5px",
        paddingLeft:"10px",
        paddingRight:"10px"
    },
    effect: {
        width: "100%",
        height: "50px",
        color: "#333",
        fontSize: "16px",
        borderColor: basis.subColor,
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "5px",
        paddingLeft:"10px",
        paddingRight:"10px"
    }
};
