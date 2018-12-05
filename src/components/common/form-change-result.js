import React from 'react';
import HeaderFixContainer from './header-fix-container';
import FooterBackground from './footer-background';
import { Link } from 'react-router-dom';

export default (props) =>{
    let config = {
        headerLogoText:props.result.headerLogoText,
        grayBoxText:props.result.grayBoxText,
        triangleDown:''

    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster text-center">
                <h1 className="text-config"><strong>Ubah Profile Sukses</strong></h1>
                <h2 className="text-config mx-5 text-muted">Selamat perubahan <span>{props.result.body}</span> sukses dilakukan. <span>{props.result.end}</span></h2>
                <div className="col-sm-12 text-center section">
                    <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/">Lanjut</Link>
                </div>
            </div>
           <FooterBackground/>
        </div>
    )
}