import React from 'react';
import FormChangeResult from '../common/form-change-result';

export default(props) =>
{
    let config= {
        headerLogoText:'Ubah Nomor Telepon',
        grayBoxText:'Result',
        body: 'mobile phone',
        end:'Harap mencoba untuk login kembali.'
    }
    return(
        <FormChangeResult result={config} />
    )
}