<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        components: {},
    }
</script>

<style>
    .page{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .content-scroll{
        height: 100%;
        padding: .4rem 0 .5rem 0;
        box-sizing: border-box;
        overflow: scroll;
    }
    .pos{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
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
