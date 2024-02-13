import axios from 'axios';
import {getCurrentUser} from "../services/user.ts";

const isDev = process.env.NODE_ENV === 'development';

const myAxios = axios.create({
    baseURL: isDev ? 'http://localhost:8080/api' : 'http://47.113.227.23:8080/api',
})

myAxios.defaults.withCredentials = true; //设置为true

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    console.log('我要发请求啦');
    return config;
}, function (error) {
    return Promise.reject(error);
});

myAxios.interceptors.response.use(function (response) {
    console.log('我收到你的响应啦');
    console.log(response?.data.code);
    // 未登录则跳转登录页
    if (response?.data?.code === 40100) {
        const redirectUrl = window.location.href;
        window.location.href = `/user/login?=redirect=${redirectUrl}`;
    }
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


// // Add a request interceptor
// myAxios.interceptors.request.use(function (config) {
//     console.log('我要发请求啦');
//     // 在请求中检查是否存在用户 session，如果没有则跳转到登录页
//     const userSession = localStorage.getItem('userSession'); // 假设用户 session 存储在 localStorage 中
//     if (!userSession) {
//         // 如果没有用户 session，则跳转到登录页
//         const redirectUrl = window.location.href;
//         window.location.href = `/user/login?redirect=${encodeURIComponent(redirectUrl)}`;
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });
//
// // Add a response interceptor
// myAxios.interceptors.response.use(function (response) {
//     console.log('我收到你的响应啦');
//     // 检查响应中的状态码，如果是未认证（假设状态码为40100），则跳转到登录页
//     if (response?.data?.code === 40100) {
//         const redirectUrl = window.location.href;
//         window.location.href = `/user/login?redirect=${encodeURIComponent(redirectUrl)}`;
//     }
//     return response.data;
// }, function (error) {
//     // 处理响应错误
//     return Promise.reject(error);
// });





export default myAxios;