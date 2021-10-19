import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle,handleUserLogin, error, setError} =useAuth();
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const redirect_uri = location.state?.from || '/home' ;

    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
        .then(result =>{
           history.push(redirect_uri);
        })
        .catch(error => {
            setError(error.message)
        });
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    };
    const handlePassword = e =>{
        setPassword(e.target.value);
    };
    const handleLogin = () =>{
        handleUserLogin(email,password);
    }
    return (
        <div>
            <Container>
            <div >
                <h2 className="m-5">Please Login here</h2>
                <input onBlur={handleEmail} type="email" name="" id=""
                placeholder="Your Email"/>
                <br />
                <br />
                <input onBlur={handlePassword}  type="password" name="" id=""
                placeholder="Your password"/>
                <br />
                <br />
                <div className="row mb-3 text-danger">{error}</div>

                <input onClick={handleLogin} className="mb-3 btn btn-warning" type="submit" value="submit" />

                <p>New here? <Link to="/signup">Ceate Account</Link></p>
                <div>-------or---------</div>
                <Button onClick={handleGoogleLogIn} variant="warning mb-5">Google Sign In</Button>
            </div>
            </Container>
        </div>
    );
};

export default Login;