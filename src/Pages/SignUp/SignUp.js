import React, { useState } from 'react';
import { Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";


const SignUp = () => {

    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);

    }

    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Password Must be at least 6 characters') ;
            return;
        }
        if(!/^(?=.*[A-Z].*[A-Z])/.test(password)){
         setError('Password Must be contain 2 upper Case');
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        });
    }
    return (
        <div>
            <Container>
            <form onSubmit={handleRegistration}  >
                <h2 className="m-5">Register here for Sign Up</h2>
                <input onBlur={handleEmailChange} type="email" name="" id=""
                placeholder="Your Email" required/>
                <br />
                <br />
                <input onBlur={handlePasswordChange}  type="password" name="" id=""
                placeholder="Your password" required/>
                <br />
                <br />
                <div className="row mb-3 text-danger">{error}</div>
                <Button type="submit" variant="warning">Register</Button>
                <p>Alredy have an Account? <Link to="/login">Login here</Link></p>
                <div>-------or---------</div>
                {/* <Button onClick={signInUsingGoogle} variant="warning mb-5">Google Sign In</Button> */}
            </form>
            </Container>
        </div>
    );
};

export default SignUp;