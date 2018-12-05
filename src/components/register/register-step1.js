import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import { Link } from 'react-router-dom';

export default (props) => {
    let config = {
        headerLogoText:'Daftar',
        grayBoxText:'Tahap 1',
        triangleDown:''
    }
    return (
        <div className="h-100">
            <HeaderFixContainer config={config} />
           
            <div className="col-sm-12 content-adjuster">
                <form>
                    <div className="form-group">
                        <label htmlFor="handphoneNumber">No. Handphone</label>
                        <input type="text" id="handphoneNumber" placeholder="Silahkan isi no handphone Tertanggung" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Silahkan isi email Tertanggung" className="form-control" />
                    </div>
                    <div className="col-sm-12 text-center">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/register/step2">Lanjut</Link>
                    </div>
                </form>
            </div>
            <FooterBackground />
        </div>
    )
}