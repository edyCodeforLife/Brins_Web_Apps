import React from 'react';

export default (props) =>{
    return(
            <header id="header-box" className="col-sm-12 no-padding d-inline-flex flex-row-reverse align-items-center">
                <div className="justify-content-end">
                    <img src="/src/images/mainprimary_navigation.png" className="header-image img-responsive"/>
                </div>
                <div className="col-7 text-center">
                        <h4 className=" font-change-password">
                            {props.text}
                        </h4>
                </div>
            </header>
    )
}