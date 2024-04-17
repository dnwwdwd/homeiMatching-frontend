import axios from 'axios';

const myAxios = axios.create({
    baseURL: 'http://localhost:8081/api',
})

myAxios.defaults.withCredentials = true; //设置为true

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
        window.location.href = 'http://localhost:8080/#/login';
    }
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;