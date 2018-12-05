import React from 'react';
import { Link } from 'react-router-dom';
import BlueBoxLogo from '../common/blue-box-logo';

export default (props) => {
    
    return (
        <div className="h-100">
            <BlueBoxLogo />
            <form onSubmit={props.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="handphoneNumber">No. Handphone</label>
                    <input type="text" id="handphoneNumber" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Kata Sandi</label>
                    <input type="password" id="password" className="form-control"/>
                </div>
                <div className="col-sm-12 text-center">
                    <button  className="btn btn-login btn-yellow">Login</button>
                    <Link to="/register/step1" className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center">Register</Link>
                </div>
                <div className="col-sm-12 text-center">
                   <Link to="/forgotpassword" className="link-text">forgot password</Link>
                </div>
            </form>
        </div>
    )
}