import {ADD_Message,GET_ID} from './mutation-types';
export const mutations={
    [ADD_Message](state,n){
        state.message='';
        state.message+=n;
    },
    [GET_ID](state,n){
        state.id='';
        state.id+=n;
    }
};