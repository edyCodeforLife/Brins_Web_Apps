import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import SmsToken from '.././components/common/sms-token';
import { changeMobilePhone, verifySMSToken, updateMobilePhone  } from '../action/mobile-phone';

export class ChangeMobilePhoneToken extends React.Component{

    constructor(props)
    {
        super(props);
        this.state= {
            verifyToken1:'',
            verifyToken2:'',
            verifyToken3:'',
            verifyToken4:''
        }
        this.config = {
            headerLogoText:'Ubah Nomor Telepon',
            grayBoxText: 'Verify Mobile Phone',
            triangleDown: ''
        }
    }

    componentDidMount(){
        if(!_.isEmpty(this.props.mobilephone)){
            this.props.changeMobilePhone(this.props.mobilephone);
        }
    }
    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    click = (e) => {
        e.preventDefault();
        this.props.login.Data.MobilePhoneToken = this.state.verifyToken1 + this.state.verifyToken2 +this.state.verifyToken3 + this.state.verifyToken4;
        if(this.ReactValidator.allValid()){
            this.props.verifySMSToken(this.props.login.Data);
        }else{
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }

     }

    componentDidUpdate(prevState,prevProps) {
        console.log(prevState)
        console.log(prevProps)
        console.log(this.props);
        let thisButton = document.getElementById("NextButton");
        if(this.props.mobilephone){
            if(this.props.mobilephone.data){
                if(this.props.mobilephone.data.MessageContent == "SMS Token Sukses")
                {
                    this.props.updateMobilePhone(this.props.login.Data);
                }
                if(this.props.mobilephone.data.MessageContent == "Data Customer Telah Berubah")
                {
                    thisButton.setAttribute("data-toggle", "modal");
                    thisButton.setAttribute("data-target", "#myModal");
                    this.props.history.push("/change-mobile-phone-result");
                }
                else
                {
                    thisButton.setAttribute("data-toggle", "");
                    thisButton.setAttribute("data-target", "");
                }
            }
    }
}
    render(){
        return(
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
                    <form className="form-token" onSubmit={this.click}>
                        <SmsToken verifyToken={this.state.verifyToken} style="font-nav" text="SMS Token" change={this.onInputChange}/>
                        <br/>
                        <br/>
                        <div className="col-sm-12 text-center section">
                            <button className="btn btn-login btn-yellow"id="NextButton" type="submit">Lanjut</button>
                            <button className="btn btn-login btn-gray">Kirim Ulang</button>
                        </div>
                    </form>
                </div>
                <FooterBackground/>
            </div>
        );
    }
}

function mapStateToProps({login, mobilephone}){
    return {login, mobilephone};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeMobilePhone, verifySMSToken, updateMobilePhone },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeMobilePhoneToken);