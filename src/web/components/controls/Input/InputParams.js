let basis = {
    mainColor: "rgb(65, 184, 131)",
    subColor: "rgb(165, 184, 131)",
};
export const InputParams = {
    name: "文本框",
    label: "hope_input",
    icon: "icon-anniu",
    isSelected: false,
    event: "focus",
    defaultClass: "hope_input",
    customClass: "",
    placeholder: "请输入",
    style: {
        width: "100%",
        height: "50px",
        color: "#333",
        fontSize: "16px",
        borderColor: basis.subColor,
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "5px",
    },
    effect: {
        width: "100%",
        height: "50px",
        color: "#333",
        fontSize: "16px",
        borderColor: "rgb(255,0,0)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "5px",
    },
    layout: {
        paddingLeft:"10px",
        paddingRight:"10px"
    },
};