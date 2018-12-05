import { PRODUCT_TEMP } from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case PRODUCT_TEMP:
            return action.payload
        default:
            return state;
    }
}