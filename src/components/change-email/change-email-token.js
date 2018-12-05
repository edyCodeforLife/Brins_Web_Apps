import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import { Link } from 'react-router-dom';
import FooterBackground from '../common/footer-background';
import SmsToken from '../common/sms-token';

export default (props) =>
{
    let config = {
        headerLogoText:'Ubah Email',
        grayBoxText: 'Verify Email',
        triangleDown: ''
    }

    function timer()
    {
        var count=180;

        var counter = setInterval(timer, 1000);
        count-=1;
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }
    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <SmsToken style="font-nav" text="Email Token"/>
                <br/>
                <br/>
                <div className="alert alert-secondary mx-auto col-sm-12 p-2 justify-content-center w-82 col-sm-12 d-flex flex-row h-50">
                    <div className="justify-content-start d-flex col-sm-12">
                        <img src="/src/images/information.png"/>
                        <h4 className="ml-4 text-body"><strong>Informasi</strong>
                        <br/>
                        Harap periksa email spam anda apabila konfirmasi token email tidak terdapat pada inbox anda.
                        </h4>
                    </div>

                </div>
                <br/>
                <div className="col-sm-12 text-center section">
                    <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/change-email-result">Lanjut</Link>
                    <button onLoad={timer + 'seconds'} className="btn btn-login btn-gray">Kirim Ulang</button>
                </div>
            </div>

            <FooterBackground/>
        </div>
    )
}