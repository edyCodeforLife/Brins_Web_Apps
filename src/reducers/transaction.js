import { TRANSACTION_LIST,TRANSACTION_DETAIL } from '../action/types';

export default function(state={},action){
    switch (action.type) {
       
        case TRANSACTION_LIST:
           
            return Object.assign([],JSON.parse(action.payload.data.Data));
      
        default:
            return state;
    }
}