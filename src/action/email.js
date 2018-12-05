import { CHANGE_EMAIL, SAVE_EMAIL, VERIFY_EMAIL , UPDATE_EMAIL} from './types';
import * as externalURL from '../constants/url';
import axios from 'axios';
import CustomerModel from '../models/customer-model';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

    export function changeEmail(emailChange){

        let Customer= {
            "UserID":"A",
            "DeviceID":"123",
            "IPAddress":"121.144",
            "Culture":"id-ID",
            "Data": JSON.stringify(emailChange)}

            let brinsModelBase64 = btoa(JSON.stringify(Customer));

            const request = axios.post(externalURL.GET_CUSTOMER_REGISTER_EMAIL_EDIT_PROFILE,JSON.stringify(brinsModelBase64),axiosConfig)

            console.log(CustomerModel)
            return {
                type:CHANGE_EMAIL,
                payload:request
            }
        }

    export function saveEmail(saveEmail){
        CustomerModel.Email = saveEmail

        return{
            type: SAVE_EMAIL,
            payload:saveEmail
        }

    }

    export function verifyEmailToken(verifyEmail){
        let Customer= {
            "UserID":"A",
            "DeviceID":"123",
            "IPAddress":"121.144",
            "Culture":"id-ID",
            "Data": JSON.stringify(verifyEmail)}

            let brinsModelBase64 = btoa(JSON.stringify(Customer));

            const request = axios.post(externalURL.GET_CUSTOMER_VERIFY_EMAIL_EDITPROFILE,JSON.stringify(brinsModelBase64),axiosConfig)

            console.log("puas puas");
            return {
                type:VERIFY_EMAIL,
                payload:request
            }
    }

    export function updateEmail(updateMePlease){

        let Customer= {
            "UserID":"A",
            "DeviceID":"123",
            "IPAddress":"121.144",
            "Culture":"id-ID",
            "Data": JSON.stringify(updateMePlease)}
    
            let brinsModelBase64 = btoa(JSON.stringify(Customer));
    
            const request = axios.post(externalURL.POST_CUSTOMER_UPDATE,JSON.stringify(brinsModelBase64),axiosConfig)
    
        return{
            type: UPDATE_EMAIL,
            payload: request
        }
      }
