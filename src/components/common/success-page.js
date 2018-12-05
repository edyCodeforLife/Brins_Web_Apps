import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import { Link } from 'react-router-dom';

export default (props) => {
    let config = {
        headerLogoText:props.success.headerLogoText,
        grayBoxText:props.success.grayBoxText,
        triangleDown:''
    }
    return (
        <div className="h-100">
          <HeaderFixContainer config={config} />
            <div className="col-sm-12 content-adjuster">
                <div className="col-sm-12 text-center">
                    <h2>{props.success.headerText}</h2>
                </div>
                <div className="col-sm-12 d-flex justify-content-center text-center">
                    <p className="col-sm-5">{props.success.description}</p>
                </div>
                <div className="col-sm-12 text-center">
                    <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/">{props.success.buttonText}</Link>
                </div>
            </div>
            <FooterBackground />
        </div>
    )
}