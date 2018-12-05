import React from 'react';
import HeaderFixContainer from '../../components/common/header-fix-container';
import FooterBackground from '../../components/common/footer-background';
import { connect } from 'react-redux';
import { getBranch } from '../../action/lookup';
import { bindActionCreators } from 'redux';
import { registerCustomer } from '../../action/customer';


class RegisterStep4 extends React.Component  {
    config = {};
    branchOptions = [];
    constructor(props){
        super(props);
        this.config = {
            headerLogoText:'Daftar',
            grayBoxText:'Tahap 4',
            triangleDown:''
        }

        this.state = {
            customerModel:Object.assign({},this.props.customer),
            branchs:[]
        }

        console.log(this.state);
     
    }

    componentDidMount(){
      
        this.props.getBranch();
    
    }

    componentDidUpdate(prevState,prevProps){
     
       if(this.props.register){
            if(this.props.register.MessageContent == 'Email Sukses'){
                this.props.history.push('/');
            }    
       }
     
       if(this.props.lookup.branch && this.branchOptions.length == 0){
       
           this.props.lookup.branch.map(b =>{
                this.branchOptions.push(<option key={b.Code} value={b.Code}>{b.Name}</option>);    
           })
           
           this.setState({
               branchs:this.branchOptions,
               customerModel:{
                   ...this.state.customerModel,
                   BranchCode:this.props.lookup.branch[0].Code
               }
           })
       }
        
    }

   

    onSubmit = (e) =>{
        e.preventDefault();

        console.log(this.state);
        
        if(this.state.customerModel.Password === this.state.customerModel.PasswordConfirmation)
            this.props.registerCustomer(this.state.customerModel)
        else
            alert('a');
    }

    onInputChange = (event) =>{
       
        this.setState({
            customerModel:{
                ...this.state.customerModel,
                [event.target.id]:event.target.value
            }
           
        })

    }

    onRadioChange = (event) =>{
        this.setState({
            customerModel:{
                ...this.state.customerModel,
                [event.target.name]:event.target.value
            }
           
        })

    }


    render(){
       
       
        return (
            <div className="h-100">
            <HeaderFixContainer config={this.config} />
            <div className="col-sm-12 content-adjuster">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="IdentificationName">Nama</label>
                        <input type="text" id="IdentificationName" placeholder="Silahkan isi nama Tertanggung" className="form-control" onChange={this.onInputChange} value={this.state.customerModel.IdentificationName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="IdentificationNumber">Nomer KTP</label>
                        <input type="number" id="IdentificationNumber" placeholder="Silahkan isi Nomer KTP" className="form-control" onChange={this.onInputChange} value={this.state.customerModel.IdentificationNumber}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Address">Alamat Korespondensi</label>
                        <textarea id="Address" className="form-control" rows="5" onChange={this.onInputChange} value={this.state.customerModel.Address}/>
                    </div>
                    <div className="form-group">
                    <label className="form-check-label" htmlFor="sex">Jenis Kelamin</label>
                    
                    <div className="col-sm-12">
                        <div className="form-check form-check-inline col-sm-3">
                            <input type="radio" className="form-check-input" name="Sex" id="sexMale" checked={this.state.customerModel.Sex === 'M'} onChange={this.onRadioChange} value="M"/>
                            <label className="form-check-label" htmlFor="sexMale">Laki-laki</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="Sex" id="sexFemale" checked={this.state.customerModel.Sex === 'F'} onChange={this.onRadioChange} value="F"/>
                            <label className="form-check-label" htmlFor="sexFemale">Perempuan</label>
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Birthday">Tanggal Lahir</label>
                        <input type="date" id="Birthday" className="form-control" onChange={this.onInputChange} value={this.state.customerModel.Birthday}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="BranchCode">Cabang Terdekat</label>
                        <select id="BranchCode" className="form-control" onChange={this.onInputChange} value={this.state.customerModel.BranchCode}>
                           {
                                this.branchOptions
                           }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" placeholder="Silahkan isi password minimum 6 karakter" className="form-control" onChange={this.onInputChange} value={this.state.customerModel.Password}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="PasswordConfirmation">Konfirmasi Password</label>
                        <input type="password" id="PasswordConfirmation" placeholder="Silahkan isi ulang password anda" className="form-control" onChange={this.onInputChange} value={this.state.customerModel.PasswordConfirmation}/>
                    </div>
                    <div className="col-sm-12 text-center">
                        {/* <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to="/register/finished">Konfirmasi</Link> */}
                        <button className="btn btn-login btn-yellow">Konfirmasi</button>
                    </div>
                </form>
            </div>
            <FooterBackground />
        </div>
        )
    }
}


function mapStateToProps({customer,lookup,register}){
    return {customer,lookup,register};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBranch,registerCustomer},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterStep4);