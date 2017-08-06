<template>
    <div>
        <p v-if="message" class="message">{{message}}</p>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import * as types from '../vuex/mutation-types';
    export default {
        data() {
            return {}
        },
        mounted(){
           this.timer=setTimeout(()=>{
               this.$store.state.message=null;
           },3000)
        },
        destroyed(){
            clearTimeout(this.timer);
        },
        computed: {
            ...mapState(['message'])
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>