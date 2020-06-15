import axios from "axios";
import qs from "qs";

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 设istrsidssdssotoken置跨域代理接口统一的前置地址
    timeout: 20000,
    headers: {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
});

// 添加请求拦截器
request.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function(response) {
        return response.data;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

let http = {
    get: (url, data) =>
        request.get(url, {
            params: data,
        }),
    post: (url, data) => request.post(url, qs.stringify(data)),
};

export default http;
