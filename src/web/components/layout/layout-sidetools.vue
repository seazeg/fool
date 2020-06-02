<template>
    <div class="layout-sidetools">
        <span class="operate iconfont icon-youshuangjiantou"></span>
        <draggable
            class="group"
            :list="controls"
            :group="{ name: 'controls', pull: 'clone', put: false }"
            :clone="clone"
        >
            <div class="box" v-for="(ele, i) in controls" :key="i">
                <i class="iconfont" :class="ele.icon"> </i>
                <span> {{ ele.name }}</span>
            </div>
        </draggable>
    </div>
</template>
<script>
export default {
    name: "layout-sidetools",
    computed: {
        controls: function() {
            let basis = {
                mainColor: "#41B883",
                subColor: "#e2574c",
            };
            return [
                {
                    name: "按钮",
                    label: "hope_button",
                    icon: "icon-anniu",
                    style: {
                        width: "200px",
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
                        borderEadius: "0px",
                        fontSize: "14px",
                        backgroundImage: `linear-gradient(to right, ${basis.mainColor} 0%, ${basis.subColor} 51%, ${basis.mainColor} 100%)`,
                        backgroundSize: "200% auto",
                    },
                    effect: {
                        width: "200px",
                        height: "50px",
                        lineHeight: "50px",
                        textAlign: "center",
                        transitionDelay: "0s",
                        transitionDuration: "0.5s",
                        transitionProperty: "all",
                        transitionTimingFunction: "ease",
                        backgroundColor: basis.subColor,
                        color: "#ffffff",
                        borderStyle: "solid",
                        borderWidth: "0px",
                        borderColor: basis.subColor,
                        borderEadius: "0px",
                        fontSize: "14px",
                        backgroundImage: `linear-gradient(to right, ${basis.mainColor} 0%, ${basis.subColor} 51%, ${basis.mainColor} 100%)`,
                        backgroundSize: "200% auto",
                        backgroundPosition: "right center",
                    },
                },
            ];
        },
    },
    methods: {
        clone(o) {
            console.log(o);
            return {
                id: this.$set(o, "id", this.$egu.guid()),
                ...o,
            };
        },
    },
};
</script>
