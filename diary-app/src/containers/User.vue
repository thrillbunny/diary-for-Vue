<template>
    <div class="page">
        <m-header title="个人中心"></m-header>
        <div class="content-scroll userInfo">
            <img class="user" :src="avatar" alt="">
            <p>账号名：{{username}}</p>
            <p>邮箱：{{email}}</p>
            <p>
                <button @click="onClick">退出账号</button>
            </p>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
    import MHeader from '../components/Mheader.vue';
    import Tab from '../components/Tab.vue' ;
    import {userSignout,getUserInfo} from '../api';
    export default {
        data() {
            return {
                username:'',
                email:'',
                avatar:''
            }
        },
        created(){
            getUserInfo().then(res=>{
                this.username=res.data.username;
                this.email=res.data.email;
                this.avatar=res.data.avatar;
            },(err)=>{
                console.log(err);
            });
        },
        computed: {},
        components: {MHeader,Tab},
        methods: {
            onClick(){
                userSignout().then(res=>{
                    this.$router.push('/signin');
                },(err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .userInfo{
        width: 80%;
        margin-left: 10%;
        margin-top: 1rem;
        text-align: center;
        height: 5rem;
        img{
            display: block;
            width: 2rem;
            height: 2rem;
            margin-left: .6rem;
            border: 1px solid dimgrey;
            border-radius: 50%;
        }
        p{
            font-size: .2rem;
            height: .5rem;
            line-height: .5rem;
            button{
                display: block;
                margin-left: 1.1rem;
                width: 1.2rem;
                height: 100%;
                border-radius: 5px;
                background-color: #b10f2f;
                color: white;
            }
        }
    }
</style>