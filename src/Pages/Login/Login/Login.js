import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} =useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home' ;

    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
        .then(result =>{
           history.push(redirect_uri);
        })
    }
    return (
        <div>
            <Container>
            <form >
                <h2 className="m-5">Please Login here</h2>
                <input type="email" name="" id=""
                placeholder="Your Email"/>
                <br />
                <br />
                <input  type="password" name="" id=""
                placeholder="Your password"/>
                <br />
                <br />
                <input className="mb-3 btn btn-warning" type="submit" value="submit" />
                <p>New here? <Link to="/signup">Ceate Account</Link></p>
                <div>-------or---------</div>
                <Button onClick={handleGoogleLogIn} variant="warning mb-5">Google Sign In</Button>
            </form>
            </Container>
        </div>
    );
};

export default Login;