import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import { Link } from 'react-router-dom';
import FooterBackground from '../common/footer-background';

export default (props) =>
{
    let config = {
        headerLogoText:'Ubah Email',
        grayBoxText: 'Verify Email',
        triangleDown: ''
    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <main>
                    <form className="h-100">

                        <div className="form-group col-sm-12">
                        <label htmlFor="EmailChange">Email</label>
                        <input type="email" id="EmailChange" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Silahkan isi alamat email"/>
                        </div>

                        <div className="col-sm-12 text-center">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/change-email-token">Lanjut</Link>
                        </div>

                    </form>
                </main>
            </div>
            <FooterBackground/>
        </div>
    )
}