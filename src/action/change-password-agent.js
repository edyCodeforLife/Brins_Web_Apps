import { AGENT_CHANGE_PASSWORD } from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import AgentModel from '../models/agent-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function agentChangePassword(changepassword){
 
    let Agent= {
                "UserID":"A",
                "DeviceID":"123",
                "IPAddress":"121.144",
                "Culture":"id-ID",
                "Data": JSON.stringify(changepassword)}

                let brinsModelBase64 = btoa(JSON.stringify(Agent));

                const request = axios.post(externalURL.POST_AGENT_CHANGE_PASSWORD,JSON.stringify(brinsModelBase64),axiosConfig)

                return {
                    type:AGENT_CHANGE_PASSWORD,
                    payload:request
                }
  }
