import React from 'react';
import Banner from './../Banner/Banner';
import Doctors from './Doctors/Doctors';
import Products from './Products/Products';
import Services from './Services/Sevices';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Products></Products>
        </div>
    );
};

export default Home;