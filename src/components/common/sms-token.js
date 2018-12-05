import React from 'react';

export default (props) =>
{
    return(
        <div className="col-sm-12">
            <div>
                <h4 className={props.style}>{props.text}</h4>
            </div>
                <div className="col-sm-12 section">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <div className="col-sm-2 text-center"><input type="number" maxLength={1} className="small-input text-center" id="verifyToken1" value={props.verifyToken} onChange={props.change} /></div>
                        <div className="col-sm-2 text-center"><input type="number" maxLength={1} className="small-input text-center" id="verifyToken2" value={props.verifyToken} onChange={props.change}  /></div>
                        <div className="col-sm-2 text-center"><input type="number" maxLength={1} className="small-input text-center" id="verifyToken3"  value={props.verifyToken} onChange={props.change}  /></div>
                        <div className="col-sm-2 text-center"><input type="number" maxLength={1} className="small-input text-center" id="verifyToken4"  value={props.verifyToken} onChange={props.change}  /></div>
                    </div>
                </div>
        </div>
    )
}