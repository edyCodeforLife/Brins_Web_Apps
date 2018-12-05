import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { claimSubmission } from '../action/claim-submission';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import ClaimModel from '../models/claim-model';
import SimpleReactValidator from 'simple-react-validator';

class ClaimSubmission extends React.Component {

    constructor(props){
        super(props);
        this.ReactValidator = new SimpleReactValidator();
        this.state ={
            ClaimModel:ClaimModel,
            IncidentDateNow:'',
            IncidentTime:''
        }

        this.config = {
            headerLogoText:'Pengajuan Klaim',
            grayBoxText: 'Klaim',
            triangleDown: ''
        }
    }

    onInputChange = (event) =>{
        console.log(event.target.id);
        if(event.target.id == 'IncidentDateNow' || event.target.id == 'IncidentTime')
        {
            this.setState({
                [event.target.id]:event.target.value
            })
        }
        else{
            this.setState({
                ClaimModel:{
                    ...this.state.ClaimModel,
                    [event.target.id]:event.target.value
                }
             }
            )
        }           
    }

    componentDidUpdate(){
        let thisButton = document.getElementById("ButtonSubmission");
        this.state.ClaimModel.IncidentDate = (this.state.IncidentDateNow + ' ' + this.state.IncidentTime);
        if(this.props.claim){
            if(this.props.claim.data){
                if(this.props.claim.data.MessageContent == 'Form klaim berhasil di simpan'){
                    if( this.ReactValidator.allValid() ){
                    thisButton.setAttribute("data-toggle", "modal");
                    thisButton.setAttribute("data-target", "#myModal");
                    }
                    else
                    {
                    thisButton.setAttribute("data-toggle", "");
                    thisButton.setAttribute("data-target", "");
                    }
                this.props.history.push('/claim-submission-result');
                }
            }
        }
    }

    componentWillMount(){
        this.state.ClaimModel.CreatedBy = this.props.login.Data.CustomerID;
    }

    click = (e) =>{
        e.preventDefault();
        if( this.ReactValidator.allValid() ){
            console.log('valid');
            this.props.claimSubmission(this.state.ClaimModel);
        }
        else
        {
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }
    }

    render(){
        return (
    <div className="h-100">
        <HeaderFixContainer config={this.config}/>
            <div className="content-adjuster">
            <div className="container">
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog modal-lg">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Success!</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <p>Data berhasil diubah.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
                <main className="text-wrap col-sm-12 justify-content-center align-items-center">
                    <form className="h-100 col-sm-12 w-75 justify-content-center align-items-center mx-auto" onSubmit={this.click}>
                        <div className="form-group col-sm-12">
                            <label htmlFor="ReporterName">Nama Pelapor</label>
                            <input type="text" id="ReporterName" className="form-control" minLength="1" maxLength="20" size="20" placeholder="Silahkan isi nama pelapor" onChange={this.onInputChange} value= {this.state.ClaimModel.ReporterName}/>
                            {
                                this.ReactValidator.message('ReporterName',this.state.ClaimModel.ReporterName,'required|alpha','alert alert-warning')
                            }
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="ReporterMobilePhone">No handphone pelapor</label>
                            <input type="tel" id="ReporterMobilePhone" className="form-control" minLength="4" maxLength="20" size="20" placeholder="Silahkan isi no handphone pelapor" onChange={this.onInputChange} value={this.state.ClaimModel.ReporterMobilePhone}/>
                            {
                                this.ReactValidator.message('ReporterMobilePhone',this.state.ClaimModel.ReporterMobilePhone,'required|integer','alert alert-warning')
                            }
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="PolicyNumber">Nomor Polis</label>
                            <input type="number" id="PolicyNumber" className="form-control" placeholder="Silahkan isi no polis anda" onChange={this.onInputChange} value={this.state.ClaimModel.PolicyNumber}/>
                            {
                                this.ReactValidator.message('PolicyNumber',this.state.ClaimModel.PolicyNumber,'required|integer','alert alert-warning')
                            }
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentDateNow">Tanggal Kejadian</label>
                            <input type="date" id="IncidentDateNow" className="form-control" placeholder="Silahkan pilih tanggal kejadian" onChange={this.onInputChange} value={this.state.IncidentDateNow}/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentTime">Waktu Kejadian</label>
                            <input type="time" id="IncidentTime" className="form-control" placeholder="Silahkan pilih waktu kejadian" onChange={this.onInputChange} value={this.state.IncidentTime}/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentNote">Kronologis Kejadian</label>
                            <textarea id="IncidentNote" className="form-control" placeholder="Silahkan isi kronologis kejadian" rows="5" cols="10" onChange={this.onInputChange} value={this.state.ClaimModel.IncidentNote}/>
                            {
                                this.ReactValidator.message('IncidentNote',this.state.ClaimModel.IncidentNote,'required|alpha','alert alert-warning')
                            }
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="DamagedPart">Bagian yang mengalami kerusakan</label>
                            <textarea id="DamagedPart" className="form-control" placeholder="Silahkan isi bagian yang rusak" rows="5" cols="10" onChange={this.onInputChange} value={this.state.ClaimModel.DamagedPart}/>
                            {
                                this.ReactValidator.message('DamagedPart',this.state.ClaimModel.DamagedPart,'required|alpha','alert alert-warning')
                            }
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="TotalLoss">Perkiraan Kerugian</label>
                            <input type="text" id="TotalLoss" className="form-control" onChange={this.onInputChange} value={'Rp' + this.state.ClaimModel.TotalLoss}/>
                            {
                                this.ReactValidator.message('TotalLoss',this.state.ClaimModel.TotalLoss,'required|integer','alert alert-warning')
                            }
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="IncidentLocation">Lokasi Kejadian</label>
                            <textarea id="IncidentLocation" className="form-control" placeholder="Silahkan isi lokasi kejadian" rows="5" cols="10" onChange={this.onInputChange} value={this.state.ClaimModel.IncidentLocation}/>
                            {
                                this.ReactValidator.message('IncidentLocation',this.state.ClaimModel.IncidentLocation,'required|alpha','alert alert-warning')
                            }
                        </div>

                        <div className="col-sm-12 text-center">
                            <button id="ButtonSubmission" className="btn btn-reset btn-yellow">Ajukan</button>
                        </div>
                        <br/>
                        <br/>
                    </form>
                </main>
            </div>
        <FooterBackground/>
    </div>
        );
    }
}


function mapStateToProps({login , claim}){
    return {login ,claim};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ claimSubmission },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ClaimSubmission);