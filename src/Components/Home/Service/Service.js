import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = ({ serviceData }) => {
    return (
        <div className='border text-center p-6 shadow-xl rounded-3xl hover:scale-[1.04] duration-500 mt-6'>
            <div className='mb-4'>
                <FontAwesomeIcon icon={serviceData.icon} className='text-[80px]' />
            </div>
            <div>
                <h3 className='text-3xl font-medium text-slate-700 mb-2'>{serviceData.title}</h3>
                <p className='text-md font-normal text-slate-500'>{serviceData.describe}</p>
            </div>
        </div>
    );
};

export default Service;