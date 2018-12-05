import React from 'react';
import HeaderFixContainer from './header-fix-container';
import { Link } from 'react-router-dom';
export default (props)=>{
    console.log(props);
    let nextURL = props.match.url.replace('promo-code','premi-ilustration');
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Form',
        grayBoxText:'Kode Promo',
        triangleDown:''

    }

    return(
        <div className="col-sm-12 content-adjuster">
            <HeaderFixContainer config={config} />
            <form>
                <div className="form-check">
                    <input type="checkbox" className="width-20 form-check-input" id="isPromoCode" />
                    <label htmlFor="isPromoCode">Gunakan Kode Promo</label>
                </div>
                <div className="form-group">
                
                    <input type="text" id="promoCode" placeholder="Masukkan kode promo" className="form-control" disabled/>
                </div>
                <div className="col-sm-12 text-center">
                    <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={nextURL}>Lanjut</Link>
                </div>
            </form>
        </div>
    )
}