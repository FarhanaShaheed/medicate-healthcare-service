import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ViewDetails.css';

const ViewDetails = () => {
    const{serviceId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data.find(view => parseInt(view.id) === parseInt(serviceId))))
    },[])

    return (
        <Container>
        <div>
            <div className="detail-info">
                <h2>{details.name}</h2>
                <p>{details.description}</p>
                <p><span>Reviewed By:</span> {details.review}People</p>
                <p><span>Speciallist:</span> {details.doctor}</p>
                <p><span>Phone:</span> {details.phone}</p>
                <p><span>Email</span>: {details.email}</p>
            </div>
            <div>
                <img src={details.img} alt="" />
            </div>
        </div>
        </Container>
    );
};

export default ViewDetails;