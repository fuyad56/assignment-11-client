import React from 'react';
import contact from "../../../image/contact.jpg"

const Contact = () => {
    return (
        <div className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[40px] tablet:mt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <div>
                <h1 className='text-[#183D3D] font-semibold desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl mb-6' style={{ fontFamily: "Croissant One" }}>Contact</h1>
            </div>
            <div className='border bg-[#053B50] rounded-3xl desktop:px-20 phone:px-6 py-10 grid grid-cols-2 gap-6'>
                <form action="" className='flex flex-col justify-center desktop:mr-8 laptop:mr-0 tablet:ml-6 laptop:w-[300px] tablet:w-[380px] phone:w-[200px]'>
                    <label htmlFor="name" className='text-xl font-medium text-slate-300 mt-4'>Name</label>
                    <input type="text" name='name' id='name' className='border-b-2 mt-1 px-2 py-1 text-md text-slate-100 bg-transparent' />
                    <label htmlFor="email" className='text-xl font-medium text-slate-300 mt-4'>Email</label>
                    <input type="email" name="email" id="email" className='border-b-2 mt-1 px-2 py-1 text-md text-slate-100 bg-transparent' />
                    <label htmlFor="message" className='text-xl font-medium text-slate-300 mt-4'>Message</label>
                    <input type="text" name="message" id="message" className='border-b-2 mt-1 px-2 py-1 text-md text-slate-100 bg-transparent' />
                    <input type="submit" value="Submit" className='mt-6 border-2 border-[#053B50] bg-white text-lg font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#053B50] hover:text-slate-300 hover:border-white' />
                </form>
                <div className='laptop:block phone:hidden'>
                    <img src={contact} alt="" className='rounded-3xl desktop:ml-8 laptop:mt-10 laptop:mr-6' />
                </div>
            </div>
        </div>
    );
};

export default Contact;