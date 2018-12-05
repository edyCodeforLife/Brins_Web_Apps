import { TRANSACTION_LIST,TRANSACTION_DETAIL } from './types';
import * as externalURL from '../constants/url';

import axios from 'axios';

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

export function getTransactions(loginModel){
    let brinsModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(loginModel)
    }
   
    let brinsModelBase64 = btoa(JSON.stringify(brinsModel));

    const request = axios.post(externalURL.GET_PRODUCT_GENERAL,JSON.stringify(brinsModelBase64),axiosConfig)
                        

    return {
        type:TRANSACTION_LIST,
        payload:request
    }
}
