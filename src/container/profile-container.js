import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeProfile , nearBranch } from '../action/profile';
import SimpleReactValidator from 'simple-react-validator';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import CustomerModel from '../models/customer-model';
import BranchModel from '../models/branch-model';

class ChangeProfile extends React.Component {

    constructor(props){
        super(props);
        this.ReactValidator = new SimpleReactValidator();
        this.state = {
            Profile:'',
            TextNameProfile:'',
            TextIDNumberProfile:'',
            AreaCorrespondenceAddress:'',
            SelectedGender:'',
            DateBirthday:'',
            EmailProfile:'',
            TelProfile:'',
            TextNearBranch: BranchModel,
            Branch:''
        }

        this.config = {
            headerLogoText:'Ubah Profil',
            grayBoxText: 'Change Profile',
            triangleDown: ''
        }
    }

    ButtonClick(){
        let editInput = document.getElementsByClassName('inputdisabled');
        let buttonClick = document.getElementById("buttonClickChange");
        let buttonShow = document.getElementsByClassName('buttonInput');
        for (let i = 0; i<editInput.length; i++){
            if(editInput[i].getAttribute("id") != "Email" && editInput[i].getAttribute("id") != "MobilePhone" ){
                editInput[i].removeAttribute("disabled");
            }

            // editInput[i].disabled = false;

        }
            buttonClick.classList.add("d-none");
            buttonShow[0].classList.remove("d-none");
            buttonShow[1].classList.remove("d-none");
    }

    ButtonCancel(){
        let editInput = document.getElementsByClassName('inputdisabled');
        let buttonClick = document.getElementById("buttonClickChange");
        let buttonShow = document.getElementsByClassName('buttonInput');

        for (let i = 0; i<editInput.length; i++){
            editInput[i].disabled = true;
        }
        buttonClick.classList.remove("d-none");
        buttonShow[0].classList.add("d-none");
        buttonShow[1].classList.add("d-none");
    }

    ButtonConfirmation = (e) => {
        e.preventDefault();

        if( this.ReactValidator.allValid() ){
            console.log('valid');
            this.props.changeProfile(this.state.Profile);
        }
        else{
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }
    }

    onInputChange = (event) =>{
        console.log(this.state.Profile);
        console.log(event.target.value);
        this.setState({
            Profile:{
                ...this.state.Profile,
                [event.target.id]:event.target.value
            }
        })
    }

    onHandleChange = (event) =>{
        console.log(event.target.value);
        this.setState({
            Profile:{
                    Sex:event.target.value
            }
        })
    }

    setDateBirthday = (event) =>{
        console.log("a")
        var dateBirthday = this.state.Profile.Birthday;
        var stringBirthday = dateBirthday.toString();
        var arrayDate =  stringBirthday.split("T");
        this.setState({
            Profile:{
                Data:{
                    Birthday:event.target.value(arrayDate[0])
                }
            }
        })
    }

    setDateToLeadingZero = (dateParam) =>
    {
        let year = parseInt(dateParam.split('-')[0]);
        let month =parseInt(dateParam.split('-')[1]);
        let date = parseInt(dateParam.split('-')[2]);
        let dateWithLeadingZero = new Date(year,month,date).toISOString();


        return dateWithLeadingZero.split('T')[0];
    }

    componentWillMount(){
        console.log(this.props.login.Data);
        let login = this.props.login.Data;
        for(let l in login){
           if(l === 'Birthday'){
               login[l] = this.setDateToLeadingZero(login.Birthday.split("T")[0]);
           }
        }
        console.log(login);
        this.setState({
            Profile:login
        })
        console.log(login);
        console.log(this.state.Profile);

        this.state.TextNearBranch.Code = login.BranchCode;
        this.props.nearBranch(this.state.TextNearBranch);
    }
    componentDidUpdate(){
        console.log(this.props.profile.data);
        let thisButton = document.getElementById("buttonConfirmation");
        if( this.ReactValidator.allValid() ){
            console.log('ya')
            thisButton.setAttribute("data-toggle", "modal");
            thisButton.setAttribute("data-target", "#myModal");
        }
            else
        {
            thisButton.setAttribute("data-toggle", "");
            thisButton.setAttribute("data-target", "");
            // rerender to show messages for the first time
        }

        if(this.props.branch && this.state.Branch.length == 0){
            let emptyArray = [];
            this.props.branch.map(b =>{
                if(b.Code == this.state.Profile.BranchCode)
                {
                    emptyArray.push(<option key={b.ID} selected value={b.Code}>{b.Name}</option>);
                }
                else{
                    emptyArray.push(<option key={b.ID} value={b.Code}>{b.Name}</option>);
                }

            })
            this.setState({
                Branch:emptyArray
            })
        }
    }

    componentDidMount(){
        console.log(this.props.branch);
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
                <form className="h-100" onSubmit ={this.click}>

                    <div id="alertWarning" className="alert alert-success d-none">
                        <strong>Success!</strong> Data Berhasil Di simpan!
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="Name">Nama</label>
                        <input type="text" id="Name" className="form-control inputdisabled" onChange={this.onInputChange} value={this.state.Profile.Name} required disabled/>
                        {this.ReactValidator.message(
                            'name',
                            this.state.Profile.Name,
                            'required|alpha',
                            'alert alert-warning',
                            false,
                            {alpha:'data nama invalid'}
                            )}
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="IdentificationNumber">Nomor KTP</label>
                        <input type="number" id="IdentificationNumber" className="form-control inputdisabled" onChange={this.onInputChange} value={this.state.Profile.IdentificationNumber} required disabled/>
                        {this.ReactValidator.message('KTP',this.state.Profile.IdentificationNumber,'required|integer','alert alert-warning')}
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="Address">Alamat Korespondensi</label>
                        <textarea id="Address" className="form-control inputdisabled" rows="5" cols="10" onChange={this.onInputChange} value={this.state.Profile.Address}  required disabled/>
                        {this.ReactValidator.message('address',this.state.Profile.Address,'required|alpha_num_dash','alert alert-warning')}
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="RadioButtonSexMale">Jenis Kelamin</label>
                        <br/>
                        <div className="d-inline-flex flex-row justify-content-between">
                            <div className="col-sm-12 justify-content-center">
                                <input type="radio" id="RadioButtonSexMale" name="radioButtonSex" className="inputdisabled" checked={this.state.Profile.Sex == 'M'}  onChange={this.onHandleChange} value='M' disabled/>
                                <label className="p-2" htmlFor="RadioButtonSexMale">Pria</label>
                            </div>

                            <div className="col-sm-12 justify-content-center">
                                <input type="radio" id="RadioButtonSexFemale" name="radioButtonSex" className="inputdisabled" checked={this.state.Profile.Sex == 'F'} onChange={this.onHandleChange} value='F' disabled/>
                                <label className="p-2" htmlFor="RadioButtonSexFemale">Wanita</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="Birthday">Tanggal Lahir</label>
                        <input type="date" id="Birthday" className="form-control inputdisabled"   value={this.state.Profile.Birthday} required disabled/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" className="form-control inputdisabled" onChange={this.onInputChange} value={this.state.Profile.Email} required disabled/>
                        {this.ReactValidator.message('Email',this.state.Profile.Email,'required|email','alert alert-warning')}
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="MobilePhone">No. Handphone</label>
                        <input type="tel" id="MobilePhone" className="form-control inputdisabled" minLength="6" maxLength="20" size="20" onChange={this.onInputChange} value={this.state.Profile.MobilePhone} required disabled/>
                        {this.ReactValidator.message('mobilephone',this.state.Profile.MobilePhone,'required|integer','alert alert-warning')}
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="BranchCode">Cabang Terdekat</label>
                        <select id="BranchCode" className="form-control inputdisabled"onChange={this.onInputChange} selected={this.props.branch.Code} required disabled>
                            {
                                this.state.Branch
                            }
                        </select>
                    </div>

                    <div className="col-sm-12 text-center d-block">
                        <button onClick={this.ButtonClick} type="button" className="btn btn-reset btn-yellow" id="buttonClickChange">Ubah</button>
                    </div>


                    <div id="buttonContainer" className="col-sm-12 text-center d-inline-flex">
                        <div className="col-sm-6 text-center d-none buttonInput">
                            <button onClick={this.ButtonConfirmation} type="button" className="btn btn-reset btn-yellow" id="buttonConfirmation">Konfirmasi</button>
                        </div>

                        <div className="col-sm-6 text-center d-none buttonInput">
                            <button onClick={this.ButtonCancel} type="button" className="btn btn-reset btn-yellow" id="buttonCancel">Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
            <FooterBackground/>
        </div>
        );
    }
}

function mapStateToProps({login , branch, profile}){
    return {login , branch ,profile};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeProfile ,nearBranch },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeProfile);

