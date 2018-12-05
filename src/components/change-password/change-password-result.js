import React from 'react';
import FormChangeResult from '../common/form-change-result';

export default(props) =>
{
    let config= {
        headerLogoText:'Ubah Password',
        grayBoxText:'Result',
        body: 'password',
        end:'Harap mencoba untuk login kembali.'
    }
    return(
        <FormChangeResult result={config} />
    )
}