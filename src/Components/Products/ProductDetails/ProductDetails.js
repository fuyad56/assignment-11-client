import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';


const ProductDetails = () => {
    const [loggedInUser,] = useContext(UserContext);
    const { id } = useParams();
    const [fanData, setFanData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/getProduct/${id}`)
            .then(res => res.json())
            .then(data => setFanData(data))
    })

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        const newValue = parseInt(event.target.value);
        setQuantity(isNaN(newValue) ? 1 : newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            productName: fanData.name,
            quantity: quantity,
            totalMoney: fanData.price * quantity,
            userName: loggedInUser.name,
            userEmail: loggedInUser.email,
            img: fanData.img
        };

        fetch('http://localhost:5000/booking-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log('Data saved to cart successfully');
                } else {
                    console.error('Error saving data to cart');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div>
            <Navbar />
            <div className='h-[800px] mx-[180px]'>
                <div className='flex justify-center items-center h-full'>
                    <div className='flex justify-between items-center w-[1200px]'>
                        <div>
                            <img src={fanData.img} alt="" className='h-[400px] border rounded-3xl shadow-xl' />
                        </div>
                        <div className='w-[400px]'>
                            <h2 className='text-3xl font-semibold mb-5'>{fanData.name}</h2>
                            <p className='font-medium text-slate-700 mb-4'><span className='text-xl font-semibold'>Description:</span> {fanData.describe}</p>
                            <label htmlFor="quantity" className='text-xl font-medium'>Quantity: </label>
                            <input type="number" name="quantity" id="quantity" defaultValue={1} onChange={handleQuantityChange} className='mx-2 py-1 px-2 border-2 rounded w-[80px] mb-4' />
                            <div className='flex justify-between items-center w-[300px]'>
                                <h2 className='text-2xl font-medium'>Price: $ {fanData.price}</h2>
                                <button onClick={handleSubmit}
                                    className='border-2 border-[#183D3D] text-lg tablet:text-md phone:text-md font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;