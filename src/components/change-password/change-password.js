import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import { Link } from 'react-router-dom';
import FooterBackground from '../common/footer-background';

export default (props) =>
{
    let config = {
        headerLogoText:'Ubah Password',
        grayBoxText: 'Change Password',
        triangleDown: ''
    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <main>
                    <form className="h-100">

                        <div className="form-group col-sm-12">
                        <label htmlFor="PasswordChangePasswordOld">Password lama</label>
                        <input type="password" id="PasswordChangePasswordOld" className="form-control" minLength="6" maxLength="20" size="20" placeholder="Silahkan isi password lama anda"/>
                        </div>

                        <div className="form-group col-sm-12">
                        <label htmlFor="PasswordChangePasswordNew">Password baru</label>
                        <input type="password" id="PasswordChangePasswordNew" className="form-control" minLength="6" maxLength="20" size="20" placeholder="Silahkan isi password baru anda minimum 6 karakter"/>
                        </div>

                        <div className="form-group col-sm-12">
                        <label htmlFor="PasswordChangePasswordConfirmation">Konfirmasi password</label>
                        <input type="password" id="PasswordChangePasswordConfirmation" className="form-control" minLength="6" maxLength="20" size="20" placeholder="Silahkan isi ulang password anda"/>
                        </div>

                        <div className="col-sm-12 text-center">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/change-password-result">Lanjut</Link>
                        </div>

                    </form>
                </main>
            </div>
            <FooterBackground/>
        </div>
    )
}