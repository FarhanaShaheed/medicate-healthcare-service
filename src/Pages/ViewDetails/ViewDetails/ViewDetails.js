import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMd, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
                <p><span><FontAwesomeIcon icon={faUser} /> Reviewed By:</span> {details.review}People</p>
                <p><span><FontAwesomeIcon icon={faUserMd} /> Speciallist:</span> {details.doctor}</p>
                <p><span><FontAwesomeIcon icon={faPhone} /> Phone:</span> {details.phone}</p>
                <p><span><FontAwesomeIcon icon={faEnvelope} /> Email:</span> {details.email}</p>
                
            </div>
            <div>
                <img src={details.img} alt="" />
            </div>
        </div>
        </Container>
    );
};

export default ViewDetails;