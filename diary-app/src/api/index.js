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
        headers : {
            "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: obj
    });
}

//读取日记
export function getDiaryList() {
    return axios.get('/user/list');
}

//读取单个日记详情
export function getDiaryDetail(_id) {
    return axios.get('/user/detail/'+_id);
}

//删除日记
export function delDiaryDetail(_id) {
    return axios.get('/user/delete/'+_id);
}

//更新日记
export function upDateDiaryAPI(obj,_id) {
    return axios({
        method: 'post',
        url: '/user/update/'+_id,
        headers : {
            "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: obj
    });
}