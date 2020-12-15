/*
 * @Author       : Evan.G
 * @Date         : 2020-05-18 15:06:51
 * @LastEditTime : 2020-12-15 14:30:10
 * @Description  :
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const navInfo = [
    {
        path: "/editor",
        name: "editor",
        component: () =>
            import(/* webpackChunkName: "button" */ "./components/layout/layout-index.vue"),
    },
    {
        path: "/theme",
        name: "theme",
        component: () =>
            import(/* webpackChunkName: "theme" */ "./theme/theme.vue"),
    },
];

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "*",
            redirect: "/editor",
        },
        ...navInfo,
    ],
});
