import React from 'react';
import classes from './Backdrop.module.css';

const backdrop =(props)=>{
    return(
        <div 
            className={classes.Backdrop}
            style={{display: props.show ? 'block' : 'none'}}
            onClick = {props.close}
        >
        </div>
    )
}

export default backdrop;