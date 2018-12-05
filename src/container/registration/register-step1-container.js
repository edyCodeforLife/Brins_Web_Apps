import React from 'react';
import HeaderFixContainer from '../../components/common/header-fix-container';
import FooterBackground from '../../components/common/footer-background';
import { connect } from 'react-redux';
import { saveRegistrationData,registrationCheckPhone,registrationCheckExistCustomer } from '../../action/customer';
import { bindActionCreators } from 'redux';
import PopUp from '../../components/common/popup';
import _ from 'lodash';


export class RegisterStep1 extends React.Component  {
    config = {};
    popupConfig = {};
    isCustomerChecked = false;
   
    constructor(props){
        super(props);
        this.config = {
            headerLogoText:'Daftar',
            grayBoxText:'Tahap 1',
            triangleDown:''
        }

        this.state = {
            handphoneNumber : '087775151888',
            email:'airen142004@yahoo.com',
            isShowPopup:false
        }

        this.popupConfig = {
            popupID : 'id' + new Date().getTime(),
            headerText : 'Notifikasi',
            bodyText : '',
            imgSrc : '/src/images/fail.png',
            buttonOKText :['OK'],
            visible:false
        }
    }

    hidePopup = (e) => {
        this.popupConfig.visible = false;
    }

    componentDidUpdate(){
      
        if(!_.isEmpty(this.props.register) && !this.isCustomerChecked){
          
            if(this.props.register.MessageContent == 'Data Customer Sudah Ada' && this.state.isShowPopup){
                this.popupConfig.bodyText = this.props.register.MessageContent;
                this.popupConfig.visible = true;
                this.setState({
                    isShowPopup:false
                })
              
               
            }

            if(this.props.register.MessageContent == 'Data Customer Tidak Ada'){
               
                this.props.history.push('/register/step2');
            }
            this.isCustomerChecked = true;
        }
       
       
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.isCustomerChecked = false;
        this.setState({
            isShowPopup:true
        })
        this.props.saveRegistrationData({mobilePhone:this.state.handphoneNumber,email:this.state.email});
        this.props.registrationCheckExistCustomer({MobilePhone:this.state.handphoneNumber,Email:this.state.email})
        // this.props.history.push('/register/step2');
        
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })

    }


    render(){
       
        return (
         
                <div className="col-sm-12 content-adjuster">
                    <HeaderFixContainer config={this.config} />
                    <PopUp config={this.popupConfig} hidePopup={this.hidePopup}/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="handphoneNumber">No. Handphone</label>
                            <input type="text" id="handphoneNumber" placeholder="Silahkan isi no handphone Tertanggung" className="form-control" onChange={this.onInputChange} value={this.state.handphoneNumber} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Silahkan isi email Tertanggung" className="form-control" onChange={this.onInputChange} value={this.state.email}/>
                        </div>
                        <div className="col-sm-12 text-center">
                            {/* <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/register/step2">Lanjut</Link> */}
                            <button  className="btn btn-login btn-yellow" >Lanjut</button>
                        </div>
                      
                    </form>
                    <FooterBackground />
                </div>
             
           
        )
    }
}


function mapStateToProps({customer,register}){
    return {customer,register};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveRegistrationData,registrationCheckPhone,registrationCheckExistCustomer},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterStep1);