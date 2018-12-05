import React from 'react';

export default (props) => {
    return (
        <section className="d-flex col-sm-12 space padding-25 text-left label-reset-password align-items-center" id="gray-box">
        <h4 className="font-reset-password">{props.text}</h4>
        </section>
    )
}