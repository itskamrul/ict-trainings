import React from 'react';
import Courses from '../Courses/Courses';
import './Header.css'

const Header = () => {
    return (
        
        <div>
            
        <div className='header header-container'>
            <div>
                <div className='row d-flex align-items-center justify-content-center'>
                    <div className='col-md-6'>
                        <h1 className="title text-white fw-bold">ICT TRAININGS</h1>
                        <h4>IT Professional Training Institute</h4>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>
            </div>
        </div>
        <Courses></Courses>
        </div>
    );
};

export default Header;