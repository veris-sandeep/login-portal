import React from 'react'
import classes from './Input.module.css'

const input=(props)=>{
    return(
        <div className={classes.Input}>
            <input onChange={(event) => props.validate.func(event)} type={props.type} placeholder={props.children}></input>
            {props.validate.status == true && props.validate.error !=""? <p className={classes.Error}><i class="fa fa-exclamation-triangle"></i>{props.validate.error}</p> : null}
        </div>
    )
}

export default input;