<template>
    <div class="page">
        <form enctype="multipart/form-data" class="content-scroll" @submit.prevent="onSubmit">
            <h2>注册</h2>
            <div>
                <label for="inputUserName">用户名</label>
                <div>
                        <span>
                            <i class="iconfont icon-people_fill"></i>
                        </span>
                    <input type="text" id="inputUserName" placeholder="Username" name="username" required autofocus v-model="username">
                </div>
            </div>
            <div >
                <label for="inputPassword">密码</label>
                <div>
                        <span>
                            <i class="iconfont icon-browse_fill"></i>
                        </span>
                    <input type="password" id="inputPassword" placeholder="Password" name="password" required v-model="password">
                </div>
            </div>
            <div>
                <label for="inputEmail">邮箱</label>
                <div>
                        <span>
                            <i class="iconfont icon-mail_fill"></i>
                        </span>
                    <input type="email" id="inputEmail" placeholder="Email address" name="email" required v-model="email">
                </div>
            </div>
            <div>
                <label for="inputAvatar">头像</label>
                <div>
                        <span>
                            <i class="iconfont icon-picture_fill"></i>
                        </span>
                    <input type="file" id="inputAvatar" name="avatar" required @change="onChange">
                </div>
            </div>
            <div>
                <div>
                    <button type="submit">提交</button>
                </div>
            </div>
        </form>
        <Message></Message>
        <SignTab></SignTab>
    </div>
</template>
<script>
    import SignTab from '../components/SignTab.vue' ;
    import Message from '../components/Message.vue' ;
    import {userSignup} from '../api';
    import {mapMutations} from 'vuex';
    import * as types from '../vuex/mutation-types';
    export default {
        data() {
            return {
                username:'',
                password:'',
                email:'',
                avatar:''
            }
        },
        computed: {},
        components: {SignTab,Message},
        methods: {
            onChange($event){
                //this.avatar = JSON.stringify($event.target.files[0]);
                this.avatar = URL.createObjectURL($event.target.files[0]);
            },
            ...mapMutations([types.ADD_Message]),
            onSubmit(){
                userSignup({
                    username:this.username,
                    password:this.password,
                    email:this.email,
                    avatar:this.avatar
                }).then((res)=>{
                    if("success" in res.data){
                        this[types.ADD_Message](res.data.success);
                        this.$router.push('/signin');
                    }
                    else {
                        this[types.ADD_Message](res.data.error);
                        this.$router.replace('/signup');
                        this.username=this.password=this.email="";
                    }
                },(err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style scoped lang="less">
form{
    width: 80%;
    margin-top: .2rem;
    margin-left: 10%;
    h2{
        height: .5rem;
        line-height: .5rem;
        font-size: .35rem;
        margin-bottom: .2rem;
    }
    div{
        label{
            display: inline-block;
            width: .48rem;
            font-size: .15rem;
        }
        div{
            display: inline-block;
            width: 2.6rem;
            span{
                margin-right: .05rem;
                i{
                    font-size: .2rem;
                }
            }
            input{
                outline: 1px solid #404040;
                font-size: .16rem;
                width: 2rem;
                height: .3rem;
            }
            input[type="file"] {
                /*color: transparent;*/
                width: 2rem;
                font-size: .14rem;
                outline: none;
                background-color: #63c0a1;
                border-radius: .05rem;
            }
        }
    }
}
form>div{
    line-height: .5rem;
    border-bottom: 2px dashed dimgray;
}
form>div:last-child{
    border-bottom: none;
    margin-top: .3rem;
    div{
        width: 80%;
        margin-left: 10%;
        button{
            width: 100%;
            height: .4rem;
            font-size: .2rem;
            background-color: #6bc1e6;
        }
    }
}
</style>