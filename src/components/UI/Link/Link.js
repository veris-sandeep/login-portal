import React from 'react';
import classes from './Link.module.css'

const link = (props) =>{
    return (
        <span className={classes.Link} onClick={props.switch}>
            {props.children}
        </span>
    )
}

export default link;