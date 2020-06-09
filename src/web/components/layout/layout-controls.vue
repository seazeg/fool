<template>
    <div class="layout-controls">
        <span class="operate iconfont icon-youshuangjiantou"></span>
        <draggable
            class="group"
            :list="controls"
            :group="{ name: 'controls', pull: 'clone', put: false }"
            :clone="clone"
            :sort="false"
        >
            <div class="box" v-for="(ele, i) in controls" :key="i">
                <i class="iconfont" :class="ele.icon"> </i>
                <span> {{ ele.name }}</span>
            </div>
        </draggable>
    </div>
</template>
<script>
import _ from "lodash";
export default {
    name: "layout-controls",
    computed: {
        controls: function() {
            let basis = {
                mainColor: "rgba(65, 184, 131, 1)",
                subColor: "rgba(165, 184, 131, 1)",
            };
            return [
                {
                    name: "按钮",

                    label: "hope_button",
                    icon: "icon-anniu",
                    isSelected: false,
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
                        color: "#ffffff",
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
                        backgroundColor: basis.subColor,
                        color: "#ffffff",
                        borderStyle: "solid",
                        borderWidth: "0px",
                        borderColor: basis.subColor,
                        borderRadius: "10px",
                        fontSize: "14px",
                        backgroundImage: `linear-gradient(90deg, ${basis.mainColor} 0%, ${basis.subColor} 51%, ${basis.mainColor} 100%)`,
                        backgroundSize: "200% auto",
                        backgroundPosition: "right center",
                    },
                },
                {
                    name: "栅格25%",
                    label: "hope_grid",
                    icon: "icon-anniu",
                    isSelected: false,
                    style: {
                        width: "25%",
                        height: "100%",
                        borderWidth: "5px",
                        borderStyle: "dashed",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        display: "inline-block",
                        fontSize: "0",
                        verticalAlign: "top",
                    },
                    effect: {},
                    children: [],
                },
                {
                    name: "栅格33%",
                    label: "hope_grid",
                    icon: "icon-anniu",
                    isSelected: false,
                    style: {
                        width: "33.333333333%",
                        height: "100%",
                        borderWidth: "5px",
                        borderStyle: "dashed",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        display: "inline-block",
                        fontSize: "0",
                        verticalAlign: "top",
                    },
                    effect: {},
                    children: [],
                },

                {
                    name: "栅格100%",
                    label: "hope_grid",
                    icon: "icon-anniu",
                    isSelected: false,
                    style: {
                        width: "100%",
                        height: "100%",
                        borderWidth: "5px",
                        borderStyle: "dashed",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        verticalAlign: "top",
                    },
                    effect: {},
                    children: [],
                },
            ];
        },
    },
    methods: {
        clone(o) {
            return {
                id: this.$set(o, "id", this.$egu.guid()),
                ..._.cloneDeep(o),
            };
        },
    },
};
</script>
