import { CLAIM_SUBMISSION } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import ClaimModel from '../models/claim-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function claimSubmission(claims){

    let Claim= {
                "UserID":"A",
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(claims)}

                let brinsModelBase64 = btoa(JSON.stringify(Claim));

                const request = axios.post(externalURL.POST_CLAIM,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:CLAIM_SUBMISSION,
                    payload:request
                }
  }
