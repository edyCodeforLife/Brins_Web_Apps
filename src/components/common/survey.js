import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import InformationBox from '../common/information-box';
import { Link } from 'react-router-dom';

export default (props)=>{
   
   let nextURL = props.match.url.replace('survey','statement');
    let config = {
        headerLogoText:'BRINS OTO',
        blueBoxSmallNav:'Form',
        grayBoxText:'Survey',
        triangleDown:''
    }

    
   
    return (
        <div className="col-sm-12 content-adjuster">
            <HeaderFixContainer config={config} />
          
                <form>
                <div className="form-group">
                        <label htmlFor="productASRIRiskLocationAddress">Alamat Survey</label>
                        <div className="form-check">
                            <input type="checkbox" className="width-20 form-check-input" id="surveyAddress" />
                            <label htmlFor="surveyAddress">Sama Dengan Alamat Korespondensi</label>
                        </div>
                        <textarea rows="5" id="productASRICorespondenseAddress" placeholder="Silahkan isi alamat lokasi risiko" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nameContact">Nama yang dapat dihubungi</label>
                        <input type="text" id="nameContact" placeholder="Silahkan isi nama" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surveyHandphone">No handphone yang dapat dihubungi</label>
                        <input type="text" id="surveyHandphone" placeholder="Silahkan isi nomor Handphone" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surveyDate">Tanggal Survey</label>
                        <input type="date" id="surveyDate" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surveyTime">Jam Survey</label>
                        <input type="date" id="surveyTime" className="form-control" />
                    </div>
                   
                    <div className="col-sm-12 text-center">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={nextURL}>Lanjut</Link>
                    </div>
                </form>
            <FooterBackground />
        </div>
    )
}