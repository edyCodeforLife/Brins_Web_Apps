import { CHANGE_PASSWORD } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import CustomerModel from '../models/customer-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function changePassword(changePasswordNew){
 
    let Customer= {
                "UserID":"A",
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(changePasswordNew)}

                let brinsModelBase64 = btoa(JSON.stringify(Customer));

                const request = axios.post(externalURL.POST_CUSTOMER_CHANGE_PASSWORD,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:CHANGE_PASSWORD,
                    payload:request
                }
  }
