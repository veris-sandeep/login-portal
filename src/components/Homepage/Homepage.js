import React,{Component} from 'react';
import classes from './Homepage.module.css';
import Button from '../UI/Button/Button'
import Aux from '../../hoc/Wrap'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import axios from '../../axios'

class Homepage extends Component{
    signupEmailValidationHandler = (event) =>{
        let updatedState = {...this.state} 
        let value = event.target.value;
        value = String(value).toLowerCase()
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let error = "";
        let status;
        if(!re.test(value)){
            error="Enter valid email Id"
            status=true
        }
        else{
            status=false
        }
        updatedState.validateSignup.email.status = status;
        updatedState.validateSignup.email.error = error;
        updatedState.signupFields.email = value
        this.setState({
            validateSignup: updatedState.validateSignup,
            signupFields: updatedState.signupFields
        })
        this.enableSignupButtonHandler(updatedState)
        
    }
    signupUsernameValidationHandler = (event) =>{
        let updatedState = {...this.state} 
        const value = event.target.value;
        let error = "";
        let status;
        if(value.length===0){
            error="Username is Required"
            status=true
        }
        else if(value.length<=6){
            error = "Username length should be greater than six"
            status=true
        }
        else{
            status=false
        }
        updatedState.validateSignup.username.status = status;
        updatedState.validateSignup.username.error = error;
        updatedState.signupFields.username = value
        this.setState({
            validateSignup: updatedState.validateSignup,
            signupFields: updatedState.signupFields
        })
        this.enableSignupButtonHandler(updatedState)
        
    }

    signupPasswordValidationHandler = (event) =>{
        let updatedState = {...this.state}
        const value = event.target.value; 
        let error = "";
        let status;
        if(value.length===0){
            error = "Password is required"
            status=true;
        }
        else if(value.length<=6){
            error= "Password length should be greater than six"
            status=true;
        }
        else{
            status=false;
        }
        updatedState.validateSignup.password.status = status
        updatedState.validateSignup.password.error = error
        updatedState.signupFields.password = value
        this.setState({
            validateSignup: updatedState.validateSignup,
            signupFields: updatedState.signupFields
        })
        this.enableSignupButtonHandler(updatedState)
    }
    signupPasswordConfirmValidationHandler = (event) =>{
        let updatedState = {...this.state}
        const value = event.target.value; 
        let error = "";
        let status;
        let password = updatedState.signupFields.password;
        if(password !== value){
            status=true
            error="Passwords don't match"
        }
        else{
            status=false;
        }
        updatedState.validateSignup.confirmPassword.status = status
        updatedState.validateSignup.confirmPassword.error = error
        this.setState({
            validateSignup: updatedState.validateSignup,
        })
        this.enableSignupButtonHandler(updatedState)
    }

    loginEmailValidationHandler = (event) =>{
        let updatedState = {...this.state} 
        let value = event.target.value;
        value = String(value).toLowerCase()
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let error = "";
        let status;
        if(!re.test(value)){
            error="Enter valid email Id"
            status=true
        }
        else{
            status=false
        }
        updatedState.validateLogin.email.status = status;
        updatedState.validateLogin.email.error = error;
        updatedState.loginFields.email = value
        this.setState({
            validateLogin: updatedState.validateLogin,
            loginFields: updatedState.loginFields
        })
        this.enableLoginButtonHandler(updatedState)
    }

    loginPasswordValidationHandler = (event) =>{
        let updatedState = {...this.state}
        const value = event.target.value; 
        let error = "";
        let status;
        if(value.length===0){
            error = "Password is required"
            status=true;
        }
        else if(value.length<=6){
            error= "Password length should be greater than six"
            status=true;
        }
        else{
            status=false;
        }
        updatedState.validateLogin.password.status = status
        updatedState.validateLogin.password.error = error
        updatedState.loginFields.password = value
        this.setState({
            validateLogin: updatedState.validateLogin,
            loginFields: updatedState.loginFields
        })
        this.enableLoginButtonHandler(updatedState)
    }

    state={
        showLogin: false,
        showSignup: false,
        validateLogin: {
            email: {status: true, error:'', func: this.loginEmailValidationHandler},
            password: {status: true, error:'', func: this.loginPasswordValidationHandler}
        },
        validateSignup: {
            email: {status: true, error:'', func: this.signupEmailValidationHandler},
            username:{status: true, error:'', func: this.signupUsernameValidationHandler},
            password: {status: true, error:'', func: this.signupPasswordValidationHandler},
            confirmPassword: {status: true, error:'', func: this.signupPasswordConfirmValidationHandler}
        },
        loginDisabled: true,
        signupDisabled: true,
        login: false,
        homepage: true,
        loginFields:{
            email:null,
            password:null
        },
        signupFields:{
            username:'',
            email:'',
            password:''
        },
        spinner:false,
        loginError : '',
        signupError : false
    }
    

    showLoginModalHandler = ()=>{
        this.setState({showLogin:true})
    }
    closeLoginModalHandler = ()=>{
        this.setState({showLogin:false})
    }
    showSignupModalHandler = ()=>{
        this.setState({showSignup:true})
    }
    closeSignupModalHandler = ()=>{
        this.setState({showSignup:false})
    }
    loginToSignupHandler = ()=>{
        this.setState({
            showLogin:false,
            showSignup: true
        })
    }
    signupToLoginHandler = ()=>{
        this.setState({
            showLogin:true,
            showSignup: false
        })
    }

    enableLoginButtonHandler = (state) =>{
        if(state.validateLogin.email.status === false && 
            state.validateLogin.password.status === false){
                this.setState({
                    loginDisabled: false
                })
            }
        else{
            this.setState({
                loginDisabled: true
            })
        }
    }

    enableSignupButtonHandler = (state) =>{
        if(state.validateSignup.email.status === false && 
            state.validateSignup.password.status === false &&
            state.validateSignup.confirmPassword.status === false &&
            state.validateSignup.username.status === false){
                this.setState({
                    signupDisabled: false
                })
            }
        else{
            this.setState({
                signupDisabled: true
            })
        }
    }

    loginHandler=()=>{
        this.setState({spinner: true})
        const data={
            email: this.state.loginFields.email,
            password: this.state.loginFields.password
        }
        axios.post('/login',data)
        .then(response=>{
            this.setState({
                login:true,
                showLogin: false,
                showSignup: false,
                homepage: false,
                spinner: false,
            })
        })
        .catch(err=>{
            this.setState({
                loginError: err.message,
                spinner: false
            })
        })
        
    }

    signupHandler=()=>{
        this.setState({spinner: true})
        const data={
            email: this.state.signupFields.email,
            password: this.state.signupFields.password,
            username: this.state.signupFields.email
        }
        axios.post('/join',data)
        .then(response=>{
            this.setState({
                spinner: false,
                signupError: true
            })
        })
        .catch(err=>{
            this.setState({
                signupError: err.message,
                spinner: false
            })
        })
    }

    render(){
        const assignedClasses = ['row',classes.Homepage]
        return(
            <Aux>
                {this.state.homepage ?  
                <div className={assignedClasses.join(" ")}>
                    <div className="col-md-6 offset-md-3">
                        <h1>React App</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                        <Button clicked={this.showLoginModalHandler} icon="fa-sign-in">Login</Button>
                        <Button clicked={this.showSignupModalHandler} icon="fa-user-plus">Signup</Button>
                    </div>
                </div>
                : null }
                <Login 
                    error={this.state.loginError}
                    disabled={this.state.loginDisabled} 
                    show={this.state.showLogin}  
                    close={this.closeLoginModalHandler} 
                    switch={this.loginToSignupHandler} 
                    validate={this.state.validateLogin}
                    login = {this.loginHandler}
                    spinner={this.state.spinner}
                />
                <Signup 
                    error={this.state.signupError}
                    show={this.state.showSignup}  
                    close={this.closeSignupModalHandler} 
                    switch={this.signupToLoginHandler}
                    validate={this.state.validateSignup}
                    disabled={this.state.signupDisabled}
                    signup={this.signupHandler}
                    spinner={this.state.spinner}
                />
                <WelcomeScreen show={this.state.login} />
            </Aux>
        ) 
    }
}

export default Homepage;