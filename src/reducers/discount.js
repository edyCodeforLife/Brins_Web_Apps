import { DISCOUNT } from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case DISCOUNT:
            
          return Object.assign({},JSON.parse(action.payload.data.Data));
        default:
            return state;
    }
}