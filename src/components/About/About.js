import React from 'react';
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'

const About = () => {
    return (
        <div className="container">
            {/* about section */}
            <div className='mb-4 pt-5'>
                <h2 className="text-center my-4  fw-bold">About ICT</h2>
                <p className="text-center  mb-3">ICT Trainings Institute</p>
            </div>
            {/* mession section */}
            <div className="row mb-3 ">
                <div className=" col-md-4">
                    <img className="w-100" src={image1} alt="" />
                </div>
                <div className="col-md-8 pe-3">
                    <h2 className="">Our Mession</h2>
                    <p className="text-justify ">ICT deliver both standard and customized/bespoke training courses for a wide range of technology vendors like Cisco®, Juniper®, Microsoft®, RedHat®, Adobe®, Java®, PHP®, and much more! Our courses will suit beginners as well as advanced users to augment their technical capabilities to excel in career. Furthermore, our job section always keeps on posting local and international placements. </p>
                </div>
            </div>
            {/* story section */}
            <div className="row my-12 mt-5">
                <div className=" col-md-8">
                <h2 className="">Our Story</h2>
                    <p className="text-justify ">ICT Trainings can run courses in customers premises, if required. Through our technologically advanced infrastructure, DISTANT LEARNING is among major focus of ICT Trainings. We deliver skills to locals from any part of the world via innovative methodologies that comprise of lectures and dedicated access to equipment/racks. Engineering Your Career.</p>
                </div>
                <div className="col-md-4">
                <img className="w-100" src={image2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;