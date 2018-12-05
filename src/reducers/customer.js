import { REGISTRATION_SAVE_DATA} from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case REGISTRATION_SAVE_DATA:
            return Object.assign({},action.payload);
        default:
            return state;
    }
}