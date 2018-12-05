import  {    LOOKUP_GET_BRANCH, 
            LOOKUP_GET_PROVINCEANDCITY_POSTALCODE,
            LOOKUP_GET_VEHICLE_BRAND, 
            LOOKUP_GET_VEHICLE_TYPE, 
            LOOKUP_GET_VEHICLE_MODEL,
            LOOKUP_GET_LICENSE_TYPE,
            LOOKUP_GET_ZONE_CATEGORY,
            LOOKUP_GET_REGIONS
        } from './types';
import axios from 'axios';
import * as externalURL from '../constants/url';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

export function getBranch(){

    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{}"
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_BRANCHS,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_BRANCH,
        payload:request
    }
}

export function getProvinceAndCityByPostalCode(postalModel){

    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(postalModel)
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_PROVINCEANDCITY_BY_POSTAL_CODE,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_PROVINCEANDCITY_POSTALCODE,
        payload:request
    }
}

export function getVehicleBrand(){

    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{}"
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_VEHICLE_BRAND,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_VEHICLE_BRAND,
        payload:request
    }
}

export function getVehicleType(){
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{}"
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_VEHICLE_TYPE,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_VEHICLE_TYPE,
        payload:request
    }
}

export function getVehicleModel(vehicleBrand){

    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":JSON.stringify(vehicleBrand)
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_VEHICLE_MODEL,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_VEHICLE_MODEL,
        payload:request
    }
}

export function getLicenseType(){
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{}"
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_LICENSE_PLATE,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_LICENSE_TYPE,
        payload:request
    }
}

export function getZoneCategories(){
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{}"
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_ZONE_CATEGORY,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_ZONE_CATEGORY,
        payload:request
    }
}


export function getRegions(){
    let requestModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{}"
    }
    let customerModelBase64 = btoa(JSON.stringify(requestModel));

    const request = axios.post(externalURL.GET_REGIONS,JSON.stringify(customerModelBase64),axiosConfig)
                      
    return {
        type:LOOKUP_GET_REGIONS,
        payload:request
    }
}



