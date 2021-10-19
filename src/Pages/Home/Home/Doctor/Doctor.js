import React from 'react';
import './Doctor.css';
import { Card, Col, Container } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const{name, img, id, special, experience,age } = doctor;
    return (
        <Container>
            
            <div>
           <Col style={{}}>
     <Card className="doctor-card">
       <Card.Img variant="top" src={img} fluid/>
       <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Text>
           Age: {age}
           <br />
           Experience: {experience} Years
         </Card.Text>
         <Card.Title className="special">{special}</Card.Title>
       </Card.Body>
     </Card>
   </Col>
       </div>
        </Container>
    );
};

export default Doctor;