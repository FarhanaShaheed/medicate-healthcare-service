import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const{name, img, id, description, review } = service;
    
    return (
        <div id="services">
            <Container>
            <div>
           <Col>
     <Card className="service-card">
       <Card.Img variant="top" src={img} style={{height:'20rem'}}  fluid/>
       <Card.Body>
         <Card.Title className="card-title">{name}</Card.Title>
         <Card.Text>
           {description.slice(0,150)}
         </Card.Text>
         <h6>Review By: {review}</h6>
         <Link to={`/viewdetails/${id}`}>
         <Button className="detail-button">View Details <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
         </Link>
         </Card.Body>
     </Card>
   </Col>
       </div>
        </Container>
        </div>
    );
};

export default Service;