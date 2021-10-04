import React from 'react';

const Course = (props) => {
    const {img, name, price, description} = props.course;
    return (
        <div className="col col-md-3 mt-5 shadow-sm rounded">
                <div>
                    <div className="card border-0 h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"#15416E"}}>{name}</h5>
                        <h6 className="card-title text-danger"> Fee: {price} TK</h6>
                        <p className="card-text">{description}</p>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Course;