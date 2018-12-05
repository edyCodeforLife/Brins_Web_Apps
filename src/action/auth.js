import { DO_LOGIN,DO_LOGOUT,SAVE_LOGIN } from './types';
import * as loginConstant from '../constants/auth';
import * as externalURL from '../constants/url';
import  CryptoJS  from 'crypto-js';
import axios from 'axios';

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

export function doLogin(login){
    // let modelEnc = {
    //     Key:loginConstant.STRING_SERVER_KEY_HIT_PUBLIC,
    //     Data:''
    // };
    
    // // let key = CryptoJS.MD5(CryptoJS.enc.Utf16LE.parse(loginConstant.STRING_SERVER_KEY_HIT_PRIVATE));
    // let key = CrptoJS.MD5(CryptoJS);
    // // let k1 = key.substring(0,16);
    // // key += k1;
    // let textWordArray = CryptoJS.enc.Utf16LE.parse(JSON.stringify(brinsModel));
    // //let textWordArray = JSON.stringify(brinsModel).split('').map(s);
    // // let keyHex = CryptoJS.enc.Hex.parse(key);
    // var bytes = CryptoJS.lib.WordArray.create([0,0,0,0,0,0,0,0]);
    // // console.log(CryptoJS.enc.Utf16LE.parse(loginConstant.STRING_SERVER_KEY_HIT_PRIVATE));
    // // console.log(textWordArray);
    // // console.log(bytes);
    // let testkey = loginConstant.STRING_SERVER_KEY_HIT_PRIVATE.split('').map(s)
    // console.log(testkey)
    // console.log(key);
    // // console.log(textWordArray);

    // modelEnc.Data = CryptoJS.TripleDES.encrypt(textWordArray,key,{iv:bytes,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).ciphertext;
    // console.log(modelEnc.Data); 
 
    let brinsModel = {
        "UserID":"A",
        "DeviceID":"123",
        "IPAddress":"121.144",
        "Culture":"id-ID",
        "Data":"{\"CreatedOn\":\"2018-07-02T17:11:56+0700\",\"EmailState\":2,\"ID\":0,\"IdentificationName\":\"\",\"IdentificationNumber\":\"\",\"IdentificationType\":\"\",\"MobilePhone\":\""+ login.handphoneNumber +"\",\"MobilePhoneState\":2,\"Password\":\""+ login.password +"\"}"
    }
    let currentExternalURL = login.currentRole === 'Customer' ?  externalURL.GET_CUSTOMER_CHECK_LOGIN : externalURL.GET_AGENT_CHECK_LOGIN;
    let brinsModelBase64 = btoa(JSON.stringify(brinsModel));

    const request = axios.post(currentExternalURL,JSON.stringify(brinsModelBase64),axiosConfig)
                        

    return {
        type:DO_LOGIN,
        payload:request
    }
}

export function saveLogin(login){
    
    return {
        type:SAVE_LOGIN,
        payload:login
    }
}


export function doLogout(){
 
    return {
        type:DO_LOGOUT,
        payload:{}
    }
}