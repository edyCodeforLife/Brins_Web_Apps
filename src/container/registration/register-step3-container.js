import React from 'react';
import HeaderFixContainer from '../../components/common/header-fix-container';
import FooterBackground from '../../components/common/footer-background';
import _ from 'lodash';
import { connect } from 'react-redux';
import { registrationCheckEmail,verifyEmailToken } from '../../action/customer';
import { bindActionCreators } from 'redux';
import InformationBox from '../../components/common/information-box';


export class RegisterStep3 extends React.Component  {
    config = {};
    informationConfig = {};
    constructor(props){
        super(props);
        this.config = {
            headerLogoText:'Daftar',
            grayBoxText:'Tahap 3',
            triangleDown:''
        }
       
    
        this.informationConfig = {
            headerText:'Information',
            description:'Harap periksa email spam anda apabila konfirmasi token email tidak terdapat pada inbox anda.'
        }

        this.state = {
            emailToken1:'',
            emailToken2:'',
            emailToken3:'',
            emailToken4:''
        }

    }

    componentDidMount(){
        
        if(!_.isEmpty(this.props.customer)){
            this.props.registrationCheckEmail(this.props.customer);
        }   
    }



    componentDidUpdate(prevState,prevProps){
        

        if(!_.isEmpty(this.props.register)){
            if(this.props.register.MessageContent.toLowerCase() === 'email token salah'){
                alert('a');
            }
            if(this.props.register.MessageContent.toLowerCase() === 'email token sukses'){
                this.props.history.push('/register/step4');
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
        // this.props.saveRegistrationData({mobilePhone:this.state.handphoneNumber,email:this.state.email})
        // this.props.history.push('/');
        console.log(this.props);
        this.props.customer.EmailToken = this.state.emailToken1 + this.state.emailToken2 + this.state.emailToken3 + this.state.emailToken4;
        this.props.verifyEmailToken(this.props.customer);
      
        
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
                        <h4>Email Token</h4>
                        <div className="col-sm-12 section">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <div className="col-sm-2 text-center"><input type="text" id="emailToken1" maxLength={1} className="small-input text-center" value={this.state.emailToken1} onChange={this.onInputChange} required/></div>
                                <div className="col-sm-2 text-center"><input type="text" id="emailToken2" maxLength={1} className="small-input text-center" value={this.state.emailToken2} onChange={this.onInputChange} required/></div>
                                <div className="col-sm-2 text-center"><input type="text" id="emailToken3" maxLength={1} className="small-input text-center" value={this.state.emailToken3} onChange={this.onInputChange} required/></div>
                                <div className="col-sm-2 text-center"><input type="text" id="emailToken4" maxLength={1} className="small-input text-center" value={this.state.emailToken4} onChange={this.onInputChange} required/></div>
                            </div>
                            <InformationBox config={this.informationConfig}/>
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
    return bindActionCreators({registrationCheckEmail,verifyEmailToken},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterStep3);