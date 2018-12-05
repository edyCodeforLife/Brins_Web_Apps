import { CLAIM_SUBMISSION , CLAIM_SUBMISSION_RESULT} from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case CLAIM_SUBMISSION:
            console.log(action.payload);
            return Object.assign({},action.payload);
        case CLAIM_SUBMISSION_RESULT:
            console.log(action.payload);
            return Object.assign({},action.payload);
        default:
            return state;
    }
}