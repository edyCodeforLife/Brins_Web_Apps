import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { claimListDetail } from '../action/claim-list';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import State from '../constants/state';
import ClaimModel from '../models/claim-model';

class ClaimListDetailContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ClaimDetail:ClaimModel,
            ClaimNumber:'',
            IncidentDateNow:'',
            IncidentTime:'',
            ClaimStatusConstant:State,
            ClaimStatus:'',
            ClaimModel:ClaimModel
        }

        this.config = {
            headerLogoText:'Daftar Klaim',
            blueBoxSmallNav:'List'
        }
    }

    buttonClick = (e) => {
         e.preventDefault();
         this.props.history.push('/claim-list');
    }

    onInputChange = (event) =>{
            this.setState({
                ClaimDetail:{
                    ...this.state.ClaimDetail,
                    [event.target.id]:event.target.value
                }
            })
    }

    componentWillMount(event){

        this.state.ClaimModel.ClaimNumber = this.props.match.params.claimnumber;
        this.props.claimListDetail(this.state.ClaimModel);
        
    }

    componentDidUpdate(prevProps,prevState){
        
        if(this.props.claimdetail && this.state.ClaimDetail.ID == ''){
            this.setState({
                ClaimDetail: this.props.claimdetail,
                IncidentDateNow: this.props.claimdetail.IncidentDate.split('T')[0],
                IncidentTime: this.props.claimdetail.IncidentDate.split('T')[1].split('+')[0],
                ClaimStatus:this.state.ClaimStatusConstant[this.props.claimdetail.State]
            })
        }
    }
    componentDidMount(){
    }

    render(){
        return (
    <div className="h-100">
        <HeaderFixContainer config={this.config}/>
            <div className="content-adjuster-15">
                <main className="text-wrap col-sm-12 justify-content-center align-items-center">
                    <form onSubmit={this.buttonClick} className="h-100 col-sm-12 w-75 justify-content-center align-items-center mx-auto">

                        <div className="form-group col-sm-12">

                            <label htmlFor="ClaimNumber">Status Klaim</label>
                            <input type="text" id="ClaimNumber" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Status Klaim" value={this.state.ClaimStatus} disabled/>

                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="ReporterName">Nama Pelapor</label>
                            <input type="text" id="ReporterName" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Silahkan isi nama pelapor" value={this.state.ClaimDetail.ReporterName} disabled/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="ReporterMobilePhone">No handphone pelapor</label>
                            <input type="tel" id="ReporterMobilePhone" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Silahkan isi no handphone pelapor" value={this.state.ClaimDetail.ReporterMobilePhone} disabled/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="PolicyNumber">Nomor Polis</label>
                            <input type="number" id="PolicyNumber" className="form-control" placeholder="Silahkan isi no polis anda"value={this.state.ClaimDetail.PolicyNumber} disabled/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentDateNow">Tanggal Kejadian</label>
                            <input type="date" id="IncidentDateNow" className="form-control" placeholder="Silahkan pilih tanggal kejadian" value={this.state.IncidentDateNow} disabled/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentTime">Waktu Kejadian</label>
                            <input type="time" id="IncidentTime" className="form-control" placeholder="Silahkan pilih waktu kejadian" value={this.state.IncidentTime} disabled/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentNote">Kronologis Kejadian</label>
                            <textarea id="IncidentNote" className="form-control" placeholder="Silahkan isi kronologis kejadian" rows="5" cols="10" value={this.state.ClaimDetail.IncidentNote} disabled/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="DamagedPart">Bagian yang mengalami kerusakan</label>
                            <textarea id="DamagedPart" className="form-control" placeholder="Silahkan isi bagian yang rusak" rows="5" cols="10" onChange={this.onInputChange} value={this.state.ClaimDetail.DamagedPart} />
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="TotalLoss">Perkiraan Kerugian</label>
                            <input type="text" id="TotalLoss" className="form-control" value={this.state.ClaimDetail.TotalLoss} disabled/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentLocation">Lokasi Kejadian</label>
                            <textarea id="IncidentLocation" className="form-control" placeholder="Silahkan isi lokasi kejadian" rows="5" cols="10" value={this.state.ClaimDetail.IncidentLocation} disabled/>
                        </div>

                        <div className="col-sm-12 text-center">

                            <button className="btn btn-reset btn-yellow">Selesai</button>

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
}


function mapStateToProps({login , claimdetail}){
    return {login ,claimdetail};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ claimListDetail  },dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps )(ClaimListDetailContainer);