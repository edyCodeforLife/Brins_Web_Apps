import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import InformationBox from '../common/information-box';
import { Link } from 'react-router-dom';
export default (props) => {
    let nextURL = props.props.match.url.replace('start-page','promo-code');
    let config = {
        headerLogoText:'BRINS OTO',
        blueBoxSmallNav:'Form',
        grayBoxText:'Informasi Kendaraan',
        triangleDown:''
    }

    let informationConfig = {
        headerText:'Informasi',
        description:'Periode asuransi berlaku satu tahun jam 12:00 siang waktu setempat sejak tanggal pembayaran.'
    }

    return (
        <div className="col-sm-12 mb-5 content-adjuster">
            <HeaderFixContainer config={config} />
            <form>
                    <div className="form-group">
                        <label htmlFor="vehicleBrand">Merek Kendaraan</label>
                        <select id="vehicleBrand" className="form-control">
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleType">Type Kendaraan</label>
                        <select id="vehicleType" className="form-control">
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehiclePrice">Harga kendaraan</label>
                        <input type="text" id="vehiclePrice" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleNumber">Nomor Polisi</label>
                        <div className="row">
                            <select id="vehicleNumberAreaCode" className="col-sm-4 form-control">
                            </select>
                            <input type="text" id="vehicleNumberPlateNumber" className="col-sm-4 form-control" />
                            <input type="text" id="vehilceNumberPlateDigit" className="col-sm-4 form-control" />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleYearRelease">Tahun Kendaraan</label>
                        <select id="vehicleYearRelease" className="form-control">
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleUseArea">Wilayah Penggunaan Kendaraan</label>
                        <select id="vehicleUseArea" className="form-control">
                        </select>
                    </div>
                    <div className="col-sm-12 form-group">
                        <label htmlFor="vehicleUseArea">Bengkel authorized (penggunaan bengkel authorized dikenakan tambahan premi)</label>
                        <div className="col-sm-6 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="authorizedWorkshop" id="authorizedWorkshopYes" value="authorizedWorkshopYes" />
                            <label className="form-check-label" htmlFor="authorizedWorkshopYes">Ya</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="authorizedWorkshop" id="authorizedWorkshopNo" value="authorizedWorkshopNo" />
                            <label className="form-check-label" htmlFor="authorizedWorkshopNo">Tidak</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleUseArea">Perlengkapan Non Standar</label>
                        <textarea rows="5" id="productASRICorespondenseAddress" placeholder="Silahkan isi alamat lokasi risiko" className="form-control" />
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