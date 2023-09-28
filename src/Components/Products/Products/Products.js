import React from 'react';
import fan1 from "../../../image/highspeed-01.png"
import fan2 from "../../../image/net fan 16.png"
import fan3 from "../../../image/net fan 20-01.png"
import fan4 from "../../../image/Rapid XR-01.png"
import fan5 from "../../../image/rechargeable fan-01.png"
import fan6 from "../../../image/stand fan-01.png"
import fan7 from "../../../image/student edition z2-01.png"
import fan8 from "../../../image/table fan 16.png"
import fan9 from "../../../image/table tan  12-01.png"
import fan10 from "../../../image/waltar z2-01.png"
import Product from '../Product/Product';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const fansData = [
    {
        name: 'High Speed',
        img: fan1,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan2,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan3,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan4,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan5,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan6,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan7,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan8,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan9,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
    {
        name: 'High Speed',
        img: fan10,
        describe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem voluptatem laboriosam iste, ex ad?',
        price: 120
    },
]

const Products = () => {
    return (
        <div>
            <Navbar />
            <div className='mx-[180px] my-[100px] grid grid-cols-4 gap-6'>
                {
                    fansData.map(fanData => <Product key={fanData.name} data={fanData} />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Products;