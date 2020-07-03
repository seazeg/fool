let basis = {
    mainColor: "rgb(65, 184, 131)",
    subColor: "rgb(165, 184, 131)",
};
export const GridParams = {
    g_2: {
        name: "双栏",
        label: "hope_grid",
        icon: "icon-anniu",
        isSelected: false,
        spcConfig: {
            isPer: {
                width: true,
                height: true,
            },
            isAutoLineHeight: false,
        },
        event: "",
        defaultClass: "hope_grid",
        customClass: "g_100",
        style: {
            width: "100%",
            height: "auto",
        },
        effect: {},
        children: [
            {
                name: "2_1",
                label: "hope_grid",
                icon: "icon-anniu",
                isSelected: false,
                spcConfig: {
                    isPer: {
                        width: true,
                        height: false,
                    },
                    isAutoLineHeight: false,
                },
                event: "",
                defaultClass: "hope_grid",
                customClass: "g_50",
                style: {
                    width: "50%",
                    height: "500px",
                },
                effect: {},
                children: [],
            },
            {
                name: "2_2",
                label: "hope_grid",
                icon: "icon-anniu",
                isSelected: false,
                spcConfig: {
                    isPer: {
                        width: true,
                        height: false,
                    },
                    isAutoLineHeight: false,
                },
                event: "",
                defaultClass: "hope_grid",
                customClass: "g_50",
                style: {
                    width: "50%",
                    height: "500px",
                },
                effect: {},
                children: [],
            },
        ],
    },
    g_3: {
        name: "三栏",
        label: "hope_grid",
        icon: "icon-anniu",
        isSelected: false,
        spcConfig: {
            isPer: {
                width: true,
                height: false,
            },
            isAutoLineHeight: false,
        },
        event: "",
        defaultClass: "hope_grid",
        customClass: "g_100",
        style: {
            width: "100%",
            height: "100%",
        },
        effect: {},
        children: [
            {
                name: "3_1",
                label: "hope_grid",
                icon: "icon-anniu",
                isSelected: false,
                spcConfig: {
                    isPer: {
                        width: true,
                        height: false,
                    },
                    isAutoLineHeight: false,
                },
                event: "",
                defaultClass: "hope_grid",
                customClass: "g_30",
                style: {
                    width: "33.3333%",
                    height: "500px",
                },
                effect: {},
                children: [],
            },
            {
                name: "3_2",
                label: "hope_grid",
                icon: "icon-anniu",
                isSelected: false,
                spcConfig: {
                    isPer: {
                        width: true,
                        height: false,
                    },
                    isAutoLineHeight: false,
                },
                event: "",
                defaultClass: "hope_grid",
                customClass: "g_30",
                style: {
                    width: "33.3333%",
                    height: "500px",
                },
                effect: {},
                children: [],
            },
            {
                name: "3_3",
                label: "hope_grid",
                icon: "icon-anniu",
                isSelected: false,
                spcConfig: {
                    isPer: {
                        width: true,
                        height: false,
                    },
                    isAutoLineHeight: false,
                },
                event: "",
                defaultClass: "hope_grid",
                customClass: "g_30",
                style: {
                    width: "33.3333%",
                    height: "500px",
                },
                effect: {},
                children: [],
            },
        ],
    },
    g_custom: {
        name: "自定栏",
        label: "hope_grid",
        icon: "icon-anniu",
        isCustom: true,
        isSelected: false,
        spcConfig: {
            isPer: {
                width: true,
                height: false,
            },
            isAutoLineHeight: false,
        },
        event: "",
        defaultClass: "hope_grid",
        customClass: "g_100",
        style: {
            width: "100%",
            height: "100%",
        },
        effect: {},
        children: [],
    },
};
