import React from 'react';

const Button = (props) => {

    return (
        <>
            <button className="globalButton">
                <i className={props.icon}></i>
                <span>{props.name}</span>
            </button>
        </>
    );
};

export default Button;