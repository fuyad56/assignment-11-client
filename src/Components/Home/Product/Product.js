import React from 'react';

const Product = ({ productData }) => {
    if (!productData) {
        return null;
    }

    return (
        <div className='border mt-6 shadow-xl rounded-3xl w-auto hover:scale-[1.06] duration-500'>
            <img src={productData.img} alt={productData.title} className='rounded-t-3xl hover:opacity-80' />
            <div className='mx-6 mt-4 mb-8'>
                <h2 className='mt-2 desktop:text-2xl tablet:text-xl font-semibold mb-4'>{productData.title}</h2>
                <button className='border-2 border-[#183D3D] text-lg tablet:text-md phone:text-md font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200'>See More</button>
            </div>
        </div>
    );
};

export default Product;