import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import { Link } from 'react-router-dom';

export default (props) => {
    let config = {
        headerLogoText:'Daftar',
        grayBoxText:'Tahap 4',
        triangleDown:''
    }
    return (
        <div className="h-100">
            <HeaderFixContainer config={config} />
            <div className="col-sm-12 content-adjuster">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nama</label>
                        <input type="text" id="name" placeholder="Silahkan isi nama Tertanggung" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="IDNo">Nomer KTP</label>
                        <input type="number" id="IDNo" placeholder="Silahkan isi Nomer KTP" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="corespondenseAddress">Alamat Korespondensi</label>
                        <textarea className="form-control" rows="5"/>
                    </div>
                    <div className="form-group">
                    <label className="form-check-label" htmlFor="sex">Jenis Kelamin</label>
                    
                    <div className="col-sm-12">
                        <div className="form-check form-check-inline col-sm-3">
                            <input type="radio" className="form-check-input" name="sex" id="sexMale" value="1" />
                            <label className="form-check-label" htmlFor="sexMale">Laki-laki</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="sex" id="sexFemale" value="0" />
                            <label className="form-check-label" htmlFor="sexFemale">Perempuan</label>
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Tanggal Lahir</label>
                        <input type="date" id="dob" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nearestBranch">Cabang Terdekat</label>
                        <select id="nearestBranch" className="form-control">
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" placeholder="Silahkan isi password minimum 6 karakter" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Konfirmasi Password</label>
                        <input type="text" id="confirmPassword" placeholder="Silahkan isi ulang password anda" className="form-control"/>
                    </div>
                    <div className="col-sm-12 text-center">
                        <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/register/finished">Konfirmasi</Link>
                    </div>
                </form>
            </div>
            <FooterBackground />
        </div>
    )
}