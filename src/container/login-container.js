import React from 'react';
import { doLogin } from '../action/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import BlueBoxLogo from '../components/common/blue-box-logo';
import authHOC from './hoc/auth';

export class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            handphoneNumber:'087853505135',
            password:'123456',
            currentRole:'Customer'
        }

     
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })

    }

    componentDidUpdate(prevProps,prevState){
       
        if(!_.isEmpty(this.props.login) && _.isEmpty(prevProps.login)){
          
            this.props.getPopupData({
                        headerText:'Nasabah',
                        bodyText:this.props.login.MessageContent,
                        senderComponent:'login',
                        buttonOKText:['OK'],
                        redirectTo:'product'
                    })

        }
       
    }

    onLoginSubmit = (event) =>{
     
        event.preventDefault();
        let login = {
            handphoneNumber:this.state.handphoneNumber,
            password:this.state.password,
            currentRole:this.state.currentRole
        }
        this.props.doLogin(login);
    
     
        // this.props.getPopupData({
        //     headerText:'Nasabah',
        //     bodyText:this.props.login.MessageContent,
        //     senderComponent:'login',
        //     buttonOKText:['OK'],
        //     redirectTo:'product'
        // })
  
    }

    getRole = (event) =>{
   
        this.setState({
            currentRole:event.currentTarget.innerText.trim()
        })
console.log(event.currentTarget.innerText);
     
    }

    

    render(){
        return (
            <div className="h-100">
            <BlueBoxLogo getRole={this.getRole} selectedRole={this.state.currentRole}/>
            <form onSubmit={this.onLoginSubmit}>
                <div className="form-group">
                    <label htmlFor="handphoneNumber">No. Handphone</label>
                    <input type="text" id="handphoneNumber" className="form-control" onChange={this.onInputChange} value={this.state.handphoneNumber} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Kata Sandi</label>
                    <input type="password" id="password" className="form-control" onChange={this.onInputChange} value={this.state.password} required/>
                </div>
                <div className="col-sm-12 text-center">
                    <button className="btn btn-login btn-yellow">Login</button>
                    <Link to="/register/step1" className={"btn btn-login btn-yellow " + (this.state.currentRole !== 'Customer' ? 'd-none':'')}>Register</Link>
                  
                   
                </div>
                <div className="col-sm-12 text-center">
                   <Link to={this.state.currentRole === 'Customer' ? "/forgotpassword" : "/forgotpasswordagent"} className="link-text">forgot password</Link>
                </div>
            </form>
            
        </div>
        );
    }
}

function mapStateToProps({login}){
    return {login};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({doLogin},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(authHOC(Login));
