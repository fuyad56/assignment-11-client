import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faList, faMessage, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import fan from '../../../image/highspeed-01.png';

const Consumer = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };
    return (
        <div className='grid grid-cols-2 h-full'>
            <div className='bg-[#053B50] p-10 text-slate-300 w-[300px]'>
                <ul className='flex flex-col justify-between items-start text-xl h-[100px]'>
                    <li className={`border w-full ${activeLink === "/dashboard/book" ? "bg-slate-100 text-slate-800" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/book"} onClick={() => handleLinkClick('/dashboard/book')} className='text-slate-300'><FontAwesomeIcon icon={faShoppingCart} className='pr-2' />Book</Link>
                    </li>
                    <li className={`border w-full ${activeLink === "/dashboard/booking-list" ? "bg-slate-100 text-slate-700" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/booking-list"} onClick={() => handleLinkClick('/dashboard/booking-list')} className='text-slate-300'><FontAwesomeIcon icon={faList} className='pr-2' />Booking List</Link>
                    </li>
                    <li className={`border w-full ${activeLink === "/dashboard/review" ? "bg-slate-100 text-slate-700" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/review"} onClick={() => handleLinkClick('/dashboard/review')} className='text-slate-300'><FontAwesomeIcon icon={faMessage} className='pr-2' />Review</Link>
                    </li>
                </ul>
            </div>

            <div className='mb-[150px]'>
                {/* Book */}
                {
                    activeLink === "/dashboard/book" && (
                        <div className='mb-[600px]'>
                            <form action="" className='mt-10 border rounded-3xl shadow-xl p-10 flex flex-col w-[600px] absolute left-[40%] top-[20%]'>
                                <input type="text" name='name' id='name' placeholder='Enter Name' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <input type="email" name="email" id="email" placeholder='Enter Email' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <input type="text" name='product' id='product' placeholder='Product name' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <h3 className='font-medium ml-2'>Pay with</h3>
                                <div className='flex items-center font-medium ml-2'>
                                    <input type="checkbox" name="credit-card" id="credit-card" className='mr-2 mb-1' />
                                    <label htmlFor="credit-card" className='mr-4'><FontAwesomeIcon icon={faCreditCard} /> Credit Card</label>
                                    <input type="checkbox" name="paypal" id="paypal" className='mr-2 mb-1' />
                                    <label htmlFor="paypal" className='mr-2'><FontAwesomeIcon icon={faPaypal} /> Paypal</label>
                                </div>
                                <input type="number" name="number" id="number" placeholder='Card Number' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <input type="date" name="date" id="date" className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <input type="number" name='cvc' id='cvc' placeholder='CVC' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <div className='flex justify-between items-center mx-2'>
                                    <p className='font-medium'>You need to pay $1000</p>
                                    <input type="submit" value="Submit" className='border-2 border-[#053B50] bg-white text-lg font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#053B50] hover:text-slate-300 hover:border-white' />
                                </div>
                            </form>
                        </div>
                    )
                }

                {/* Booking List */}

                {
                    activeLink === "/dashboard/booking-list" && (
                        <div className='grid grid-cols-3 gap-6 w-[1500px] ml-[-120px]'>
                            <div className='border mt-10 rounded-3xl shadow-xl hover:scale-[1.04] duration-500'>
                                <div>
                                    <img src={fan} alt="" className='rounded-3xl' />
                                    <h3 className='translate-x-[350px] translate-y-[-320px] border border-[#FF4545] w-[100px] text-center rounded-lg py-1 px-2 bg-[#FFE3E3] text-[#FF4545]'>Pending</h3>
                                </div>
                                <div className='px-6 py-4'>
                                    <h3 className='text-2xl font-semibold'>High Speed fan</h3>
                                    <p className='text-md font-medium text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quae.</p>
                                </div>
                            </div>
                            <div className='border mt-10 rounded-3xl shadow-xl hover:scale-[1.04] duration-500'>
                                <div>
                                    <img src={fan} alt="" className='rounded-3xl' />
                                    <h3 className='translate-x-[350px] translate-y-[-320px] border border-[#009444] w-[100px] text-center rounded-lg py-1 px-2 bg-[#C6FFE0] text-[#009444]'>Delivered</h3>
                                </div>
                                <div className='px-6 py-4'>
                                    <h3 className='text-2xl font-semibold'>High Speed fan</h3>
                                    <p className='text-md font-medium text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quae.</p>
                                </div>
                            </div>
                            <div className='border mt-10 rounded-3xl shadow-xl hover:scale-[1.04] duration-500'>
                                <div>
                                    <img src={fan} alt="" className='rounded-3xl' />
                                    <h3 className='translate-x-[350px] translate-y-[-320px] border border-[#FF4545] w-[100px] text-center rounded-lg py-1 px-2 bg-[#FFE3E3] text-[#FF4545]'>Pending</h3>
                                </div>
                                <div className='px-6 py-4'>
                                    <h3 className='text-2xl font-semibold'>High Speed fan</h3>
                                    <p className='text-md font-medium text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quae.</p>
                                </div>
                            </div>
                        </div>)
                }


                {/* Review */}
                {
                    activeLink === "/dashboard/review" && (
                        <div className='mb-[600px]'>
                            <form action="" className='mt-10 border rounded-3xl shadow-xl p-10 flex flex-col w-[600px] absolute left-[40%] top-[20%]'>
                                <input type="text" name='name' id='name' placeholder='Enter Name' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <input type="email" name="email" id="email" placeholder='Enter Email' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <input type="text" name='product' id='product' placeholder='Description' className='py-1 px-2 border-2 text-start border-slate-800 rounded mb-2 font-medium text-sky-950 pb-[100px]' />
                                <input type="submit" value="Submit" className='border-2 border-[#053B50] bg-white text-lg font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#053B50] hover:text-slate-300 hover:border-white' />
                            </form>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Consumer;