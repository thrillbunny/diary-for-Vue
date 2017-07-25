<template>
    <div class="header">
        {{title}}
    </div>
</template>
<script>
    export default {
        props:{
            title:{
                type:String
            }
        },
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>
    .header{
        position: fixed;
        top:0;
        left: 0;
        z-index: 10;
        height: 40px;
        width: 100%;
        text-align: center;
        line-height: 40px;
        background-color: #f1f1f1;
    }
</style>