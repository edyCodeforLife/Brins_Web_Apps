import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import SmsToken from '.././components/common/sms-token';
import SimpleReactValidator from 'simple-react-validator';
import { changeEmail , verifyEmailToken , updateEmail } from '../action/email';

export class ChangeEmailToken extends React.Component{
    constructor(props)
    {
        super(props);
        this.ReactValidator = new SimpleReactValidator();
        this.state= {
            verifyToken1:'',
            verifyToken2:'',
            verifyToken3:'',
            verifyToken4:''
        }

        this.config = {
            headerLogoText:'Ubah Email',
            grayBoxText: 'Verify Email',
            triangleDown: ''
        }
    }

    componentDidMount(){
        if(!_.isEmpty(this.props.email)){
            this.props.changeEmail(this.props.email);
        }
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

//    timer = () =>
//    {
//        var count=180;

//        var counter = setInterval(timer, 1000);
//        count-=1;
//        if (count <= 0)
//        {
//            clearInterval(counter);
//            return;
//        }
//    }

    click = (e) =>
    {
        e.preventDefault();
        this.props.login.Data.EmailToken = this.state.verifyToken1 + this.state.verifyToken2 +this.state.verifyToken3 + this.state.verifyToken4;

        if(this.ReactValidator.allValid()){
            this.props.verifyEmailToken(this.props.login.Data);
        }else{
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }
        console.log("coba");
    }

    componentDidUpdate(prevState,prevProps) {
        console.log(prevState)
        console.log(prevProps)
        console.log(this.props);
        let thisButton = document.getElementById("NextButton");
        if(this.props.email){
            if(this.props.email.data){
                if(this.props.email.data.MessageContent == "Email Token Sukses")
                {
                    this.props.updateEmail(this.props.login.Data);
                }
                if(this.props.email.data.MessageContent == "Data Customer Telah Berubah")
                {
                    thisButton.setAttribute("data-toggle", "modal");
                    thisButton.setAttribute("data-target", "#myModal");
                    this.props.history.push("/change-email-result");
                }else{
                    thisButton.setAttribute("data-toggle", "");
                    thisButton.setAttribute("data-target", "");
                }
            }
    }
}

    render()
        {
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
                        <SmsToken style="font-nav" text="Email Token" change={this.onInputChange} verifyToken={this.state.verifyToken}/>

                        {this.ReactValidator.message('token',this.state.verifyToken,'required|integer', 'alert alert-warning')}
                        <br/>
                        <br/>

                        <div className="alert alert-secondary mx-auto col-sm-12 p-2 justify-content-center w-82 col-sm-12 d-flex flex-row h-50">
                            <div className="justify-content-start d-flex col-sm-12">
                                <img className="h-50" src="/src/images/information.png"/>
                                <h4 className="ml-4 text-body"><strong>Informasi</strong>
                                <br/>
                                Harap periksa email spam anda apabila konfirmasi token email tidak terdapat pada inbox anda.
                                </h4>
                            </div>
                        </div>
                        <br/>
                        <div className="col-sm-12 text-center section">
                            <button className="btn btn-login btn-yellow"id="NextButton" type="submit">Lanjut</button>
                            <button className="btn btn-login btn-gray" value={'reset' + this.timer}>Kirim Ulang</button>
                        </div>
                    </form>
                    </div>
                    <FooterBackground/>
                </div>
            )
        }
}


function mapStateToProps({login , email}){
    return {login , email};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeEmail , verifyEmailToken , updateEmail},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeEmailToken);