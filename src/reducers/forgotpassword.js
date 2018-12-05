import { FORGOT_PASSWORD, CHECK_EXIST } from '../action/types';

export default function(state={},action){
    switch (action.type) {

        case FORGOT_PASSWORD:
            console.log(action.payload);
            return Object.assign({},action.payload);
        case CHECK_EXIST:
            console.log(action.payload);
            return Object.assign({},action.payload);
        default:
            return state;
    }
}