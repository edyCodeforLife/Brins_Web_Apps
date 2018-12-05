import React from 'react';
import HeaderFixContainer from './header-fix-container';
import FooterBackground from '../common/footer-background';
import { Link } from 'react-router-dom';
export default (props)=>{
    let nextURL = props.match.url.replace('premi-ilustration','sppa');
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Ilustrasi',
        grayBoxText:'Ilustrasi Premi',
        triangleDown:''

    }

    return(
        <div className="col-sm-12 content-adjuster">
            <HeaderFixContainer config={config} />
            <form>
                <div className="form-group">
                    <label htmlFor="basicPremium">Premi Dasar</label>
                    <input type="text" id="basicPremium" className="form-control" disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="discount">Discount</label>
                    <input type="text" id="discount" className="form-control" disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="administrationCost">Biaya Admin</label>
                    <input type="text" id="administrationCost" className="form-control" disabled/>
                </div>
                <hr />
                <div className="form-group">
                    <label htmlFor="premiumTotal">Total Premi</label>
                    <input type="text" id="premiumTotal" className="form-control" disabled/>
                </div>
                <div className="col-sm-12 text-center">
                    <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={nextURL}>Konfirmasi</Link>
                </div>
            </form>
            <FooterBackground />
        </div>
    )
}