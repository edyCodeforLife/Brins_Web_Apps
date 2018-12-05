import React from 'react';
import { connect } from 'react-redux';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';

class ClaimSubmissionResult extends React.Component{
    constructor(props){
        super(props);
        this.state ={ClaimNumber:''}

        this.config = {
            headerLogoText:'Pengajuan Klaim',
            grayBoxText: 'Pengajuan Klaim',
            triangleDown: ''
        }
    }

    buttonClick = (e) => {
        e.preventDefault();
        this.props.history.push("/product");
    }

    componentWillMount(){
        this.setState({
            ClaimNumber :JSON.parse(this.props.claim.data.Data).ClaimNumber
        })
    }

    render(){
        return(
        <div className="h-100">
            <HeaderFixContainer config={this.config}/>
            <div className="content-adjuster">
                <main>
                    <form className="h-100">
                        <h2 className="col-sm-12 font-nav text-center color-black">Pengajuan Klaim Sukses</h2>
                        <h4 className="col-sm-12 text-center color-gray">Nomor Klaim Anda {this.state.ClaimNumber} . Pengajuan klaim anda akan ditindak lanjuti.</h4>

                        <div className="col-sm-12 text-center">
                            <button onClick={this.buttonClick} className="btn btn-reset btn-yellow">Selesai</button>
                        </div>
                    </form>
                </main>
            </div>
            <FooterBackground/>
        </div>
        );
    }
}
function mapStateToProps({claim}){
    return {claim};
}

export default connect(mapStateToProps)(ClaimSubmissionResult);