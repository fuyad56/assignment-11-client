import React, { useState } from 'react';

const EditServicePopup = ({ serviceData, onSave, onCancel,onUpdate }) => {
    const [editedService, setEditedService] = useState({ ...serviceData });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedService({ ...editedService, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = fetch(`/updateService/${editedService._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedService),
            });

            if (response.ok) {
                const updatedServiceData = response.json();
                onUpdate(updatedServiceData);
            } else {
                console.error('Error updating service data');
            }
        } catch (error) {
            console.error('Error updating service data', error);
        }
        onSave();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={handleSubmit} className='flex flex-col w-[600px] border py-10 px-6 rounded-3xl shadow-xl'>
                    <input
                        type="text"
                        name="icon"
                        placeholder="Enter FontAwesome icon Name"
                        value={editedService.icon?.iconName}
                        onChange={handleInputChange}
                        className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={editedService.title}
                        onChange={handleInputChange}
                        className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                    />
                    <input
                        type="text"
                        name="describe"
                        placeholder="Enter Your words"
                        value={editedService.describe}
                        onChange={handleInputChange}
                        className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'
                    />
                    <div className="modal-buttons">
                        <button type="submit" className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'>Save</button>
                        <button onClick={onCancel} className='border-2 border-slate-500 m-2 py-1 px-2 rounded-[5px]'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditServicePopup;
