import React from 'react';

export default (props) => {
   console.log(props);
    return (
         
         <div className="col-sm-12 h-25">
            <div className="row h-100 align-items-end">
                <div onClick={props.getRole} className={"col-sm-6 login-type-box row align-items-center justify-content-center " + (props.selectedRole === 'Customer' ? 'role-selected' : '')}>
                    <h4>Customer</h4>
                </div>
                <div onClick={props.getRole} className={"col-sm-6 login-type-box row align-items-center justify-content-center "  + (props.selectedRole === 'Agent' ? 'role-selected' : '')}>
                    <h4>Agent</h4>
                </div>
            </div>
        </div>
    )
}