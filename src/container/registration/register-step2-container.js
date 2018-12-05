import React from 'react';
import HeaderFixContainer from '../../components/common/header-fix-container';
import FooterBackground from '../../components/common/footer-background';
import _ from 'lodash';
import { connect } from 'react-redux';
import { registrationCheckPhone,verifyMobilePhoneToken } from '../../action/customer';
import { bindActionCreators } from 'redux';

export class RegisterStep2 extends React.Component  {
    config = {};
    constructor(props){
        super(props);
        this.config = {
            headerLogoText:'Daftar',
            grayBoxText:'Tahap 2',
            triangleDown:''
        }

        this.state = {
            smsToken1:'',
            smsToken2:'',
            smsToken3:'',
            smsToken4:''
        }
    }

    componentDidMount(){
        if(!_.isEmpty(this.props.customer)){         
            this.props.registrationCheckPhone(this.props.customer);
        }   
    }



    componentDidUpdate(prevState,prevProps){
        

        if(!_.isEmpty(this.props.register)){
            if(this.props.register.MessageContent.toLowerCase() === 'sms token salah'){
                alert('a');
            }
            if(this.props.register.MessageContent.toLowerCase() === 'sms token sukses'){
               
                this.props.history.push('/register/step3');
               
            }
         

            console.log(this.props.register.MessageContent.toLowerCase());
        }
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })

    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.customer.MobilePhoneToken = this.state.smsToken1 + this.state.smsToken2 + this.state.smsToken3 + this.state.smsToken4;
        this.props.verifyMobilePhoneToken(this.props.customer);
        
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })

    }


    render(){
       
        return (
            <div className="h-100">
                <HeaderFixContainer config={this.config} />

                <div className="col-sm-12 content-adjuster">
                    <form className="form-register" onSubmit={this.onSubmit}>
                        <h4>SMS Token</h4>
                        <div className="col-sm-12 section">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <div className="col-sm-2 text-center"><input type="text" id="smsToken1" maxLength={1} className="small-input text-center" value={this.state.smsToken1} onChange={this.onInputChange} required/></div>
                                <div className="col-sm-2 text-center"><input type="text" id="smsToken2" maxLength={1} className="small-input text-center" value={this.state.smsToken2} onChange={this.onInputChange} required/></div>
                                <div className="col-sm-2 text-center"><input type="text" id="smsToken3" maxLength={1} className="small-input text-center" value={this.state.smsToken3} onChange={this.onInputChange} required/></div>
                                <div className="col-sm-2 text-center"><input type="text" id="smsToken4" maxLength={1} className="small-input text-center" value={this.state.smsToken4} onChange={this.onInputChange} required/></div>
                            </div>
                            <div className="col-sm-12 text-center section">
                                {/* <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/register/step3">Lanjut</Link> */}
                                <button className="btn btn-login btn-yellow">Lanjut</button>
                                <button className="btn btn-login btn-yellow">Kirim Ulang</button>
                            </div>
                        </div>    
                        
                    </form>
                </div>
                <FooterBackground />
            </div>
        )
    }
}


function mapStateToProps({customer,register}){
    return {customer,register};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({registrationCheckPhone,verifyMobilePhoneToken},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterStep2);