<template>
    <div>
        <p v-if="message">{{message}}</p>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import * as types from '../vuex/mutation-types';
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState(['message'])
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>
    p{
        background-color: #e6b6bb;
        text-align: center;
        height: .3rem;
        line-height: .3rem;
        font-size: .16rem;
        width: 80%;
        margin-left: 10%;
        margin-top: 1rem;
    }
</style>