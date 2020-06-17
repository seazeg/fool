let basis = {
    mainColor: "rgb(65, 184, 131)",
    subColor: "rgb(165, 184, 131)",
};
export const ButtonParams = {
    name: "按钮",
    label: "hope_button",
    icon: "icon-anniu",
    isSelected: false,
    event: "hover",
    defaultClass:"hope_input",
    customClass: "",
    style: {
        width: "150px",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        transitionDelay: "0s",
        transitionDuration: "0.5s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        backgroundColor: basis.mainColor,
        color: "rgb(255,255,255)",
        borderStyle: "solid",
        borderWidth: "0px",
        borderColor: basis.mainColor,
        borderRadius: "10px",
        fontSize: "14px",
        backgroundImage: `linear-gradient(90deg, ${basis.mainColor} 0%, ${basis.subColor} 51%, ${basis.mainColor} 100%)`,
        backgroundSize: "200% auto",
    },
    effect: {
        width: "150px",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        transitionDelay: "0s",
        transitionDuration: "0.5s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        animationDuration: "0.5s",
        animationName: "",
        backgroundColor: basis.mainColor,
        color: "rgb(255,255,255)",
        borderStyle: "solid",
        borderWidth: "0px",
        borderColor: basis.mainColor,
        borderRadius: "10px",
        fontSize: "14px",
        backgroundImage: `linear-gradient(90deg, ${basis.mainColor} 0%, ${basis.subColor} 51%, ${basis.mainColor} 100%)`,
        backgroundSize: "200% auto",
        backgroundPosition: "right center",
    },
};
