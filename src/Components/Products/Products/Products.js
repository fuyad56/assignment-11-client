import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Products = () => {
    const [fansData, setFansData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/getFansData`)
            .then(res => res.json())
            .then(data => {
                setFansData(data)
            })
    })

    return (
        <div>
            <Navbar />
            <div className='mx-[180px] my-[100px] grid grid-cols-4 gap-6'>
                {
                    fansData.map(fanData => <Product key={fanData._id} data={fanData} />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Products;