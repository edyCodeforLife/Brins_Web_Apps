import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import { Link } from 'react-router-dom';
import FooterBackground from '../common/footer-background';

export default (props) =>
{
    let config = {
        headerLogoText:'Ubah Password',
        grayBoxText: 'Reset ',
        triangleDown: ''
    }
    return(
        <div className="h-100">
        <HeaderFixContainer config={config}/>
        <div className="content-adjuster">
            <form className="h-100">
                <div className="form-group col-sm-12">
                    <label htmlFor="TelHandphoneNumber">No. Handphone</label>
                    <input type="tel" id="TelHandphoneNumber" className="form-control" minLength="3" maxLength="20" size="20" placeholder="Silahkan isi nomor telepon"/>
                </div>

                <div className="form-group col-sm-12">
                    <label htmlFor="EmailAddressUser">Email</label>
                    <input type="email" id="EmailAddressUser" className="form-control" placeholder="Silahkan isi alamat email"/>
                </div>

                <div className="col-sm-12 text-center">
                        <button className="btn btn-reset btn-yellow">Reset</button>
                </div>

            </form>
        </div>
        <FooterBackground/>
        </div>
    )
}
