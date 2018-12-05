import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { claimList } from '../action/claim-list';
import ClaimList from '../components/claim-list/claim-list';
import ClaimModel from '../models/claim-model';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import State from '../constants/state';

class ClaimListContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ClaimModel : ClaimModel,
            ClaimData:[],
        }

        this.config = {
                 headerLogoText:'Daftar Klaim',
                 blueBoxSmallNav:'List'
            }
    }

    componentWillMount(){
        // this.state.ClaimModel.CreatedOn = new Date().toISOString();
        this.state.ClaimModel.CreatedBy = this.props.login.Data.CustomerID;
        this.state.ClaimModel.SubmittedBy = this.props.login.Data.CustomerID;
        console.log(this.state.ClaimModel);
        this.props.claimList(this.state.ClaimModel);
        console.log(this.state.ClaimData)
    }

    click = () =>{
        console.log();
        this.props.history.push('/claim-list-detail' + '/' + document.querySelector('#ClaimNumber').innerText.replace('#',"") );
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState)
        console.log(prevProps)
        console.log(this.props.claimlist)
        if(this.props.claimlist.length != 0 && this.state.ClaimData.length == 0){
            this.setState({
                ClaimData: this.props.claimlist
            })
        }
    }
    render(){
        return (
            <div className="h-100 col-sm-12 container-fluid scroll-line">
                <HeaderFixContainer config={this.config}/>
                    <div className="content-adjuster-10 margin-Class ">
                        {this.state.ClaimData.map(c => (
                        <div key={c.ID} onClick={this.click}>
                            <ClaimList ClaimNumber={'#' + c.ClaimNumber} click={this.click} State={State[c.State]} IncidentLocation={c.IncidentLocation}
                            PolicyNumber={c.PolicyNumber} IncidentTime={c.IncidentDate.split('T')[1].split('+')[0]} />
                        </div>
                        ))}
                    </div>
                <FooterBackground/>
             </div>
        );
    }
}


function mapStateToProps({login, claim , claimlist}){
    return {login ,claimlist, claim};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ claimList },dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps )(ClaimListContainer);