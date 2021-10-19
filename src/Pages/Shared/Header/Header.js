import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar  bg="dark" variant="dark" collapseOnSelect expand="lg" fixed="top">
    <Container>
    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faClinicMedical} />Medicate Diagnostic Center</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink}
       to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
      <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
      {user?.email ?
      <Button onClick={logOut} variant="light">Logout</Button> :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
      <Navbar.Text>
        Login as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
      </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;