import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import { getTransactions } from '../action/transaction';
import State from '../constants/state';
import TransactionListPresentation from '../components/claim-list/claim-list';


class TransactionList extends React.Component {

    constructor(props){
        super(props);
       
        this.state = {
            transactions:[]
        }

        this.config = {
                 headerLogoText:'Daftar Transaksi',
                 blueBoxSmallNav:'List'
            }
    }

    componentWillMount(){
       this.props.getTransactions(this.props.login.Data);
    }

   
    componentDidUpdate(prevProps, prevState){
      if(this.props.transactions.length != 0 && this.state.transactions.length == 0){
          console.log(this.props.transactions);
          this.setState({
              transactions:this.props.transactions
          })
      }
    }
    render(){
        return (
            <div className="h-100 col-sm-12 container-fluid scroll-line">
                <HeaderFixContainer config={this.config}/>
                    <div className="content-adjuster-10 margin-Class ">
                        {this.state.transactions.map(t => (
                        <div key={t.ID} onClick={this.onTransactionListClick}>
                            <TransactionListPresentation ClaimNumber={'#' + t.ReferenceNumber} State={State[t.State]} IncidentLocation={t.modelProductAsri.BuildingAddress}
                             TotalLoss={'Rp ' + (parseInt(t.modelProductAsri.BuildingValue) + parseInt(t.modelProductAsri.InteriorValue))} IncidentTime={'Rp ' + t.TotalPremi} />
                        </div>
                        ))}
                    </div>
                <FooterBackground/>
             </div>
        );
    }
}


function mapStateToProps({login, transactions}){
    return {login,transactions};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getTransactions },dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps )(TransactionList);