import React from 'react';
import { faRecycle, faUserGraduate, faWind } from '@fortawesome/free-solid-svg-icons';
import Service from '../Service/Service';

const servicesData = [
    {
        id: 1,
        title: 'Recyclable plastics',
        describe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus sed excepturi autem perferendis at?',
        icon: faRecycle,
    },
    {
        id: 2,
        title: 'Certified for best value',
        describe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus sed excepturi autem perferendis at?',
        icon: faUserGraduate,
    },
    {
        id: 3,
        title: 'Cool you faster',
        describe: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus sed excepturi autem perferendis at?',
        icon: faWind,
    }
]

const Services = () => {
    return (
        <div className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[40px] tablet:mt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <div>
                <h1 className='mt-5 mb-5 text-5xl font-semibold' style={{ fontFamily: "Croissant One" }}>Services</h1>
            </div>
            <div className='grid grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1 gap-4'>
                {
                    servicesData.map(serviceData => (<Service key={serviceData.id} serviceData={serviceData} />))
                }
            </div>
        </div>
    );
};

export default Services;