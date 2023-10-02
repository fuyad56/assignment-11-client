import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faListCheck, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import EditServicePopup from '../EditServicePopup/EditServicePopup';

const Admin = () => {

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/getBookingData');
                const data = await response.json();
                setBookingData(data);
            } catch (error) {
                console.error('Error fetching booking data', error);
            }
        };
        fetchData();
    }, []);

    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then((response) => response.json())
            .then((data) => setServicesData(data))
            .catch((error) => {
                console.error('Error fetching services data', error);
            });
    }, []);

    const [editingServiceId, setEditingServiceId] = useState(null);
    const [serviceList, setServiceList] = useState(servicesData);
    const handleEdit = (serviceId) => {
        setEditingServiceId(serviceId);
    };

    const handleCancelEdit = () => {
        setEditingServiceId(null);
    };

    const onUpdate = (updatedService) => {
        const updatedIndex = serviceList.findIndex((service) => service._id === updatedService._id);
        if (updatedIndex !== -1) {
            const updatedServiceList = [...serviceList];
            updatedServiceList[updatedIndex] = updatedService;
            setServiceList(updatedServiceList);
        }
        setEditingServiceId(null);
    };



    const [formData, setFormData] = useState({
        title: '',
        describe: '',
        icon: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { icon, title, describe } = formData;
        fetch('http://localhost:5000/service-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ icon, title, describe }),
        })
            .then((response) => response.json())
            .then((data) => {
                setFormData({
                    title: '',
                    describe: '',
                    icon: '',
                });
            })
            .catch((error) => {
                console.error('Error sending data to server:', error);
            });
    };


    const [admin, setAdmin] = useState({});
    const [, setMessage] = useState('');
    const handleAdminBlur = (e) => {
        const email = e.target.value;
        setAdmin({ ...admin, email });
    };

    const handleAdmin = async (e) => {
        e.preventDefault();
        const updatedAdmin = { ...admin, role: 'admin' };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedAdmin),
        })
            .then((response) => {
                if (response.status === 201) {
                    setMessage('User created successfully');
                } else {
                    setMessage('Failed to create user');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('An error occurred');
            });
    };

    return (
        <div className='grid grid-cols-2 h-full'>
            <div className='bg-[#053B50] p-10 text-slate-300 w-[300px]'>
                <ul className='flex flex-col justify-between items-start text-xl h-[100px]'>
                    <li className={`border w-full ${activeLink === "/dashboard/order-list" ? "bg-slate-400" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/order-list"} onClick={() => handleLinkClick('/dashboard/order-list')} className='text-slate-300'><FontAwesomeIcon icon={faList} className='pr-2' />Order List</Link>
                    </li>
                    <li className={`border w-full ${activeLink === "/dashboard/add-service" ? "bg-slate-400" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/add-service"} onClick={() => handleLinkClick('/dashboard/add-service')} className='text-slate-300'><FontAwesomeIcon icon={faPlus} className='pr-2' />Add Service</Link>
                    </li>
                    <li className={`border w-full ${activeLink === "/dashboard/make-admin" ? "bg-slate-400" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/make-admin"} onClick={() => handleLinkClick('/dashboard/make-admin')} className='text-slate-300'><FontAwesomeIcon icon={faUserPlus} className='pr-2' />Make an Admin</Link>
                    </li>
                    <li className={`border w-full ${activeLink === "/dashboard/manage-services" ? "bg-slate-400" : ""} rounded py-1 px-2 mb-4`}>
                        <Link to={"/dashboard/manage-services"} onClick={() => handleLinkClick('/dashboard/manage-services')} className='text-slate-300'><FontAwesomeIcon icon={faListCheck} className='pr-2' />Manage Services</Link>
                    </li>

                </ul>
            </div>

            <div className='mb-[150px]'>
                {
                    activeLink === "/dashboard/order-list" && (
                        <div className='mb-[600px]'>
                            <ul className='flex justify-between items-center bg-[#F5F6FA] border ml-[-120px] mt-5 py-2 px-3 rounded-xl w-[1500px] text-xl font-semibold'>
                                <li>Name</li>
                                <li>Email Id</li>
                                <li>Product</li>
                                <li>Price</li>
                            </ul>
                            <div>
                                {
                                    bookingData.map(bdt => (
                                        <ul className='flex justify-between items-center border ml-[-120px] mt-5 py-2 px-3 rounded-xl w-[1500px] font-medium'>
                                            <li>{bdt.userName}</li>
                                            <li>{bdt.userEmail}</li>
                                            <li>{bdt.productName}</li>
                                            <li>$ {bdt.totalMoney}</li>
                                        </ul>))
                                }
                            </div>
                        </div>
                    )
                }

                {
                    activeLink === "/dashboard/add-service" && (
                        <div className='text-center w-[1300px] flex justify-center items-center h-full'>

                            <form
                                action=""
                                onSubmit={handleSubmit}
                                className='flex flex-col w-[600px] border py-10 px-6 rounded-3xl shadow-xl'
                            >
                                <input
                                    type="text"
                                    name='icon'
                                    id='icon'
                                    placeholder='Enter FontAwesome icon Name (Use React Individual Import)'
                                    onBlur={handleInputChange}
                                    className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]' /
                                >
                                <input
                                    type="text"
                                    name='title'
                                    id='title'
                                    placeholder='Enter Title'
                                    onBlur={handleInputChange}
                                    className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                                />
                                <input
                                    type="text"
                                    name='describe'
                                    id='describe'
                                    placeholder='Enter Your words'
                                    onBlur={handleInputChange}
                                    className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                                />
                                <input
                                    type="submit"
                                    value="Add Service"
                                    className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                                />
                            </form>
                        </div>)
                }
                {
                    activeLink === "/dashboard/make-admin" && (
                        <div className=''>
                            <form action="" onSubmit={handleAdmin}>
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    placeholder='Enter Email Address'
                                    onBlur={handleAdminBlur}
                                    className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                                />

                                <input
                                    type="submit"
                                    value="Add Service"
                                    className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                                />
                            </form>
                        </div>
                    )
                }

                {
                    activeLink === "/dashboard/manage-services" && (
                        <div className=''>
                            <div>
                                <h1 className='mt-6 text-6xl font-bold'>Services</h1>
                                <div className='w-[1300px] grid grid-cols-2 gap-6'>
                                    {servicesData.map((serviceData) => (
                                        <div key={serviceData.id} className='border text-center p-6 shadow-xl rounded-3xl hover:scale-[1.04] duration-500 mt-6'>
                                            {editingServiceId === serviceData[0]?._id ? (
                                                <EditServicePopup
                                                    serviceData={serviceData}
                                                    onUpdate={onUpdate}
                                                    onSave={() => handleCancelEdit()}
                                                />
                                            ) : (
                                                <>
                                                    <div className='mb-4'>
                                                        <FontAwesomeIcon icon={serviceData.icon} className='text-[80px]' />
                                                    </div>
                                                    <div>
                                                        <h3 className='text-3xl font-medium text-slate-700 mb-2'>{serviceData.title}</h3>
                                                        <p className='text-md font-normal text-slate-500'>{serviceData.describe}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleEdit(serviceData.id)}
                                                        className='border py-1 px-4 mt-2 rounded border-slate-700 font-semibold mr-6'
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        // Implement the delete function
                                                        className='border py-1 px-4 mt-2 rounded border-slate-700 font-semibold'
                                                    >
                                                        Delete
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div>
                                <h1 className='mt-6 text-6xl font-bold'>Services</h1>
                                <div className='w-[1300px] grid grid-cols-2 gap-6'>
                                    {
                                        servicesData.map(serviceData => (<div className='border text-center p-6 shadow-xl rounded-3xl hover:scale-[1.04] duration-500 mt-6'>
                                            <div className='mb-4'>
                                                <FontAwesomeIcon icon={serviceData.icon} className='text-[80px]' />
                                            </div>
                                            <div>
                                                <h3 className='text-3xl font-medium text-slate-700 mb-2'>{serviceData.title}</h3>
                                                <p className='text-md font-normal text-slate-500'>{serviceData.describe}</p>
                                            </div>
                                        </div>))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Admin;