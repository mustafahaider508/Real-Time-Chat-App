import React from 'react';
import './Login.css';
import Button from "@material-ui/core/Button";
import {auth,provider} from "../firebase";


function Login() {
 
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
         alert(error.message));
    }


    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" />
        <h1>ChatApp</h1>
            </div>
            <Button  >Sign In</Button>
            
        </div>
    )
}

export default Login
