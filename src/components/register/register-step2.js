import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import { Link } from 'react-router-dom';

export default (props) => {
    let config = {
        headerLogoText:'Daftar',
        grayBoxText:'Tahap 2',
        triangleDown:''
    }
    return (
        <div className="h-100">
        <HeaderFixContainer config={config} />
      
        <div className="col-sm-12 content-adjuster">
            <form className="form-register">
                <h4>SMS Token</h4>
                <div className="col-sm-12 section">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <div className="col-sm-2 text-center"><input type="text" maxLength={1} className="small-input text-center" /></div>
                        <div className="col-sm-2 text-center"><input type="text" maxLength={1} className="small-input text-center" /></div>
                        <div className="col-sm-2 text-center"><input type="text" maxLength={1} className="small-input text-center" /></div>
                        <div className="col-sm-2 text-center"><input type="text" maxLength={1} className="small-input text-center" /></div>
                    </div>
                    <div className="col-sm-12 text-center section">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/register/step3">Lanjut</Link>
                        <button className="btn btn-login btn-yellow">Kirim Ulang</button>
                    </div>
                </div>    
                
            </form>
        </div>
        <FooterBackground />
    </div>
    )
}