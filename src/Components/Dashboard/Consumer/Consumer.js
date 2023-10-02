import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faMessage } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Consumer = () => {
    const [loggedInUser,] = useContext(UserContext)

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    // Booking Data
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/getBookingData');
                const data = await response.json();
                setBookingData(data);
                console.log('Booking Data:', data);
                console.log('LoggedInUser Email:', loggedInUser.email);
            } catch (error) {
                console.error('Error fetching booking data', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-2 h-full'>
            <div className='bg-[#053B50] p-10 text-slate-300 w-[300px]'>
                <ul className='flex flex-col justify-between items-start text-xl h-[100px]'>
                    <li className={`border w-full ${activeLink === "/dashboard/booking-list" ? "bg-slate-100 text-slate-700" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/booking-list"} onClick={() => handleLinkClick('/dashboard/booking-list')} className='text-slate-300'><FontAwesomeIcon icon={faList} className='pr-2' />Booking List</Link>
                    </li>
                    <li className={`border w-full ${activeLink === "/dashboard/review" ? "bg-slate-100 text-slate-700" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/review"} onClick={() => handleLinkClick('/dashboard/review')} className='text-slate-300'><FontAwesomeIcon icon={faMessage} className='pr-2' />Review</Link>
                    </li>
                </ul>
            </div>

            <div className='mb-[150px]'>
                {/* Booking List */}
                {
                    loggedInUser.email === bookingData[0]?.userEmail && activeLink === "/dashboard/booking-list" && (
                        <div className='grid grid-cols-3 gap-6 w-[1500px] ml-[-120px]'>
                            {bookingData.map((bdt, index) => (
                                <div key={index} className='border mt-10 rounded-3xl shadow-xl hover:scale-[1.04] duration-500'>
                                    <img src={bdt.img} alt="" className='rounded-3xl' />
                                    <div className='px-6 py-4'>
                                        <h3 className='text-2xl font-semibold'>{bdt.name}</h3>
                                        <ul className='text-lg font-medium'>
                                            <li>Products quantity: {bdt.quantity}</li>
                                            <li>Total price: $ {bdt.totalMoney}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }



                {/* Review */}
                {
                    activeLink === "/dashboard/review" && (
                        <div className='mb-[600px]'>
                            <form action="" className='mt-10 border rounded-3xl shadow-xl p-10 flex flex-col w-[600px] absolute left-[40%] top-[20%]'>
                                <input type="text" name='name' defaultValue={loggedInUser.name} id='name' placeholder='Enter Name' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
                                <input type="email" name="email" defaultValue={loggedInUser.email} id="email" placeholder='Enter Email' className='py-1 px-2 border-2 border-slate-800 rounded mb-2 font-medium text-sky-950' />
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