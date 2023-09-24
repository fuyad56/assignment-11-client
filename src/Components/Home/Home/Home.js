import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Products from '../Products/Products';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Products />
            <About />
            <Services />
        </div>
    );
};

export default Home;