import { CLAIM_LIST_DETAIL} from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case CLAIM_LIST_DETAIL:
            console.log(action.payload);
            return Object.assign({},JSON.parse(action.payload.data.Data));
        default:
            return state;
    }
}