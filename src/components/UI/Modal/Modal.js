import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Wrap'


const modal=(props)=>{
    return(
        <Aux>
            <Backdrop show ={props.show} close={props.close}/>
            <div className={classes.Modal} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'   }}>
                <div className={classes.Close} onClick={props.close}><strong>x</strong></div>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;