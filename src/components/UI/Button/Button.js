import React from 'react';
import classes from './Button.module.css'

const button = (props) => {
    return (
        <div className={classes.Button}>
            <button onClick={props.clicked} type="button" className="btn btn-dark"><i className={"fa "+props.icon}></i> {props.children}</button> 
        </div>
    )
}

export default button;