<template>
    <div class="page">
        <m-header title="日记详情"></m-header>
        <div class="content-scroll">
            <p v-if="message" class="message">{{message}}</p>
            <form v-if="diaryDetail.title" @submit.prevent="upDateDiary(id)">
                <p class="title">
                    &nbsp;&nbsp;标题：
                    <input type="text" name="title" v-model="title" required>
                </p>
                <p class="content">
                    <textarea maxlength="50" cols="34" rows="6" v-model="content" required>
                    </textarea>
                </p>
                <p v-if="diaryDetail.picture" class="picture">
                    <span>&nbsp;&nbsp;图片：</span>
                    <input type="file" name="picture" id="pictureUpDate" @change="onChange">
                    <img :src="picture" alt="">
                </p>
                <p class="button">
                    <button type="submit">修改</button>
                    <button @click="delDiary(id)">移除</button>
                </p>
            </form>
            <p v-if="message" class="message">{{message}}</p>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
    import MHeader from '../components/Mheader.vue';
    import Tab from '../components/Tab.vue' ;
    import {getDiaryDetail,delDiaryDetail,upDateDiaryAPI} from '../api';
    import {mapState,mapMutations} from 'vuex';
    import * as types from '../vuex/mutation-types';
    export default {
        data() {
            return {
                diaryDetail:{},
                message: '',
                title: '',
                content: '',
                picture: ''
            }
        },
        created(){
            getDiaryDetail(this.$store.state.id).then(res=>{
                this.diaryDetail=res.data;
                this.title=this.diaryDetail.title;
                this.content=this.diaryDetail.content;
                this.picture=this.diaryDetail.picture;
            },(err)=>{
                console.log(err);
            });
        },
        computed: {
            ...mapState(['id'])
        },
        components: {MHeader,Tab},
        methods: {
            ...mapMutations([types.ADD_Message]),
            delDiary(id){
                delDiaryDetail(id).then(res=>{
                    console.log(res);
                    if ("success" in res.data) {
                        this[types.ADD_Message](res.data.success);
                        //this.message = res.data.success;
                        this.$router.push('/list');
                    }
                    else {
                        this.message = res.data.error;
                        this.$router.replace('/detail');
                    }
                },(err)=>{
                    console.log(err);
                });
            },
            onChange($event) {
                this.picture = URL.createObjectURL($event.target.files[0])
            },
            upDateDiary(id) {
                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('content', this.content);
                let pictureDom=document.querySelector('#pictureUpDate');
                let picturePath=null;
                if(pictureDom){
                    picturePath=pictureDom.files[0]?pictureDom.files[0]:this.diaryDetail.picture;
                }
                formData.append('picture', picturePath);
                upDateDiaryAPI(formData,id).then(res => {
                    if ("success" in res.data) {
                        this[types.ADD_Message](res.data.success);
                        //this.message = res.data.success;
                        this.$router.push('/list');
                    }
                    else {
                        this.message = res.data.error;
                        this.$router.replace('/detail');
                        this.title = this.content = "";
                    }
                }, (err) => {
                    console.log(err);
                })
            }
        }
    }
</script>
<style scoped lang="less">
    form {
        background-color: #335152;
        color: #d8e6e6;
        width: 90%;
        margin-left: 5%;
        margin-top: .5rem;
        overflow: hidden;
        p.picture {
            font-size: .12rem;
            margin-top: .15rem;
            span {
                font-size: .2rem;
            }
            img{
                margin-left: 5%;
                height: 2.6rem;
                max-width:90%;
                border-radius: .08rem;
            }
        }
        p.title {
            height: .4rem;
            font-size: .2rem;
            margin-top: .15rem;
            input {
                margin-left: .2rem;
            }
        }
        p.content {
            font-size: .18rem;
            margin-top: .15rem;
            textarea {
                margin-left: .25rem;
            }
        }
        p.button {
            height: .6rem;
            margin-top: .3rem;
            button{
                width: .68rem;
                height: .4rem;
                font-size: .2rem;
                color: #ffedf2;
                float: right;
            }
            button:nth-child(1) {
                background-color: #74a1bd;
                margin-right: .2rem;
            }
            button:nth-child(2) {
                background-color: #d45f68;
                margin-right: .1rem;
            }
        }
    }
    p.message {
        background-color: #e6b6bb;
        text-align: center;
        height: .3rem;
        line-height: .3rem;
        font-size: .16rem;
        width: 80%;
        position: fixed;
        bottom: 1rem;
        left: 10%;
    }
</style>