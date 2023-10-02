import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const result = await stripe.createToken(elements.getElement(CardElement));

        if (result.error) {
            console.error(result.error.message);
        } else {
            const cardToken = result.token.id;
            sendCardTokenToServer(cardToken);
        }
    };
    const sendCardTokenToServer = async (cardToken) => {
        fetch('http://localhost:5000/saveCardToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cardToken }),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log('Card token saved successfully');
                } else {
                    console.error('Error saving card token');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit">Pay</button>
        </form>
    );
}

export default Payment;
