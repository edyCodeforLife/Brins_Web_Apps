import React from 'react';
import { Link } from 'react-router-dom';

export default (props)=> {
    return(
        <form>
            <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="coresspondentAddress">Alamat Korespondensi</label>
                <textarea rows="5" id="coresspondentAddress" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="riskLocationAddress">Alamat lokasi risiko</label>
                <textarea rows="5" id="riskLocationAddress" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="handphoneNo">No Handphone</label>
                <input type="text" id="handphoneNo" className="form-control" disabled/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="width-20 form-check-input" id="buidlingLocationNotAtMarket" />
                <label htmlFor="buidlingLocationNotAtMarket">Bangunan tidak dilokasi pasar</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="width-20 form-check-input" id="buildingNotForBusiness" />
                <label htmlFor="buildingNotForBusiness">Bangunan tidak untuk usaha</label>
            </div>
        
            <div className="col-sm-12 text-center">
                <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={props.nextURL}>Lanjut</Link>
            </div>
        </form>
    )
}