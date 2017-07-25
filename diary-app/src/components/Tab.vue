<template>
    <nav class="footer">
        <router-link to="/list">
            <i class="iconfont icon-other"></i>
            <span>列表</span>
        </router-link>
        <router-link to="/add">
            <i class="iconfont icon-addition"></i>
            <span>添加</span>
        </router-link>
        <router-link to="/user">
            <i class="iconfont icon-homepage"></i>
            <span>我</span>
        </router-link>
    </nav>
</template>
<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped lang="less">
    .footer{
        position: fixed;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        z-index: 10;
        background-color: #f1f1f1;
        border-top: 1px solid #ccc;
        .active{
            color: lightseagreen;
        }
        a{
            color: #3e3e3e;
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            i{
                font-size: 20px;
            }
        }
    }
</style>