import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import { saveNumberMobilePhone } from '../action/mobile-phone';
import authHOC from './hoc/auth';
import SimpleReactValidator from 'simple-react-validator';

export class ChangeMobilePhone extends React.Component {
    config={};
    constructor(props){
        super(props);
        this.ReactValidator = new SimpleReactValidator();
        this.state = {handphoneNumber:''}

        this.config = {
            headerLogoText:'Ubah Nomor Telepon',
            grayBoxText: 'Change Mobile Phone',
            triangleDown: ''
        }
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    click = (e) => {
        e.preventDefault();
        console.log(this.props.login);
        this.props.login.Data.MobilePhone = this.state.handphoneNumber;
        if(this.ReactValidator.allValid()){
            this.props.saveNumberMobilePhone(this.props.login);
        }else{
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }
    }

    componentDidUpdate(){
        let thisButton = document.getElementById("NextButton");
        if(this.ReactValidator.allValid()){
            thisButton.setAttribute("data-toggle", "modal");
            thisButton.setAttribute("data-target", "#myModal");
            this.props.history.push("/change-mobile-phone-token");
        }else{
            thisButton.setAttribute("data-toggle", "");
            thisButton.setAttribute("data-target", "");
            // rerender to show messages for the first time
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
                    <main>
                        <form onSubmit={this.click} className="h-100">

                            <div className="form-group col-sm-12">
                                <label htmlFor="handphoneNumber">No. Handphone</label>
                                <input type="tel" id="handphoneNumber" className="form-control" minLength="8" maxLength="20" size="20" placeholder="Silahkan isi no handphone Tertanggung" onChange={this.onInputChange} value={this.state.handphoneNumber}/>
                                {this.ReactValidator.message('handphone',this.state.handphoneNumber,'required|integer','alert alert-warning')}
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

function mapStateToProps({login , mobilephone}){
    return {login ,mobilephone};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ saveNumberMobilePhone},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeMobilePhone);
