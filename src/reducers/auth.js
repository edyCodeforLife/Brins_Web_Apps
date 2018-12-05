import { DO_LOGIN,DO_LOGOUT } from '../action/types';

export default function(state={},action){
    switch (action.type) {
       
        case DO_LOGIN:
            action.payload.data.Data = JSON.parse(action.payload.data.Data);
            return Object.assign({},action.payload.data);
        case DO_LOGOUT:
            return Object.assign({});
        default:
            return state;
    }
}