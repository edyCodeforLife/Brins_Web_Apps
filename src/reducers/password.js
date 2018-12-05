import { CHANGE_PASSWORD } from '../action/types';

export default function(state={},action){
    switch (action.type) {

        case CHANGE_PASSWORD:
            console.log(action.payload);
            return Object.assign({},action.payload);
        default:
            return state;
    }
}