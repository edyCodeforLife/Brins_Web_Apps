import { NEAR_BRANCH } from '../action/types';

export default function(state={},action){
    switch (action.type) {

        case NEAR_BRANCH:
            console.log(JSON.parse(action.payload.data.Data));
            return Object.assign([],JSON.parse(action.payload.data.Data));
        default:
            return state;
    }
}