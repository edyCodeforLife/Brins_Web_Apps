import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import { Link } from 'react-router-dom';
import FooterBackground from '../common/footer-background';
import SmsToken from '../common/sms-token';

export default (props) =>
{
    let config = {
        headerLogoText:'Ubah Nomor Telepon',
        grayBoxText: 'Verify Mobile Phone',
        triangleDown: ''
    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <SmsToken style="font-nav" text="SMS Token"/>
                <br/>
                <br/>
                <div className="col-sm-12 text-center section">
                    <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/change-mobile-phone-result">Lanjut</Link>
                    <button className="btn btn-login btn-gray">Kirim Ulang</button>
                </div>
            </div>

            <FooterBackground/>
        </div>
    )
}