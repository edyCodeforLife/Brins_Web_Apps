import axios from 'axios';
import * as externalURL from '../constants/url';


const encryptInstance = axios.create({
    url:externalURL.ENCRYPT_SERVICE,
    method:'post', 
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
     
    }
  });

  
const decryptInstance = axios.create({
  url:externalURL.DECRYPT_SERVICE,
  method:'post', 
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
   
  }
});

function encryptCall (config) {
    return new Promise((resolve, reject) => {
      encryptInstance.post(externalURL.ENCRYPT_SERVICE,config.data).then((response) => {
        
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }

function decryptCall (config) {
  return new Promise((resolve, reject) => {
    decryptInstance.post(externalURL.DECRYPT_SERVICE,JSON.stringify(config.data)).then((response) => {
      
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

  
    axios.interceptors.request.use((config) => {
        return encryptCall(config).then((response) => {
          
          config.data = JSON.stringify(response.data);
           return Promise.resolve(config);
         }).catch(error => {
        
         })

        
    }, (error) => {
    return Promise.reject(error);
    });


    axios.interceptors.response.use(function (response) {
    
      return decryptCall(response).then((response) => {
      
        response.data = JSON.parse(atob(response.data));
        return Promise.resolve(response)
      }).catch(error => {
     
      })
     
    }, function (error) {
     
      return Promise.reject(error);
    });
