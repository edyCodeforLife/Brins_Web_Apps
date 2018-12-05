import { AGENT_FORGOT_PASSWORD } from '../action/types';

export default function(state={},action){
    switch (action.type) {

        case AGENT_FORGOT_PASSWORD:
            console.log(action.payload);
            return Object.assign({},action.payload);
        default:
            return state;
    }
}