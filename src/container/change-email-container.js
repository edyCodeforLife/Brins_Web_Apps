import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import { saveEmail } from '../action/email';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FooterBackground from '../components/common/footer-background';
import SimpleReactValidator from 'simple-react-validator';

export class ChangeEmail extends React.Component {

    constructor(props){
        super(props);
        this.ReactValidator = new SimpleReactValidator();
        this.state={EmailChange:''}

        this.config ={
        headerLogoText:'Ubah Email',
        grayBoxText: 'Change Email',
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
        this.props.login.Data.Email = this.state.EmailChange;
        if(this.ReactValidator.allValid()){
            this.props.saveEmail(this.props.login);
        }else{
            this.ReactValidator.showMessages();
            this.forceUpdate();
        }
    }

    componentDidUpdate(){

        let thisButton = document.getElementById("NextButton");
        if( this.ReactValidator.allValid() ){
            console.log('ya')
            thisButton.setAttribute("data-toggle", "modal");
            thisButton.setAttribute("data-target", "#myModal");
            this.props.history.push("/change-email-token");
        }
            else
        {
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
                <main>
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
                    <form className="h-100" onSubmit={this.click}>

                        <div className="form-group col-sm-12">
                        <label htmlFor="EmailChange">Email</label>
                        <input type="email" id="EmailChange" className="form-control" minLength="8" maxLength="50" size="50" placeholder="Silahkan isi alamat email" onChange={this.onInputChange} value={this.state.EmailChange}/>
                        </div>
                        {this.ReactValidator.message('email',this.state.EmailChange,'required|email', 'alert alert-warning')}

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

function mapStateToProps({login , email}){
    return {login , email};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveEmail},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangeEmail);