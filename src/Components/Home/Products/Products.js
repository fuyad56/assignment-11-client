import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
    const [, setProductData] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const navigate = useNavigate("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/getFansData`);
                const data = await response.json();
                setProductData(data);
                const slicedData = data.slice(0, 3);
                setDisplayedProducts(slicedData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    const handleProduct = (id) => {
        navigate(`/products/${id}`);
    }

    return (
        <section className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[40px] tablet:mt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <div>
                <div className='mb-6'>
                    <h1 className='desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl font-semibold text-[#183D3D] mb-3' style={{ fontFamily: "Croissant One" }}>Featured Products</h1>
                    <Link to={"/products"} className='font-semibold ml-4'>View All <FontAwesomeIcon icon={faArrowRight} className='ml-4 hover:translate-x-4 duration-500' /></Link>
                </div>
                <div className='grid desktop:grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1 gap-6'>
                    {displayedProducts.map(pdData => (
                        <Product key={pdData._id} productData={pdData} handleProduct={handleProduct} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
