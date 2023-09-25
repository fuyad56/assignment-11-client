import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className='border text-start p-6 shadow-xl rounded-3xl hover:scale-[1.04] duration-500 mt-6'>
            <div>
                <img src={testimonial.img} alt="" className=' h-[100px] rounded-full mx-auto mb-4'/>
            </div>
            <div className=''>
                <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
                <p className='text-[1rem] font-medium'>{testimonial.describe}</p>
            </div>
        </div>
    );
};

export default Testimonial;