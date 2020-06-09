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
                    name: "栅格200px",
                    label: "hope_grid",
                    icon: "icon-anniu",
                    isSelected: false,
                    style: {
                        minWidth: "500px",
                        height: "100%",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        float:'left'
                    },
                    effect: {},
                    children: [],
                },
                {
                    name: "栅格1000px",
                    label: "hope_grid",
                    icon: "icon-anniu",
                    isSelected: false,
                    style: {
                        minWidth: "1000px",
                        height: "100%",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                         float:'left'
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
