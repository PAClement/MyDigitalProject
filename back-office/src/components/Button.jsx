import React from 'react';

const Button = (props) => {

    return (
        <>
            <button className={`btn ${props.type} ${props.color}`}>
                <span>{props.name}</span>
                <i className={props.icon}></i>
            </button>
        </>
    );
};

export default Button;