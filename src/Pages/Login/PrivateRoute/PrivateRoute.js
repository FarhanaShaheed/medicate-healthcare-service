import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} =useAuth();
    if(isLoading){
        return <Spinner animation="grow" variant="dark" />
    }
    return (
        <Route
            {...rest}
            render={({location}) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: {from: location}
            }}
            ></Redirect>
            }
            >
        </Route>
    );
};

export default PrivateRoute;