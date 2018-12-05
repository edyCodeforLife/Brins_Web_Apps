import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import InformationBox from '../common/information-box';
import { Link } from 'react-router-dom';

export default (props)=>{
   
   let nextURL = props.props.match.url.replace('start-page','promo-code');
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Form',
        grayBoxText:'Informasi Bangunan',
        triangleDown:''
    }

    
    let informationConfig = {
        headerText:'Information',
        description:'Periode asuransi berlaku satu tahun jam 12:00 siang waktu setempat sejak tanggal pembayaran.'
    }
    return (
        <div className="col-sm-12 content-adjuster">
            <HeaderFixContainer config={config} />
          
                <form>
                    <div className="form-group">
                        <label htmlFor="productASRIBuildingPrice">Harga bangunan</label>
                        <input type="text" id="productASRIBuildingPrice" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productASRIEquipmentPrice">Harga perlengkapan</label>
                        <input type="text" id="productASRIEquipmentPrice" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productASRICorespondenseAddress">Alamat korespondensi</label>
                        <textarea rows="5" id="productASRICorespondenseAddress" placeholder="Silahkan isi alamat" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productASRIRiskLocationAddress">Alamat lokasi risiko</label>
                        <div className="form-check">
                            <input type="checkbox" className="width-20 form-check-input" id="productASRIRiskLocationAddressSame" />
                            <label htmlFor="productASRICorespondenseAddress">Sama Dengan Alamat Korespondensi</label>
                        </div>
                        <textarea rows="5" id="productASRICorespondenseAddress" placeholder="Silahkan isi alamat lokasi risiko" className="form-control" />
                    </div>
                  
                    <div className="form-group">
                        <label htmlFor="productASRIPostalCode">Kode Pos</label>
                        <div className="row">
                            <input id="productASRIPostalCode" placeholder="Silahkan isi kode pos" className="form-control col-sm-8" />
                            <div className="col-sm-4 text-right">
                                <button type="button" className="btn btn-postal btn-yellow">Check</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCodeDescription">Deskripsi</label>
                        <input type="text" id="productASRIBuildingPrice" className="form-control" disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCodeCity">Kota</label>
                        <input type="text" id="postalCodeCity" className="form-control" disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCodeProvince">Provinsi</label>
                        <input type="text" id="postalCodeCity" className="form-control" disabled/>
                    </div>
                    <div className="form-group">
                        <InformationBox config={informationConfig} />
                    </div>
                    <div className="col-sm-12 text-center">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={nextURL}>Lanjut</Link>
                    </div>
                </form>
            <FooterBackground />
        </div>
    )
}