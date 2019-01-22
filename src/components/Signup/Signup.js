import React,{Component} from 'react';
import Modal from '../UI/Modal/Modal'
import classes from './Signup.module.css'
import Input from '../UI/Input/Input'
import Link from '../UI/Link/Link'
import Spinner from '../UI/Spinner/Spinner'
import Error from '../UI/Error/Error'


class Signup extends Component{
    
    shouldComponentUpdate(nextProps, nextState){
        //console.log('[SIGNUP UPDATE] Inside shouldComponentUpdate()') 
        //return nextProps.show !== this.props.show;
        return true
    }

    componentWillUpdate(){
        //console.log('[SIGNUP UPDATE] Inside componentWillUpdate()') 
    }
    
    render(){
        let error='';
        if(this.props.error===false){
            error=null;
        }
        else if(this.props.error!==true){
            error=<Error error={this.props.error} styleClass="alert alert-danger"/>
        }
        else{
            error=<Error error="Signup Successful! Please login to continue"styleClass="alert alert-success"/>
        }
        return (
            <Modal show={this.props.show} close={this.props.close}>
                <div className={classes.Signup}> 
                    <h1>Signup</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     {error}
                     <Input type="email" validate={this.props.validate.email}>Enter Email</Input>
                     <Input type="text" validate={this.props.validate.username}>Enter Username</Input>
                     <Input type="password" validate={this.props.validate.password}>Set Password</Input>
                     <Input type="password" validate={this.props.validate.confirmPassword}>Confirm Password</Input>
                    <button onClick={this.props.signup} disabled={this.props.disabled}className="btn btn-dark w-75 mb-3">Signup</button>
                    <p>Already a member? <Link switch={this.props.switch}>Log In</Link></p>
                </div>
                {this.props.spinner?<Spinner/>:null}
            </Modal>
            
        )
    }
}

export default Signup;