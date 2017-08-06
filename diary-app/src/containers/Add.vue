<template>
    <div class="page">
        <m-header title="添加"></m-header>
        <form @submit.prevent="onSubmit">
            <p><span>&nbsp;&nbsp;图片：</span><input type="file" name="picture" id="picture"></p>
            <p>&nbsp;&nbsp;标题：<input type="text" name="title" v-model="title" required></p>
            <p><textarea maxlength="50" cols="34" rows="12" placeholder=" 你想说的话,最多50字" v-model="content"
                         required></textarea></p>
            <p>
                <button type="submit">提交</button>
            </p>
        </form>
        <p v-if="message" class="message">{{message}}</p>
        <Tab></Tab>
    </div>
</template>
<script>
    import Tab from '../components/Tab.vue' ;
    import MHeader from '../components/Mheader.vue';
    import {addDiary} from '../api';
    import {mapMutations} from 'vuex';
    import * as types from '../vuex/mutation-types';

    export default {
        data() {
            return {
                title: '',
                content: '',
                picture: '',
                message: ''
            }
        },
        computed: {},
        components: {MHeader, Tab},
        methods: {
            ...mapMutations([types.ADD_Message]),
            onSubmit() {
                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('content', this.content);
                formData.append('picture', document.querySelector('#picture').files[0]);
                addDiary(formData).then(res => {
                    if ("success" in res.data) {
                        //this.message = res.data.success;
                        this[types.ADD_Message](res.data.success);
                        this.$router.push('/list');
                    }
                    else {
                        this.message = res.data.error;
                        this.$router.replace('/add');
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
        margin-top: 1rem;
        overflow: hidden;
        p:nth-child(1) {
            height: .4rem;
            font-size: .12rem;
            margin-top: .15rem;
            span {
                font-size: .2rem;
            }
            input {

            }
        }
        p:nth-child(2) {
            height: .4rem;
            font-size: .2rem;
            margin-top: .15rem;
            input {
                margin-left: .2rem;
            }
        }
        p:nth-child(3) {
            height: 2.6rem;
            font-size: .18rem;
            margin-top: .15rem;
            textarea {
                margin-left: .25rem;
            }
        }
        p:last-child {
            width: 80%;
            margin-left: 10%;
            height: .6rem;
            margin-top: .3rem;
            button {
                width: 100%;
                height: .35rem;
                font-size: .2rem;
                color: #ffedf2;
                background-color: #74a1bd;
            }

        }
    }
</style>