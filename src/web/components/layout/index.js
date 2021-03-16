/*
 * @Author       : Evan.G
 * @Date         : 2020-05-27 16:18:38
 * @LastEditTime : 2021-03-16 11:19:33
 * @Description  : 
 */
import Vue from "vue";

const requireComponents = require.context("./", true, /\.vue/);

requireComponents.keys().forEach((fileName) => {
    const reqCom = requireComponents(fileName);
    Vue.component(reqCom.default.name, reqCom.default || reqCom);
});
