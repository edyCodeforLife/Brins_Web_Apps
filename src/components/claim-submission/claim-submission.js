import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';

export default (props) =>
{
    let config = {
        headerLogoText:'Pengajuan Klaim',
        grayBoxText: 'Klaim',
        triangleDown: ''
    }
    return(
        <div className="h-100">
        <HeaderFixContainer config={config}/>
            <div className="content-adjuster">
                <main className="text-wrap col-sm-12 justify-content-center align-items-center">
                    <form className="h-100 col-sm-12 w-75 justify-content-center align-items-center mx-auto">
                        <div className="form-group col-sm-12">
                            <label htmlFor="TextInformantName">Nama Tertanggung</label>
                            <input type="text" id="TextInformantName" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Silahkan isi nama pelapor"/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="MobilePhoneInformant">No handphone pelapor</label>
                            <input type="tel" id="MobilePhoneInformant" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Silahkan isi no handphone pelapor"/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="TextPolicyNumber">Nomor Polis</label>
                            <input type="text" id="TextPolicyNumber" className="form-control" placeholder="Silahkan isi no polis anda"/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="DateOccured">Tanggal Kejadian</label>
                            <input type="date" id="DateOccured" className="form-control" placeholder="Silahkan pilih tanggal kejadian"/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="TimeOccured">Waktu Kejadian</label>
                            <input type="time" id="TimeOccured" className="form-control" placeholder="Silahkan pilih waktu kejadian"/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="AreaChronology">Kronologis Kejadian</label>
                            <textarea id="AreaChronology" className="form-control" placeholder="Silahkan isi kronologis kejadian" rows="5" cols="10"/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="AreaBrokenPart">Bagian yang mengalami kerusakan</label>
                            <textarea id="AreaBrokenPart" className="form-control" placeholder="Silahkan isi bagian yang rusak" rows="5" cols="10"/>
                        </div>
                        
                        <div className="form-group col-sm-12">
                            <label htmlFor="TextEstimatedLoss">Perkiraan Kerugian</label>
                            <input type="text" id="TextEstimatedLoss" className="form-control"/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="AreaLocationOccured">Lokasi Kejadian</label>
                            <textarea id="AreaLocationOccured" className="form-control" placeholder="Silahkan isi lokasi kejadian" rows="5" cols="10"/>
                        </div>
                        
                        <div className="col-sm-12 text-center">
                            <button type="submit" className="btn btn-reset btn-yellow">Ajukan</button>
                        </div>
                        <br/>
                        <br/>
                    </form>
                </main>
            </div>
            <FooterBackground/>
        </div>
    )
}