import React from 'react';
import about from "../../../image/about.jpg"

const About = () => {
    return (
        <div className='bg-[#053B50] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] desktop:flex laptop:flex justify-between items-center tablet:grid tablet:grid-rows-2 phone:grid phone:grid-rows-1 mt-[100px] mb-[100px] rounded-[20px]'>
            <div className='w-[600px] mx-10 phone:pt-5 phone:pb-5'>
                <h1 className='text-white text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl font-semibold mb-6 laptop:translate-y-6' style={{ fontFamily: "Croissant One" }}>About</h1>
                <p className='text-md text-slate-400 mt-10 laptop:translate-y-4 tablet:w-[420px] phone:w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia cupiditate veniam? Voluptatem autem illum, ratione deleniti cum ipsum praesentium voluptate libero, ducimus sapiente repellat magnam blanditiis voluptates quod dignissimos repudiandae hic, dicta accusamus nihil iste vitae! Doloribus similique odio dignissimos soluta, facilis sit ea voluptatem? Rem quasi maiores labore.</p>
                <button className='mt-10 laptop:mt-5 text-slate-200 text-md font-medium border-black border-2 py-1 px-4 rounded hover:rounded-full hover:bg-white hover:text-gray-700 hover:border-[#053B50]'>See More</button>
            </div>
            <div>
                <img src={about} alt={about} className='w-[600px] rounded-[20px] desktop:w-[600px] tablet:w-[480px] phone:w-[261px]' />
            </div>
        </div>
    );
};

export default About;