import {ADD_Message} from './mutation-types';
export const mutations={
    [ADD_Message](state,n){
        state.message='';
        state.message+=n;
    }
};