import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="col-sm-12 blue-box-small-nav">
            <div className="row h-100">
                <div className="col-sm-4 d-flex align-items-center justify-content-start">
                    <Link to="/product" className="link-button">
                        <img src="/src/images/previous_enable.png"/>
                    </Link>
                </div>
                <div className="col-sm-4 d-flex align-items-center justify-content-center">
                    <span>{props.text}</span>
                </div>
                <div className="col-sm-4 d-flex align-items-center justify-content-end">
                    <img src="/src/images/next_disable.png"/>
                </div>
            </div>
        </div>
    )
}