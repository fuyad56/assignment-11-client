import React from 'react';
import human1 from "../../../image/human (1).jpg"
import human2 from "../../../image/human (2).jpg"
import human3 from "../../../image/human (3).jpg"
import Testimonial from '../Testimonial/Testimonial';

const testimonialsData = [
    {
        id: 1,
        name: 'Maisha Haas',
        describe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus sed excepturi autem perferendis at?',
        img: human1,
    },
    {
        id: 2,
        name: 'Polly Salinas',
        describe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus sed excepturi autem perferendis at?',
        img: human2,
    },
    {
        id: 3,
        name: 'Liana Nicholson',
        describe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus sed excepturi autem perferendis at?',
        img: human3,
    }
]

const Testimonials = () => {
    return (
        <div className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[40px] tablet:mt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <h1 className='text-[#183D3D] font-semibold desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl mb-6' style={{ fontFamily: "Croissant One" }}>Testimonials</h1>
            <div className='grid desktop:grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1 gap-4'>
                {
                    testimonialsData.map(testimonial => (<Testimonial key={testimonial.id} testimonial={testimonial} />))
                }
            </div>
        </div>
    );
};

export default Testimonials;