import { LOOKUP_GET_BRANCH,LOOKUP_GET_PROVINCEANDCITY_POSTALCODE,LOOKUP_GET_VEHICLE_BRAND,LOOKUP_GET_VEHICLE_TYPE,LOOKUP_GET_VEHICLE_MODEL, LOOKUP_GET_LICENSE_TYPE, LOOKUP_GET_ZONE_CATEGORY,LOOKUP_GET_REGIONS} from '../action/types';

export default function(state={},action){
    switch (action.type) {
     
        case LOOKUP_GET_BRANCH:
          
            let branch = Object.assign([],JSON.parse(action.payload.data.Data));
             
            return {...state,branch:branch};
        case LOOKUP_GET_PROVINCEANDCITY_POSTALCODE:
            console.log(action.payload);
            let postalCode = Object.assign({},action.payload.data.Data !== null ? JSON.parse(action.payload.data.Data) : action.payload);

            return {postalCode:postalCode};
        case LOOKUP_GET_VEHICLE_BRAND:
            return {
                ...state,
                vehicleBrands:Object.assign([],action.payload.data.Data !== null ? JSON.parse(action.payload.data.Data) : action.payload)
            }
        case LOOKUP_GET_VEHICLE_MODEL:

            return {
                ...state,
                vehicleModel:Object.assign([],action.payload.data.Data !== null ? JSON.parse(action.payload.data.Data) : action.payload)
            }

        case LOOKUP_GET_VEHICLE_TYPE:

            return {
                ...state,
                vehicleTypes:Object.assign([],action.payload.data.Data !== null ? JSON.parse(action.payload.data.Data) : action.payload)
            }
        case LOOKUP_GET_LICENSE_TYPE:
            return {
                ...state,
                licensePlates:Object.assign([],action.payload.data.Data !== null ? JSON.parse(action.payload.data.Data) : action.payload)
            }
        case LOOKUP_GET_ZONE_CATEGORY:
            return {
                ...state,
                zoneCategories:Object.assign([],action.payload.data.Data !== null ? JSON.parse(action.payload.data.Data) : action.payload)
            }
        case LOOKUP_GET_REGIONS:
            return {
                ...state,
                regions:Object.assign([],action.payload.data.Data !== null ? JSON.parse(action.payload.data.Data) : action.payload)
            }
        default:
            return state;
    }
}