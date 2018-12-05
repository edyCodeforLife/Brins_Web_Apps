import { CHANGE_EMAIL , SAVE_EMAIL , VERIFY_EMAIL , UPDATE_EMAIL} from '../action/types';

export default function(state={},action){
    switch (action.type) {

        case CHANGE_EMAIL:
            console.log(action.payload);
            return Object.assign({},action.payload);
        case SAVE_EMAIL:
            console.log(action.payload);
            return Object.assign({},action.payload.Data);
        case VERIFY_EMAIL:
            console.log(action.payload);
            return Object.assign({},action.payload);
        case UPDATE_EMAIL:
            console.log(action.payload);
            return Object.assign({},action.payload);
        default:
            return state;
    }
}