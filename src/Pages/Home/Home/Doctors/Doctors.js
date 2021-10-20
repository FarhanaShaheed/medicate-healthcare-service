import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './../Doctor/Doctor';
import 'animate.css';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, [])


    return (
        <Container>
            <div>
            <h2 className="mt-5 animate__animated animate__bounce">Meet Our Doctors</h2>
                <p>In just one or two minutes, Meet Our Doctors captures our doctors' personalities as well as their area of expertise.</p>
            <Row xs={1} md={3} className="g-4">
            {
                doctors.map(doctor => <Doctor
                key={doctor.id}
                doctor={doctor}
                ></Doctor>)
            }
           </Row>
        </div>
        </Container>
    );
};

export default Doctors;