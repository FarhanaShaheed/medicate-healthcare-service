import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import diagnostic from '../../Images/Diagnostic-Center-and-work-process_startupTalky.jpg';
import objective from '../../Images/10-things-diagonostic-center-inner-img2.jpg';

const AboutUs = () => {
    return (
        <Container>
            <h2 className="m-5">About Us</h2>
            <Row>
    <Col sx={12} md={6}>
        <h5>About Clinic</h5>
        <h3>Why People Choose Us</h3>
        <p>Lexington Diagnostic Center  has been a leader in diagnostic radiology services, performing thousands of outpatient diagnostic imaging and radiology exams.
        <br />
        We understand when patients look to us for diagnostic imaging needs, they are also looking for peace of mind. That is why we offer more than board-certified radiologists. Our radiologist is subspecialty fellowship trained, providing an added measure of confidence when interpreting imaging tests. Highly qualified and experienced registered technologists perform medically responsible imaging exams using some of the latest imaging technology available.</p>
    </Col>
    <Col sx={12} md={6}>
        <img style={{width:'100%'}} src={diagnostic} alt="" fluid />
    </Col>
  </Row>

  <Row className="mt-5">
    <Col sx={12} md={6}>
    <img style={{width:'100%', border:'3px solid #ff8c00'}} src={objective} alt="" fluid />
    </Col>
    <Col sx={12} md={6}>
        <h5>Our Objectives</h5>
        <h3>Our Goals and Objectives</h3>
        <p>To establish a referral Diagnostic and Medical Services Centre.</p>
        <ul>
            <li>Out door basis treatment by renowned General Practitioners.</li>
            <li>To promote Health Education & Medical Services.</li>
            <li>Day care Centre for follow-up cardiac renal and oncology patients.</li>
            <li>To build a full fledged specialized (Tertiary) Hospital.</li>
        </ul>
    </Col>
  </Row>
        </Container>
    );
};

export default AboutUs;