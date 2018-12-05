import { DISCOUNT } from './types';
import axios from 'axios';
import * as externalURL from '../constants/url';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

export function getDiscount(discountModel){
    console.log(discountModel);
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{Discount:" + JSON.stringify(discountModel) + "}"
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.API_DISCOUNT,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:DISCOUNT,
        payload:request
    }
}

