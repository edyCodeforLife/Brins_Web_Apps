import React from 'react';
import { connect } from 'react-redux';
import FormChangeResult from '../components/common/form-change-result';

export class ChangeMobilePhoneResult extends React.Component{
    constructor(){
        super();

        this.config = {
            headerLogoText:'Ubah Nomor Telepon',
            grayBoxText:'Result',
            body: 'mobile phone',
            end:'Harap mencoba untuk login kembali.'
        }
    }

    render(){
        return(
            <FormChangeResult result={this.config} />
        );
    }
}
function mapStateToProps({mobilephone}){
    return {mobilephone};
}

export default connect(mapStateToProps)(ChangeMobilePhoneResult);