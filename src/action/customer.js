import { REGISTRATION_CHECK_PHONE,REGISTRATION_CHECK_EMAIL, REGISTRATION_SAVE_DATA,REGISTRATION_VERIFY_MOBILE_PHONE, REGISTRATION_VERIFY_EMAIL,REGISTRATION_CHECK_EXIST_CUSTOMER,
         REGISTRATION_CUSTOMER } from './types';
import axios from 'axios';
import * as externalURL from '../constants/url';
import customerModel from '../models/customer-model';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

export function saveRegistrationData(registration){
   

    customerModel.MobilePhone = registration.mobilePhone;
    customerModel.Email = registration.email;

    return {
        type: REGISTRATION_SAVE_DATA,
        payload:customerModel
    }
}

export function registrationCheckExistCustomer(customerModel){
  
 
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(customerModel)
    }
   
    let customerModelBase64 = btoa(JSON.stringify(requestModel));
  
    const request = axios.post(externalURL.GET_CUSTOMER_EXIST_SERVER,JSON.stringify(customerModelBase64),axiosConfig);
    
    return {
        type:REGISTRATION_CHECK_EXIST_CUSTOMER,
        payload:request
    }
}

export function registrationCheckPhone(customerModel){
  
 
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(customerModel)
    }
   
    let customerModelBase64 = btoa(JSON.stringify(requestModel));
  
    const request = axios.post(externalURL.POST_CUSTOMER_REGISTER_MOBILEPHONE,JSON.stringify(customerModelBase64),axiosConfig);
    
    return {
        type:REGISTRATION_CHECK_PHONE,
        payload:request
    }
}

export function verifyMobilePhoneToken(customerModel){
   
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(customerModel)
    }
   
    let customerModelBase64 = btoa(JSON.stringify(requestModel));
   
    const request = axios.post(externalURL.POST_CUSTOMER_VERIFY_MOBILEPHONE,JSON.stringify(customerModelBase64),axiosConfig);
                    
    return {
        type:REGISTRATION_VERIFY_MOBILE_PHONE,
        payload:request
    }
}

export function registrationCheckEmail(customerModel){

    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(customerModel)
    }
   
    let customerModelBase64 = btoa(JSON.stringify(requestModel));
  
    const request = axios.post(externalURL.POST_CUSTOMER_REGISTER_EMAIL,JSON.stringify(customerModelBase64),axiosConfig);
    
    return {
        type:REGISTRATION_CHECK_EMAIL,
        payload:request
    }
}

export function verifyEmailToken(customerModel){
   
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(customerModel)
    }
   
    let customerModelBase64 = btoa(JSON.stringify(requestModel));
   
    const request = axios.post(externalURL.POST_CUSTOMER_VERIFY_EMAIL,JSON.stringify(customerModelBase64),axiosConfig);
                    
    return {
        type:REGISTRATION_VERIFY_MOBILE_PHONE,
        payload:request
    }
}

export function registerCustomer(customerModel){
    
    customerModel.Name = customerModel.IdentificationName;
    customerModel.EmailState = '2';
    customerModel.MobilePhoneState = '2';

    console.log(customerModel);
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(customerModel)
    }
   
    let customerModelBase64 = btoa(JSON.stringify(requestModel));
   
    const request = axios.post(externalURL.POST_CUSTOMER_REGISTER,JSON.stringify(customerModelBase64),axiosConfig);
                    
    return {
        type:REGISTRATION_CUSTOMER,
        payload:request
    }
}

