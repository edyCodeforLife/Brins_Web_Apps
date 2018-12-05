import { CALCULATE_ASRI_PREMI } from './types';
import axios from 'axios';
import * as externalURL from '../constants/url';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };


export function calculateProduct(product,productPackageName){
    let externalURLCalculateProduct = productPackageName == 'asri' ? externalURL.CALCULATE_PREMI_ASRI : externalURL.CALCULATE_PREMI_OTO;
    console.log(externalURLCalculateProduct);
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(product)
    }

    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURLCalculateProduct,JSON.stringify(customerModelBase64),axiosConfig)

    return {
        type:CALCULATE_ASRI_PREMI,
        payload:request
    }
}


