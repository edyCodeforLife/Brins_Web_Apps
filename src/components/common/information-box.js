import React from 'react';

export default (props)=> {
    return (
        <div className="col-sm-12 d-flex info-background section">
            <div className="col-sm-3 d-flex justify-content-center align-items-start">
                <img src="/src/images/information.png" />
            </div>
            <div className="col-sm-8">
                <h4 className="color-black">{props.config.headerText}</h4>
                <p>{props.config.description}</p>
            </div>
        </div>
    )
}

