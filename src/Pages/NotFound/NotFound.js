import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../Images/NotFound.jpg'

const NotFound = () => {
    return (
        <div>
            <div>
            <img style={{width:"50%"}} src={notFound} alt="" fluid/>
            </div>
            <div>
            <Link to="/home">
            <Button className="btn-warning">Home</Button>
            </Link>
        </div>
        </div>
    );
};

export default NotFound;