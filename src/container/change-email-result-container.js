import React from 'react';
import { connect } from 'react-redux';
import FormChangeResult from '../components/common/form-change-result';

export class ChangeEmailResult extends React.Component{
    constructor(){
        super();
        this.config= {
            headerLogoText:'Ubah Email',
            grayBoxText:'Result',
            body: 'Email',
            end:'Harap cek informasi profil anda.'
        }
    }

    render(){
        return(
            <FormChangeResult result ={this.config}/>
        )
    }
}

function mapStateToProps({email}){
    return {email};
}

export default connect(mapStateToProps)(ChangeEmailResult);