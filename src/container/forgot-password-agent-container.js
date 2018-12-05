import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { forgotPasswordAgent } from '../action/forgot-password-agent';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import POPUP from '../components/common/popup';
import SimpleReactValidator from 'simple-react-validator';

export class ForgotPasswordAgent extends React.Component {

    constructor(props){
        super(props);
        this.ReactValidator = new SimpleReactValidator();
        this.state = {
            MobilePhone:'',
            EmailAddressUser:''
        }

        this.config = {
            headerLogoText:'Ubah Password',
            grayBoxText: 'Reset Password',
            triangleDown: ''
        }

        this.popupConfig ={
            headerText:'Nasabah',
            imgSrc:'./src/images/success.png',
            bodyText:'Password baru sudah di kirim ke email anda',
            buttonOKText:['OK']
        }
    }
    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    click = (e) =>{
        e.preventDefault();
        let thisButton = document.getElementById("ButtonReset");
        if( this.ReactValidator.allValid() ){
            console.log('valid');
            thisButton.setAttribute("data-toggle", "modal");
            thisButton.setAttribute("data-target", "#myModal");
            this.props.forgotPasswordAgent(this.state.MobilePhone , this.state.EmailAddressUser);
        }
        else{
            thisButton.setAttribute("data-toggle", "");
            thisButton.setAttribute("data-target", "");
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }
        console.log('cek saja dulu');
    }

    componentDidUpdate(prevState,prevProps){

        console.log(prevState);
        console.log(prevProps);
        console.log(this.props.forgotpasswordagent);
        if(this.props.forgotpasswordagent){
            if(this.props.forgotpasswordagent.data){
                if(this.props.forgotpasswordagent.data.MessageContent == "SMS agent sukses")
                {
                    this.props.history.push('/');
                }
            }
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
                <form className="h-100"onSubmit={this.click}>
                    <div className="form-group col-sm-12">
                        <label htmlFor="MobilePhone">MobilePhone</label>
                        <input type="text" id="MobilePhone" className="form-control" minLength="3" maxLength="20" size="20" placeholder="Silahkan isi Nomor HandPhone Anda" onChange={this.onInputChange} value={this.state.MobilePhone}/>
                        {
                            this.Reactvalidator.message('MobilePhone',this.state.MobilePhone,'required|integer','alert alert-warning')
                        }
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="EmailAddressUser">Email</label>
                        <input type="email" id="EmailAddressUser" className="form-control" placeholder="Silahkan isi alamat email"onChange={this.onInputChange} value={this.state.EmailAddressUser}/>
                        {
                            this.Reactvalidator.message('EmailAddressUser',this.state.EmailAddressUser,'required|email','alert alert-warning')
                        }
                    </div>

                    <div className="col-sm-12 text-center">
                        <button id="ButtonReset" className="btn btn-reset btn-yellow">Reset</button>
                    </div>

                </form>
            </div>
            <POPUP config={this.popupConfig} className="displayNone"/>
            <FooterBackground/>
        </div>
        );
    }
}

function mapStateToProps({forgotpasswordagent}){
    return {forgotpasswordagent};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({forgotPasswordAgent },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ForgotPasswordAgent);
