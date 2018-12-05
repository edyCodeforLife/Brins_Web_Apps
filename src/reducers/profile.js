import { CHANGE_PROFILE } from '../action/types';

export default function(state={},action){
    switch (action.type) {

        case CHANGE_PROFILE:
            console.log(action.payload);
            return Object.assign({},action.payload);

        default:
            return state;
    }
}