import React,{Component} from 'react';
import Modal from '../UI/Modal/Modal'
import classes from './Login.module.css'
import Input from '../UI/Input/Input'
import Link from '../UI/Link/Link'
import Aux from '../../hoc/Wrap'
import Spinner from '../UI/Spinner/Spinner'
import Error from '../UI/Error/Error'

class Login extends Component{

    shouldComponentUpdate(nextProps, nextState){
        //console.log('[LOGIN UPDATE] Inside shouldComponentUpdate()') 
        //return nextProps.show !== this.props.show || nextProps.validate.email.status !== this.props.validate.email.status;
        return true;
    }

    componentWillUpdate(){
        //console.log('[LOGIN UPDATE] Inside componentWillUpdate()') 
    }

    render(){
        let error='';
        if(this.props.error!==''){
            error=<Error error={this.props.error} style="alert alert-danger"/>
        }
        else{
            error=null;
        }
        return (
            <Modal show={this.props.show} close={this.props.close}>
                <div className={classes.Login}> 
                    <h1>Login</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Aux>
                         {error}
                        <Input type="email" validate={this.props.validate.email}>Email</Input>
                        <Input type="password" validate={this.props.validate.password}>Password</Input>
                        <button 
                            disabled={this.props.disabled} 
                            className="btn btn-dark w-75 mb-3"
                            onClick={this.props.login}
                        >Login</button>
                        <p>Not a member? <Link switch={this.props.switch}>Sign Up</Link></p>
                    </Aux>
                </div>
                {this.props.spinner?<Spinner/>:null}
            </Modal>
            
        ) 
    }
}

export default Login;