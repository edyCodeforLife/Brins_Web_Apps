import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { agentChangePassword } from '../action/change-password-agent';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';

export class ChangePassword extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                        PasswordChangePasswordOld:'',
                        PasswordChangePasswordNew:'',
                        PasswordChangePasswordConfirmation:''
                        }

        this.config = {
            headerLogoText:'Ubah Password',
            grayBoxText: 'Change Password',
            triangleDown: ''
        }
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    click = (e) =>{
        e.preventDefault();
        console.log(this.props.login);
        this.props.login.Data.Password = this.state.PasswordChangePasswordOld;
        this.props.login.Data.PasswordNew = this.state.PasswordChangePasswordNew;
        var passwordConfirmation = this.state.PasswordChangePasswordConfirmation;
        if(this.props.login.Data.PasswordNew == passwordConfirmation){
            console.log('a')
                this.props.agentChangePassword(this.props.login.Data);
            }   
    }

    componentDidUpdate(prevState,prevProps){
        console.log(prevState);
        console.log(prevProps);
        if(this.props.agentchangepassword){
            if(this.props.agentchangepassword.data){
                if(this.props.agentchangepassword.data.MessageContent == "agen ganti password berhasil"){
                    this.props.history.push("/change-password-result");
                }
            }
        }
    }        
    render(){
        return (
            <div className="h-100">
            <HeaderFixContainer config={this.config}/>
            <div className="content-adjuster">
                <main>
                    <form onSubmit={this.click} className="h-100">

                        <div className="form-group col-sm-12">
                            <label htmlFor="PasswordChangePasswordOld">Password lama</label>
                            <input type="password" id="PasswordChangePasswordOld" className="form-control" minLength="6" maxLength="20" size="20" placeholder="Silahkan isi password lama anda" onChange={this.onInputChange}
                            value={this.state.PasswordChangePasswordOld}/>
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="PasswordChangePasswordNew">Password baru</label>
                            <input type="password" id="PasswordChangePasswordNew" className="form-control" minLength="6" maxLength="20" size="20" placeholder="Silahkan isi password baru anda minimum 6 karakter" onChange={this.onInputChange} value={this.state.PasswordChangePasswordNew} />
                        </div>

                        <div className="form-group col-sm-12">
                            <label htmlFor="PasswordChangePasswordConfirmation">Konfirmasi password</label>
                            <input type="password" id="PasswordChangePasswordConfirmation" className="form-control" minLength="6" maxLength="20" size="20" placeholder="Silahkan isi ulang password anda" onChange={this.onInputChange}
                            value={this.state.PasswordChangePasswordConfirmation}/>
                        </div>

                        <div className="col-sm-12 text-center">
                            <button className="btn btn-login btn-yellow"id="NextButton" type="submit">Lanjut</button>
                        </div>

                    </form>
                </main>
            </div>
            <FooterBackground/>
        </div>
        );
    }
}

function mapStateToProps({login , agentchangepassword}){
    return {login ,agentchangepassword};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({agentChangePassword},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);

