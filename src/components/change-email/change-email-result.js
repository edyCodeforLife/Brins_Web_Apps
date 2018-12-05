import React from 'react';
import FormChangeResult from '../common/form-change-result';

export default(props) =>
{
    let config= {
        headerLogoText:'Ubah Email',
        grayBoxText:'Result',
        body: 'Email',
        end:'Harap cek informasi profil anda.'
    }
    return(
        <FormChangeResult result={config} />
    )
}