import { CLAIM_LIST , CLAIM_LIST_DETAIL } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import ClaimModel from '../models/claim-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function claimList(claims){

    let Claim= {
                "UserID":claims.CreatedBy,
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(claims)}

                let brinsModelBase64 = btoa(JSON.stringify(Claim));

                const request = axios.post(externalURL.GET_CLAIM,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:CLAIM_LIST,
                    payload:request
                }
  }

    export function claimListDetail(claimnumber){

    let Claim= {
                "UserID":claimnumber.CreatedBy,
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(claimnumber)}

                let brinsModelBase64 = btoa(JSON.stringify(Claim));

                const request = axios.post(externalURL.GET_CLAIM_BY_CLAIM_NUMBER,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:CLAIM_LIST_DETAIL,
                    payload:request
                }
  }
