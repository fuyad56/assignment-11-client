import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getServices')
            .then((response) => response.json())
            .then((data) => setServicesData(data))
            .catch((error) => {
                console.error('Error fetching services data', error);
            });
    }, []);

    return (
        <div className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[40px] tablet:mt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <div>
                <h1 className='text-[#183D3D] font-semibold desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl mb-6' style={{ fontFamily: "Croissant One" }}>Services</h1>
            </div>
            <div className='grid desktop:grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1 gap-4'>
                {
                    servicesData.map(serviceData => (<Service key={serviceData.id} serviceData={serviceData} />))
                }
            </div>
        </div>
    );
};

export default Services;