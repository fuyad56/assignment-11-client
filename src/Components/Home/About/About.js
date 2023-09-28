import React from 'react';
import about from "../../../image/about.jpg"

const About = () => {
    return (
        <div className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[60px] tablet:mt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <div className='bg-[#053B50] rounded-3xl desktop:flex laptop:flex justify-between items-center tablet:grid tablet:grid-rows-2 phone:flex-row'>
                <div className='desktop:w-[600px] laptop:w-[400px] px-8 phone:py-8'>
                    <h1 className='text-white desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl mb-6' style={{ fontFamily: "Croissant One" }}>About</h1>
                    <p className='text-md font-medium mb-8 w-auto text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deserunt voluptate numquam iusto, quo dicta ipsam quaerat suscipit cupiditate error cumque laboriosam minima molestiae perferendis architecto aliquid perspiciatis unde optio maiores. Cupiditate nisi unde iusto similique. Facere rem quos ex autem et porro esse, dolorem perferendis. Nam, assumenda officia. Quo.</p>
                    <button className='border-2 border-[#053B50] bg-white text-lg font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#053B50] hover:text-slate-300 hover:border-white'>See More</button>
                </div>
                <div className='tablet:mt-[-47px] desktop:m-0'>
                    <img src={about} alt="" className='desktop:w-[600px] desktop:translate-y-0 desktop:h-auto laptop:translate-y-[24px] laptop:h-[440px] laptop:w-[450px] tablet:w-[480px] phone:w-[261px] rounded-3xl' />
                </div>
            </div>
        </div>
    );
};

export default About;