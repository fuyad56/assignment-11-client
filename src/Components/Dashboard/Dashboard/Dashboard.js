import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='h-[800px]'>
                <div className='grid grid-cols-2 h-full'>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;