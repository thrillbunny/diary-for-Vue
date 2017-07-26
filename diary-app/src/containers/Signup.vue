<template>
    <div class="page">
        <form enctype="multipart/form-data">
            <h2>注册</h2>
            <div>
                <label for="inputUserName">用户名</label>
                <div>
                        <span>
                            <i class="iconfont icon-people_fill"></i>
                        </span>
                    <input type="text" id="inputUserName" placeholder="Username" name="username" required autofocus>
                </div>
            </div>
            <div >
                <label for="inputPassword">密码</label>
                <div>
                        <span>
                            <i class="iconfont icon-browse_fill"></i>
                        </span>
                    <input type="password" id="inputPassword" placeholder="Password" name="password" required>
                </div>
            </div>
            <div>
                <label for="inputEmail">邮箱</label>
                <div>
                        <span>
                            <i class="iconfont icon-mail_fill"></i>
                        </span>
                    <input type="email" id="inputEmail" placeholder="Email address" name="email" required>
                </div>
            </div>
            <div>
                <label for="inputAvatar">头像</label>
                <div>
                        <span>
                            <i class="iconfont icon-picture_fill"></i>
                        </span>
                    <input type="file" id="inputAvatar" placeholder="Avatar" name="avatar" required>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit">提交</button>
                </div>
            </div>
        </form>
        <SignTab></SignTab>
    </div>
</template>
<script>
    import SignTab from '../components/SignTab.vue' ;
    export default {
        data() {
            return {}
        },
        computed: {},
        components: {SignTab},
        methods: {}
    }
</script>
<style scoped lang="less">
form{
    width: 80%;
    margin-top: 70px;
    margin-left: 10%;
    h2{
        height: 50px;
        line-height: 50px;
        font-size: 35px;
        margin-bottom: 20px;
    }
    div{
        label{
            display: inline-block;
            width: 48px;
            font-size: 15px;
        }
        div{
            display: inline-block;
            width: 278px;
            span{
                margin-right: 5px;
                i{
                    font-size: 20px;
                }
            }
            input{
                outline: 1px solid #404040;
                font-size: 16px;
                width: 200px;
                height: 30px;
            }
            input[type="file"] {
                color: transparent;
                width: 70px;
                font-size: 14px;
                outline: none;
                background-color: #63c0a1;
                border-radius: 5px;
            }
        }
    }
}
form>div{
    line-height: 50px;
    border-bottom: 2px dashed dimgray;
}
form>div:last-child{
    border-bottom: none;
    margin-top: 30px;
    div{
        width: 80%;
        margin-left: 10%;
        button{
            width: 100%;
            height: 40px;
            font-size: 20px;
            background-color: #6bc1e6;
        }
    }
}
</style>