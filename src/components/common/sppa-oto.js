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
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleBrand">Merek Kendaraan</label>
                <input type="text" id="vehicleBrand" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleType">Type Kendaraan</label>
                <input type="text" id="vehicleType" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleSerial">Seri Kendaraan</label>
                <input type="text" id="vehicleSerial" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleReleaseYear">Tahun Kendaraan</label>
                <input type="text" id="vehicleReleaseYear" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="vehiclePlateNumber">Nomor Polisi</label>
                <input type="text" id="vehiclePlateNumber" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleColorSTNK">Warna kendaraan sesuai dengan STNK</label>
                <input type="text" id="vehicleColorSTNK" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="handphoneNo">No Handphone</label>
                <input type="text" id="handphoneNo" className="form-control" disabled/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleChassisNumber">No Rangka</label>
                <input type="text" id="chassisNumber" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="vehicleMachineNumber">No Mesin</label>
                <input type="text" id="vehicleMachineNumber" className="form-control" />
            </div>
        
            <div className="col-sm-12 text-center">
                <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={props.nextURL}>Lanjut</Link>
            </div>
        </form>
    )
}