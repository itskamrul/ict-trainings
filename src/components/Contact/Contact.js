import React from 'react';
import contact from '../../images/contact.jpg'

// contact component
const Contact = () => {
    return (
        <div className='container'>
            <h1 className="fw-bold text-center my-3">Contact With Us</h1>
            <div className="row row-cols-2 my-5">
                <div className='col'>
                    <img src={contact} alt="" />
                </div>
                {/* Email section */}
                <div className='col'>
                    <input className="mb-3 border border-1 w-75 p-2 border-dark rounded" type="email" placeholder="Enter Your Email" /><br />
                    <textarea className="mb-3 border-1 w-75 p-2 border-dark rounded-3" placeholder="type your message" cols="30" rows="10"></textarea><br />
                    <button className="my-5 border border-1  w-75 p-2 bg-success text-white fw-bold rounded-3">Submit Your Mail</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;