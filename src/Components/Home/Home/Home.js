import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Products from '../Products/Products';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Products />
            <About />
        </div>
    );
};

export default Home;