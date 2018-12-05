import React from 'react';
import LoginTypeBox from './login-type-box';

export default (props) => {
    return(
        <div className="col-sm-12 h-50 space-padding-50 text-center blue-box">
            <div className="col-sm-12 no-padding h-25">
                <h4>Login</h4>
            </div>
            <div className="col-sm-12 h-50">
                <div className="row h-100 align-items-center justify-content-center">
                    <img src="/src/images/mainprimary_login.png" className="login-logo"/>
                </div>
            </div>
            <LoginTypeBox getRole={props.getRole} selectedRole={props.selectedRole}/>
        </div>

    )
}