import { REGISTRATION_CHECK_PHONE,REGISTRATION_CHECK_EMAIL,REGISTRATION_VERIFY_MOBILE_PHONE,REGISTRATION_CHECK_EXIST_CUSTOMER,REGISTRATION_CUSTOMER } from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case REGISTRATION_CHECK_EMAIL:
        
            return Object.assign({},action.payload.data);
        case REGISTRATION_CHECK_PHONE:
        case  REGISTRATION_VERIFY_MOBILE_PHONE:
        case REGISTRATION_CHECK_EXIST_CUSTOMER:
        case REGISTRATION_CUSTOMER:
        console.log(action.payload);
            return Object.assign({},action.payload.data);
        default:
            return state;
    }
}

