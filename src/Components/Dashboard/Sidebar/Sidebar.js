import React, { useContext, useEffect, useState } from 'react';
import Consumer from '../Consumer/Consumer';
import { UserContext } from '../../../App';
import Admin from '../Admin/Admin';

const Sidebar = () => {
    const [,] = useContext(UserContext);
    const [adminData, setAdminData] = useState("")
    useEffect(() => {
        fetch('http://localhost:5000/getUser')
            .then(res => res.json())
            .then(data => setAdminData(data))
    })
    return (
        <div>
            <h1>{adminData.role}</h1>
            {
                adminData[0]?.role === "admin" ? <Admin /> : <Consumer />
            }
        </div>
    );
};

export default Sidebar;