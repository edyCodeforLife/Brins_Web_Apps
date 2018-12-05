import React from 'react';
import { connect } from 'react-redux';
import FormChangeResult from '../components/common/form-change-result';

export class ChangePasswordResult extends React.Component{
    constructor(){
        super();

        this.config = {
            headerLogoText:'Ubah Password',
            grayBoxText:'Result',
            body: 'password',
            end:'Harap mencoba untuk login kembali.'
        }
    }

    render(){
        return(
            <FormChangeResult result={this.config} />
        );
    }
}
function mapStateToProps({password, agentchangepassword , login}){
    return {password, agentchangepassword , login};
}

export default connect(mapStateToProps)(ChangePasswordResult);