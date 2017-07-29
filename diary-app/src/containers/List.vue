<template>
    <div class="page">
        <m-header title="日记列表"></m-header>
        <div class="content-scroll">
            <h4>所有记录</h4>
            <ul>
                <li v-for="(item, index) in diaryList">
                    <p v-if="item.picture"><img :src="item.picture" alt=""></p>
                    <p>标题：<span>{{item.title}}</span></p>
                    <p>文本内容：{{item.content}}<span></span></p>
                    <p>日期：{{item.createAt}}<span></span></p>
                </li>
            </ul>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
    import MHeader from '../components/Mheader.vue';
    import Tab from '../components/Tab.vue' ;
    import {getDiaryList} from '../api';
    export default {
        data() {
            return {
                diaryList:[]
            }
        },
        created(){
            getDiaryList().then(res=>{
                console.log(res);
                this.diaryList=res.data;
            },(err)=>{
                console.log(err);
            });
        },
        computed: {},
        components: {MHeader,Tab},
        methods: {}
    }
</script>
<style scoped lang="less">

</style>