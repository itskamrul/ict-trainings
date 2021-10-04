import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.jpg';

// not found component
const NotFound = () => {
    return (
        <div className="text-center">
            <div>
                <img className="mx-auto w-50" src={notFound} alt="" />
            </div>
            <Link className="inline-block mb-3 text-decoration-none text-white  p-2 rounded fw-bold" style={{backgroundColor:'#0066C4'}} to='/home'>Go Back To Home Page</Link>
        </div>
    );
};

export default NotFound;