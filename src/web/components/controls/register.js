import Vue from "vue";

const requireComponents = require.context("./", true, /\.vue/);

requireComponents.keys().forEach((fileName) => {
    const reqCom = requireComponents(fileName);
    Vue.component(reqCom.default.name, reqCom.default || reqCom);
});
