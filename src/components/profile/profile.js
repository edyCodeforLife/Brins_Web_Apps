import React from 'react';
import FooterBackground from '../common/footer-background';
import HeaderFixContainer from '../common/header-fix-container';
import { Link } from 'react-router-dom';

export default (props) =>
{
    let config = {
        headerLogoText:'Profil',
        grayBoxText: 'informasi Profil',
        triangleDown: ''
    }
    function ButtonClick(){
        let editInput = document.getElementsByClassName('inputdisabled');
        for (let i = 0; i<editInput.length; i++){
            editInput[i].disabled = false;
        }
    }
    return(
        <div className="h-100">
            <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <form className="h-100">
                    <div className="form-group col-sm-12">
                        <label htmlFor="TextNameProfile">Nama</label>
                        <input type="text" id="TextNameProfile" className="form-control inputdisabled" disabled/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="TextIDNumberProfile">Nomor KTP</label>
                        <input type="text" id="TextIDNumberProfile" className="form-control inputdisabled" disabled/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="AreaCorrespondenceAddress">Alamat Korespondensi</label>
                        <textarea id="AreaCorrespondenceAddress" className="form-control inputdisabled" rows="5" cols="10" disabled/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="RadioButtonSexMale">Jenis Kelamin</label>
                        <br/>
                        <div className="d-inline-flex flex-row justify-content-between">
                            <div className="col-sm-12 justify-content-center">
                                <input type="radio" id="RadioButtonSexMale" name="radioButtonSex" value="male" className="inputdisabled" checked disabled/>
                                <label className="p-2" htmlFor="RadioButtonSexMale">Pria</label>
                            </div>

                            <div className="col-sm-12 justify-content-center">
                                <input type="radio" id="RadioButtonSexFemale" name="radioButtonSex" value="female" className="inputdisabled" disabled/>
                                <label className="p-2" htmlFor="RadioButtonSexFemale">Wanita</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="DateBirthday">Tanggal Lahir</label>
                        <input type="date" id="DateBirthday" className="form-control inputdisabled" disabled/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="EmailProfile">Email</label>
                        <input type="email" id="EmailProfile" className="form-control inputdisabled" disabled/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="TelProfile">No. Handphone</label>
                        <input type="tel" id="TelProfile" className="form-control inputdisabled" minLength="6" maxLength="20" size="20" disabled/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="TextNearBranch">Cabang Terdekat</label>
                        <input type="text" id="TextNearBranch" className="form-control inputdisabled" disabled/>
                    </div>

                    <div className="col-sm-12 text-center">
                        <button onClick={ButtonClick} type="button" className="btn btn-reset btn-yellow">Ubah</button>
                    </div>

                </form>
            </div>
            <FooterBackground/>
        </div>
    )
}