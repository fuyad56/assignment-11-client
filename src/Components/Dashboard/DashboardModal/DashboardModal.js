import React, { useContext, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NodO4FbyD7BlgCNxJ9MijzbmXkoonwFnlp61yGbXOGRnPyFJSQu5RFHpL7foEayqAEepnDquspzc2KJJ18TjDz500OFLtjmaX');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement('#root');

const DashboardModal = ({ modalIsOpen, closeModal, fanData, quantity }) => {
    const [loggedInUser] = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        productName: '', 
        paymentMethod: '',
        quantity: fanData.price * quantity,
    });

    useEffect(() => {
        if (fanData && fanData.name) {
            setFormData({
                ...formData,
                productName: fanData.name,
            });
        }
    }, [fanData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePaymentComplete = (cardToken) => {
        setFormData({
            ...formData,
            cardToken: cardToken,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, productName, paymentMethod, cardToken } = formData;

        const paymentData = {
            name,
            email,
            productName,
            paymentMethod,
            cardToken,
        };

        fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log('Payment data saved successfully');
                } else {
                    console.error('Error saving payment data');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        closeModal();
    };

    return (
        <div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="flex flex-col w-[500px]" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-b-2 border-slate-400 m-2 py-1 px-2 font-medium"
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-b-2 border-slate-400 m-2 py-1 px-2 font-medium"
                    />

                    <input
                        type="text"
                        name="productName"
                        id="product-name"
                        placeholder="Enter Product Name"
                        value={formData.productName}
                        onChange={handleInputChange}
                        className="border-b-2 border-slate-400 m-2 py-1 px-2 font-medium"
                    />

                    <div>
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="credit-card"
                            value="Credit Card"
                            checked={formData.paymentMethod === 'Credit Card'}
                            onChange={handleInputChange}
                            className="border-b-2 border-slate-400 m-2 py-1 px-2 font-medium"
                        />
                        <label htmlFor="credit-card">Credit Card</label>

                        <input
                            type="radio"
                            name="paymentMethod"
                            id="paypal"
                            value="Paypal"
                            checked={formData.paymentMethod === 'Paypal'}
                            onChange={handleInputChange}
                            className="ml-4 mr-2"
                        />
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                    <div>
                        <Elements stripe={stripePromise}>
                            <Payment onPaymentComplete={handlePaymentComplete} />
                        </Elements>
                    </div>
                    <p className="ml-2">You need to pay $ {fanData.price * quantity}</p>
                    <input type="submit" value="Submit" className="border-2 border-slate-400 m-2 py-1 px-2 font-medium cursor-pointer" />
                </form>
            </ReactModal>
        </div>
    );
};

export default DashboardModal;
