import axios from 'axios';

//用户注册
export function userSignup(obj) {
    return axios({
        method: 'post',
        url: '/user/signup',
        data: obj
    });
}

//用户登录
export function userSignin(obj) {
    return axios({
        method: 'post',
        url: '/user/signin',
        data: obj
    });
}

//用户信息
export function getUserInfo() {
    return axios.get('/user/signin');
}

//用户注销
export function userSignout() {
    return axios.get('/user/signout');
}

//增加日记
export function addDiary(obj) {
    return axios({
        method: 'post',
        url: '/user/add',
        data: obj
    });
}

//读取日记
export function getDiaryList() {
    return axios.get('/user/list');
}