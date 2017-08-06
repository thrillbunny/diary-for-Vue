<template>
    <div class="page">
        <form class="content-scroll" @submit.prevent="onSubmit">
            <h2>登陆</h2>
            <div>
                <label for="inputUserName">用户名</label>
                <div>
                        <span>
                            <i class="iconfont icon-people_fill"></i>
                        </span>
                    <input type="text" id="inputUserName" placeholder="Username" name="username" required v-model="username">
                </div>
            </div>
            <div>
                <label for="inputPassword">密码</label>
                <div>
                        <span>
                            <i class="iconfont icon-browse_fill"></i>
                        </span>
                    <input type="password" id="inputPassword" placeholder="Password" name="password" required v-model="password">
                </div>
            </div>
            <div>
                <div>
                    <button type="submit">提交</button>
                </div>
            </div>
        </form>
        <Message></Message>
        <p v-if="message" class="message">{{message}}</p>
        <SignTab></SignTab>
    </div>
</template>
<script>
    import SignTab from '../components/SignTab.vue' ;
    import Message from '../components/Message.vue' ;
    import {userSignin} from '../api';
    import {mapMutations} from 'vuex';
    import * as types from '../vuex/mutation-types';
    export default {
        data() {
            return {
                username:'',
                password:'',
                message:''
            }
        },
        computed: {},
        components: {SignTab,Message},
        methods: {
            ...mapMutations([types.ADD_Message]),
            onSubmit(){
                userSignin({
                    username:this.username,
                    password:this.password,
                }).then((res)=>{
                    if("error" in res.data){
                        this.message = res.data.error;
                        this.$router.replace('/signin');
                        this.username=this.password="";
                    }
                    else {
                        //this[types.ADD_Message](res.data.success);
                        this.$router.push('/user');
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
        margin-top: .4rem;
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