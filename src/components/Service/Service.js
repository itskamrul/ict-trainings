import React from 'react';
import useCourse from '../../hooks/useCourse';
import Course from '../Course/Course';

const Service = () => {
    const courses = useCourse();
    return (
        <div className='container mt-3'>
            <div className='text-center'>
                <h2>Our All Courses</h2>
            </div>
            <div className='row'>
                {
                    courses.map(course =><Course 
                        key={course.key}
                        course={course}></Course> )
                }

            </div>
        </div>
    );
};

export default Service;