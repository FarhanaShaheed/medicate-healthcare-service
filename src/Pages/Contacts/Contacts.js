import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Contacts = () => {
    return (
        <Container>
            <h2 className="m-5">Contact With Us anytime</h2>
  <Row>
    <Col sm><Card border="success" style={{ width: '18rem',height:'18rem' }}>
    <Card.Header>Permanent</Card.Header>
    <Card.Body>
      <Card.Title>Central Office</Card.Title>
      <Card.Text>
        Road: 10/A <br />
        House: 161 <br />
        RAK Tower <br />
        Banani Model Town <br />
        Dhaka, Bangladesh
      </Card.Text>
    </Card.Body>
  </Card></Col>
    <Col sm><Card border="info" style={{ width: '18rem',height:'18rem' }}>
    <Card.Header>Phone</Card.Header>
    <Card.Body>
      <Card.Title>Oprning Hours</Card.Title>
      <Card.Text>
      Monday: 9:00 – 19:00 <br />
      Tuesday: 9:00 – 19:00 <br />
      Wednesday: 9:00 – 19:00 <br />
      Thursday: 9:00 – 19:00 <br />
      Friday: 9:00 – 19:00 <br />
      Saturday: 11:00 – 16:00 <br />
      Sunday: CLOSED
      </Card.Text>
    </Card.Body>
  </Card></Col>
    <Col sm><Card border="dark" style={{ width: '18rem',height:'18rem' }}>
    <Card.Header>Online</Card.Header>
    <Card.Body>
      <Card.Title>Phone & Email</Card.Title>
      <Card.Text>
        Phone: +88-01764767723 <br />
        Email: farhana.etu@gmail.com <br />
        Website: www.medicate-diagnostic-center.com
      </Card.Text>
    </Card.Body>
  </Card></Col>
  </Row>
</Container>
    );
};

export default Contacts;