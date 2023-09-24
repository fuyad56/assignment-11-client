import React from 'react';
import Product from '../Product/Product';
import highSpeed_01 from "../../../image/highspeed-01.png";
import net_fan_16 from "../../../image/net fan 16.png";
import net_fan_20_01 from "../../../image/net fan 20-01.png";

const productData = [
    {
        id: 1,
        title: "High Speed",
        img: highSpeed_01,
        price: "$ 800",
    },
    {
        id: 2,
        title: "Net Fan 16",
        img: net_fan_16,
        price: "$ 2345",
    },
    {
        id: 3,
        title: "Net Fan 20",
        img: net_fan_20_01,
        price: "$ 1245",
    }
]

const Products = () => {
    return (
        <section className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[40px] tablet:mt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <div>
                <div className='mb-6'>
                    <h1 className='desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl font-semibold text-[#183D3D] mb-3' style={{ fontFamily: "Croissant One" }}>Featured Products</h1>
                    <p className='text-md font-medium'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='grid desktop:grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1 gap-6'>
                    {
                        productData.map(pdData => (<Product key={pdData.id} productData={pdData} />))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;