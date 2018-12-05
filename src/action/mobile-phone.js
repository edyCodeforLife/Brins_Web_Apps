import { CHANGE_MOBILE_PHONE } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import CustomerModel from '../models/customer-model';
import {SAVE_NUMBER , SAVE_TOKEN, UPDATE_MOBILE_PHONE, LAGI_GALAU} from './types';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };


  export function changeMobilePhone(mobilephone){
    CustomerModel.mobilephone = mobilephone
    console.log(mobilephone);
    let Customer= {
                "UserID":"A",
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(mobilephone)}

                let brinsModelBase64 = btoa(JSON.stringify(Customer));

                const request = axios.post(externalURL.GET_CUSTOMER_REGISTER_MOBILE_PHONE_EDIT_PROFILE,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:CHANGE_MOBILE_PHONE,
                    payload:request
                }
  }

  export function saveNumberMobilePhone(savenumber){

    CustomerModel.MobilePhone = savenumber

    return{
        type: SAVE_NUMBER,
        payload:savenumber
    }
  }

  export function verifySMSToken(verifySMSToken){

    let Customer= {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data": JSON.stringify(verifySMSToken)}

        let brinsModelBase64 = btoa(JSON.stringify(Customer));

        const request = axios.post(externalURL.GET_CUSTOMER_VERIFY_MOBILE_PHONE_EDIT_PROFILE,JSON.stringify(brinsModelBase64),axiosConfig)

    return{
        type: SAVE_TOKEN,
        payload: request
    }
  }

  export function updateMobilePhone(updateMePlease){

    let Customer= {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data": JSON.stringify(updateMePlease)}

        let brinsModelBase64 = btoa(JSON.stringify(Customer));

        const request = axios.post(externalURL.POST_CUSTOMER_UPDATE,JSON.stringify(brinsModelBase64),axiosConfig)

    return{
        type: UPDATE_MOBILE_PHONE,
        payload: request
    }
  }