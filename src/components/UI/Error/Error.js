import React from 'react';

const error = (props) =>{
    return (
        <div className={props.style}>
            <p>{props.error}</p>
        </div>
    )
}

export default error;