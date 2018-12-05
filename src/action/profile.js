import { CHANGE_PROFILE , NEAR_BRANCH } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import CustomerModel from '../models/customer-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function changeProfile(profile){

    let Customer= {
                "UserID":"A",
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(profile)}

                let brinsModelBase64 = btoa(JSON.stringify(Customer));

                const request = axios.post(externalURL.POST_CUSTOMER_UPDATE,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:CHANGE_PROFILE,
                    payload:request
                }
  }

  export function nearBranch(branch){

    let Branch= {
                "UserID":"A",
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(branch)}

                let brinsModelBase64 = btoa(JSON.stringify(Branch));

                const request = axios.post(externalURL.GET_BRANCHS,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:NEAR_BRANCH,
                    payload:request
                }
  }