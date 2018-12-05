import { AGENT_FORGOT_PASSWORD } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import AgentModel from '../models/agent-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function forgotPasswordAgent(mobilephone ,email){

    AgentModel.MobilePhone = mobilephone;
    AgentModel.Email = email
    let Agent= {
                "UserID":AgentModel.AgentID,
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(AgentModel)}

                let brinsModelBase64 = btoa(JSON.stringify(Agent));

                const request = axios.post(externalURL.POST_AGENT_FORGOT_PASSWORD,JSON.stringify(brinsModelBase64),axiosConfig)

                console.log('a');

                return {
                    type:AGENT_FORGOT_PASSWORD,
                    payload:request
                }
  }

