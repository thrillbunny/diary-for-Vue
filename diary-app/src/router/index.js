import Vue from 'vue'
import Router from 'vue-router'
import List from '../containers/List.vue'
import User from '../containers/User.vue'
import Add from '../containers/Add.vue'
import Detail from '../containers/Detail.vue'
import Signup from '../containers/Signup.vue'
import Signin from '../containers/Signin.vue'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path:'/signup',
            component:Signup
        },
        {
            path:'/signin',
            component:Signin
        },
        {
            path:'/list',
            component:List
        },
        {
            path:'/user',
            component:User
        },
        {
            path:'/add',
            component:Add
        },
        {
            path:'/detail',
            component:Detail
        },
        {
            path:'*',//当以上路径都不匹配 跳转到登陆页
            redirect:'/signup'
        }
    ],
    //更改默认的名字
    linkActiveClass:'active'
})
