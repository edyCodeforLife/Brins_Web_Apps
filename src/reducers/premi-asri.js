import { CALCULATE_ASRI_PREMI,CALCULATE_ASRI_OTO } from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case CALCULATE_ASRI_PREMI:
        case CALCULATE_ASRI_OTO:
        console.log(action.payload);
            return Object.assign({},JSON.parse(action.payload.data.Data));
        
        default:
            return state;
    }
}