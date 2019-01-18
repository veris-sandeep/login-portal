import React,{Component} from 'react';
import classes from './Homepage.module.css';
import Button from '../UI/Button/Button'
import Aux from '../../hoc/Wrap'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'

class Homepage extends Component{
    signupEmailValidationHandler = (event) =>{
        let updatedState = {...this.state} 
        const value = event.target.value;
        let error = "";
        let status;
        if(value.length==0){
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
        updatedState.validateSignup.email.status = status;
        updatedState.validateSignup.email.error = error;
        this.setState({
            validateSignup: updatedState.validateSignup
        })
        this.enableSignupButtonHandler(updatedState)
        
    }

    signupPasswordValidationHandler = (event) =>{
        let updatedState = {...this.state}
        const value = event.target.value; 
        let error = "";
        let status;
        if(value.length==0){
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
        this.setState({
            validateSignup: updatedState.validateSignup,
            signupPassword: value
        })
        this.enableSignupButtonHandler(updatedState)
    }
    signupPasswordConfirmValidationHandler = (event) =>{
        let updatedState = {...this.state}
        const value = event.target.value; 
        let error = "";
        let status;
        let password = updatedState.signupPassword;
        if(password != value){
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
        const value = event.target.value;
        let error = "";
        let status;
        if(value.length==0){
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
        updatedState.validateLogin.email.status = status;
        updatedState.validateLogin.email.error = error;
        this.setState({
            validateLogin: updatedState.validateLogin
        })
        this.enableLoginButtonHandler(updatedState)
    }

    loginPasswordValidationHandler = (event) =>{
        let updatedState = {...this.state}
        const value = event.target.value; 
        let error = "";
        let status;
        if(value.length==0){
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
        this.setState({
            validateLogin: updatedState.validateLogin
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
            password: {status: true, error:'', func: this.signupPasswordValidationHandler},
            confirmPassword: {status: true, error:'', func: this.signupPasswordConfirmValidationHandler}
        },
        loginDisabled: true,
        signupDisabled: true,
        login: false,
        homepage: true,
        signupPassword:''
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
        if(state.validateLogin.email.status == false && 
            state.validateLogin.password.status == false){
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
        if(state.validateSignup.email.status == false && 
            state.validateSignup.password.status == false &&
            state.validateSignup.confirmPassword.status == false){
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
        console.log("Logged In")
        this.setState({
            login:true,
            showLogin: false,
            showSignup: false,
            homepage: false
        })
    }

    signupHandler=()=>{
        alert("SignUp Successful")
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
                    disabled={this.state.loginDisabled} 
                    show={this.state.showLogin}  
                    close={this.closeLoginModalHandler} 
                    switch={this.loginToSignupHandler} 
                    validate={this.state.validateLogin}
                    login = {this.loginHandler}
                />
                <Signup 
                    show={this.state.showSignup}  
                    close={this.closeSignupModalHandler} 
                    switch={this.signupToLoginHandler}
                    validate={this.state.validateSignup}
                    disabled={this.state.signupDisabled}
                    signup={this.signupHandler}
                />
                <WelcomeScreen show={this.state.login} />
            </Aux>
        ) 
    }
}

export default Homepage;