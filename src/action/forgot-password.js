import { FORGOT_PASSWORD , CHECK_EXIST } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import CustomerModel from '../models/customer-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function forgotPassword(handphone ,email){
    CustomerModel.MobilePhone = handphone;
    CustomerModel.Email = email
    let Customer= {
                "UserID":"A",
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(CustomerModel)}

                let brinsModelBase64 = btoa(JSON.stringify(Customer));

                const request = axios.post(externalURL.POST_CUSTOMER_FORGOT_PASSWORD,JSON.stringify(brinsModelBase64),axiosConfig)

                console.log('a');

                return {
                    type:FORGOT_PASSWORD,
                    payload:request
                }
  }

  export function checkExistInServer(handphone , email){

    CustomerModel.MobilePhone = handphone;
    CustomerModel.Email = email
    let Customer= {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data": JSON.stringify(CustomerModel)}

        let brinsModelBase64 = btoa(JSON.stringify(Customer));

        const request = axios.post(externalURL.GET_CUSTOMER_EXIST_SERVER,JSON.stringify(brinsModelBase64),axiosConfig)

        console.log("puas puas");
        return {
            type:CHECK_EXIST,
            payload:request
        }
}
