let basis = {
    mainColor: "rgba(65, 184, 131, 1)",
    subColor: "rgba(165, 184, 131, 1)",
};
export const ButtonParams = {
    name: "按钮",
    label: "hope_button",
    icon: "icon-anniu",
    isSelected: false,
    spcConfig: {
        isPer: {
            width: false,
            height: false,
        },
        isAutoLineHeight: true,
    },
    event: "hover",
    defaultClass: "hope_button",
    customClass: "",
    style: {
        width: "150px",
        height: "50px",
        lineHeight: "50px",
        transitionDelay: "0s",
        transitionDuration: "0.5s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        backgroundColor: basis.mainColor,
        color: "rgba(255,255,255,1)",
        borderStyle: "solid",
        borderWidth: "0px",
        borderColor: basis.mainColor,
        borderRadius: "10px",
        fontSize: "14px",
        backgroundImage: `linear-gradient(90deg, ${basis.mainColor} 0%, ${
            basis.subColor
        } 51%, ${basis.mainColor} 100%)`,
        backgroundSize: "200% auto",
    },
    effect: {
        width: "150px",
        height: "50px",
        lineHeight: "50px",
        transitionDelay: "0s",
        transitionDuration: "0.5s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        animationDuration: "0.5s",
        animationName: "",
        backgroundColor: basis.mainColor,
        color: "rgba(255,255,255,1)",
        borderStyle: "solid",
        borderWidth: "0px",
        borderColor: basis.mainColor,
        borderRadius: "10px",
        fontSize: "14px",
        backgroundImage: `linear-gradient(90deg, ${basis.mainColor} 0%, ${
            basis.subColor
        } 51%, ${basis.mainColor} 100%)`,
        backgroundSize: "200% auto",
        backgroundPosition: "right center",
    },
};
