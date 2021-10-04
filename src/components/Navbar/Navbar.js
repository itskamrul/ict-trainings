import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className=' fw-bold position-static top-0 start-0 '>
            <nav className="nav-container navbar navbar-expand-lg navbar-ligth">
                <div className="container d-flex">
                <p className="navbar-brand"><span className='fast-name' >ICT</span> <span className='text-danger'>Trainings</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon collaps-button"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className=" nav-list navbar-nav ms-auto">
                            <li className="nav-link active" aria-current="page" ><NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                              }}
                            to="/home"> Home</NavLink></li>
                            <li className="nav-link active" aria-current="page" to="/service"><NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                              }}
                             to="/service">Service</NavLink>
                            </li>
                            <li className="nav-link active" aria-current="page" href="#"><NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                              }}
                             to="/about">About us</NavLink>
                            </li>
                            <li className="nav-link active" aria-current="page" href="#"><NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                              }}
                             to="/contact">Contact</NavLink>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;