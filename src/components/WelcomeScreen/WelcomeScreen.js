import React from 'react';
import verified from '../../assets/images/verified.png'
import classes from './WelcomeScreen.module.css';

const welcomeScreen = (props) =>{
    const assignedClasses = ['row', classes.WelcomeScreen];
    return (
        <div className={assignedClasses.join(" ")} style={{opacity: '1'}}>
            <div className="col-md-4 offset-md-4">
                <div className={classes.Check}>
                    <img src={verified} alt="Verified"></img>
                </div>
                <p>You have successfully logged in.</p>
            </div>
        </div>
    )
}

export default welcomeScreen;