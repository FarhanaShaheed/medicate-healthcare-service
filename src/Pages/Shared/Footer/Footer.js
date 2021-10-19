import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="custom-footer">
             <FontAwesomeIcon icon={faClinicMedical}/>
             <p>Medicate Diagnostic Center</p>
            <p>&copy; 2021 farhana15-734@diu.edu.bd</p>
        </div>
    );
};

export default Footer;