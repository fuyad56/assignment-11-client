import React from 'react';

const Contact = () => {
    return (
        <div>
            <div>
                <h1>Services</h1>
            </div>
            <div>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" id="message" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;