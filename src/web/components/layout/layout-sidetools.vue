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
                <a class="iconfont" :class="ele.icon">
                    {{ ele.name }}
                </a>
            </div>
        </draggable>
    </div>
</template>
<script>
export default {
    name: "layout-sidetools",
    computed: {
        controls:function() {
            let basis = {
                mainColor: "#41B883",
                subColor: "#e2574c",
            };
            return [
                {
                    name: "Button",
                    label: "hope_button",
                    icon: "icon-anniu",
                    style: {
                        width: "200px",
                        height: "50px",
                        "line-height": "50px",
                        "text-align": "center",
                        "transition-delay": "0s",
                        "transition-duration": "0.5s",
                        "transition-property": "all",
                        "transition-timing-function": "ease",
                        "background-color": basis.mainColor,
                        color: "#ffffff",
                        "border-style": "solid",
                        "border-width": "0",
                        "border-color": basis.mainColor,
                        "border-radius": "0",
                        "font-size": "14px",
                    },
                    effect: {
                        width: "200px",
                        height: "50px",
                        "line-height": "50px",
                        "text-align": "center",
                        "transition-delay": "0s",
                        "transition-duration": "0.5s",
                        "transition-property": "all",
                        "transition-timing-function": "ease",
                        "background-color": basis.subColor,
                        color: "#ffffff",
                        "border-style": "solid",
                        "border-width": "0",
                        "border-color": basis.subColor,
                        "border-radius": "10px",
                        "font-size": "14px",
                    },
                },
            ];
        },
    },
    methods: {
        clone(o) {
            return {
                id: this.$set(o, "id", Math.random() * 100),
                ...o,
            };
        },
    },
};
</script>
