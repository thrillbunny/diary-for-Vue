<template>
    <div class="page">
        <m-header title="日记列表"></m-header>
        <div class="content-scroll">
            <ul>
                <li v-for="(item, index) in diaryList">
                    <p>
                        <img :src="item.author.avatar" alt="">
                        <span @click="showDetail(item._id)">{{item.title}}</span>
                        <span><!--{{item.createAt.split('T')[0]+' '+item.createAt.split('T')[1].split('.')[0]}}-->{{item.Localtime}}</span>
                    </p>
                    <p>{{item.content}}</p>
                    <p v-if="item.picture"><img :src="item.picture" alt="" class="picture"></p>
                </li>
            </ul>
            <Message></Message>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
    import MHeader from '../components/Mheader.vue';
    import Tab from '../components/Tab.vue' ;
    import {getDiaryList} from '../api';
    import {mapMutations} from 'vuex';
    import * as types from '../vuex/mutation-types';
    import Message from '../components/Message.vue' ;

    export default {
        data() {
            return {
                diaryList:[]
            }
        },
        created(){
            getDiaryList().then(res=>{
                this.diaryList=res.data.reverse();
            },(err)=>{
                console.log(err);
            });
        },
        computed: {},
        components: {MHeader,Tab,Message},
        methods: {
            ...mapMutations([types.GET_ID],[types.ADD_Message]),
            showDetail(_id){
                this[types.GET_ID](_id);
                this.$router.push('/detail');
            }
        }
    }
</script>
<style scoped lang="less">
    ul{
        font-size: .19rem;
        li{
            border-bottom: 1px solid rgba(0,0,0,.4);
            overflow: hidden;
            p:nth-child(1){
                margin-top: .15rem;
                margin-bottom: .1rem;
                font-size: .23rem;
                img{
                    height: .35rem;
                    width: .35rem;
                    border-radius: 50%;
                    margin-left: .15rem;
                }
                span:nth-child(2){
                    vertical-align: 32%;
                    margin-left: .05rem;
                    cursor:pointer;
                }
                span:nth-child(2):hover{
                    color: #55a88c;
                }
                span:nth-child(3){
                    float: right;
                    margin-right: .15rem;
                    font-size: .14rem;
                    margin-top: .08rem;
                    color: rgba(0,0,0,.3);
                }
            }
            p:nth-child(2){
                margin-bottom: .15rem;
                padding-left: 5%;
                padding-right: 5%;
                word-wrap : break-word
            }
            p:nth-child(3){
                margin-bottom: .15rem;
                img{
                    margin-left: 5%;
                    height: 2.6rem;
                    max-width:90%;
                    border-radius: .08rem;
                }
            }
        }
    }
</style>