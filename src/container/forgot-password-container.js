import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { forgotPassword , checkExistInServer} from '../action/forgot-password';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import POPUP from '../components/common/popup';
import SimpleReactValidator from 'simple-react-validator';

export class ForgotPassword extends React.Component {

    constructor(props){
        super(props);
        this.ReactValidator = new SimpleReactValidator();
        this.state = {
            TelHandphoneNumber:'',
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
        if(this.ReactValidator.allValid())
        {
            thisButton.setAttribute("data-toggle", "modal");
            thisButton.setAttribute("data-target", "#myModal");
            this.props.checkExistInServer(this.state.TelHandphoneNumber , this.state.EmailAddressUser);
            console.log('cek saja dulu')
        }
        else
        {
            thisButton.setAttribute("data-toggle", "");
            thisButton.setAttribute("data-target", "");
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }
    }

    componentDidUpdate(prevState,prevProps){

        console.log(prevState);
        console.log(prevProps);
        console.log(this.props.forgotpassword);
        if(this.props.forgotpassword){
            if(this.props.forgotpassword.data){
                if(this.props.forgotpassword.data.MessageContent == "Data Customer Sudah Ada")
                {
                        this.props.history.push('/');
                        this.props.forgotPassword(this.state.TelHandphoneNumber , this.state.EmailAddressUser);
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
                        <label htmlFor="TelHandphoneNumber">No. Handphone</label>
                        <input type="number" id="TelHandphoneNumber" className="form-control" minLength="3" maxLength="20" size="20" placeholder="Silahkan isi nomor telepon" onChange={this.onInputChange} value={this.state.TelHandphoneNumber}/>
                        {this.ReactValidator.message('handphone number',this.state.TelHandphoneNumber,'required|integer','alert alert-warning')}
                    </div>

                    <div className="form-group col-sm-12">
                        <label htmlFor="EmailAddressUser">Email</label>
                        <input type="email" id="EmailAddressUser" className="form-control" placeholder="Silahkan isi alamat email"onChange={this.onInputChange} value={this.state.EmailAddressUser}/>
                        {this.ReactValidator.message('email',this.state.EmailAddressUser,'required|email','alert alert-warning')}
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

function mapStateToProps({forgotpassword}){
    return {forgotpassword};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({forgotPassword , checkExistInServer},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ForgotPassword);
