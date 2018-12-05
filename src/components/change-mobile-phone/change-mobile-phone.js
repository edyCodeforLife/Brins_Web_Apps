import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import { Link } from 'react-router-dom';
import FooterBackground from '../common/footer-background';

export default (props) =>
{
    let config = {
        headerLogoText:'Ubah Nomor Telepon',
        grayBoxText: 'Change Mobile Phone',
        triangleDown: ''
    }

    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <main>
                    <form className="h-100">

                        <div className="form-group col-sm-12">
                        <label htmlFor="MobilePhoneChange">No. Handphone</label>
                        <input type="tel" id="MobilePhoneChange" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Silahkan isi no handphone Tertanggung"/>
                        </div>

                        <div className="col-sm-12 text-center">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/change-mobile-phone-token">Lanjut</Link>
                        </div>

                    </form>
                </main>
            </div>
            <FooterBackground/>
        </div>
    )
}