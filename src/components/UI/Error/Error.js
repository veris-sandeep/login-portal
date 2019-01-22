import React from 'react';

const error = (props) =>{
    return (
        <div className={props.styleClass}>
            <p>{props.error}</p>
        </div>
    )
}

export default error;