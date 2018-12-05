import { CHANGE_MOBILE_PHONE, SAVE_NUMBER, SAVE_TOKEN, UPDATE_MOBILE_PHONE, LAGI_GALAU } from '../action/types';

export default function(state={},action){
    switch (action.type) {
       
        case CHANGE_MOBILE_PHONE:
            console.log(action.payload);
            return Object.assign({},action.payload);
        case LAGI_GALAU:
            console.log(action.payload);
            return Object.assign({});
        case SAVE_NUMBER:
            console.log(action.payload);
            return Object.assign({},action.payload.Data);
        case SAVE_TOKEN:
            console.log(action.payload);
            return Object.assign({},action.payload);
        case UPDATE_MOBILE_PHONE:
            console.log(action.payload);
            return Object.assign({},action.payload);
            default:
            return state;
    }
}