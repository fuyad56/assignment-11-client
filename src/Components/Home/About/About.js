import React from 'react';
import about from "../../../image/about.jpg"

const About = () => {
    return (
        <div className='bg-[#053B50] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] flex justify-between items-center tablet:grid tablet:grid-rows-2 phone:grid phone:grid-rows-1 mt-[100px] mb-[100px] rounded-[20px] pt-6'>
            <div className='w-[600px] mx-10 '>
                <h1 className='text-white text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl font-semibold mb-6 laptop:mb-4' style={{ fontFamily: "Croissant One" }}>About</h1>
                <p className='text-md text-slate-400 mt-10 tablet:w-[420px] phone:w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia cupiditate veniam? Voluptatem autem illum, ratione deleniti cum ipsum praesentium voluptate libero, ducimus sapiente repellat magnam blanditiis voluptates quod dignissimos repudiandae hic, dicta accusamus nihil iste vitae! Doloribus similique odio dignissimos soluta, facilis sit ea voluptatem? Rem quasi maiores labore.</p>
                <button className='mt-10 text-slate-200 text-md font-medium border-black border-2 py-1 px-4 rounded hover:rounded-full hover:bg-white hover:text-gray-700 hover:border-[#053B50]'>See More</button>
            </div>
            <div>
                <img src={about} alt={about} className='w-[600px] rounded-e-[20px] tablet:rounded-b-[20px] tablet:rounded-t-[0px] tablet:w-[480px] phone:w-[261px] phone:pt-6 phone:rounded-b-[20px] phone:rounded-t-[0px]' />
            </div>
        </div>
    );
};

export default About;