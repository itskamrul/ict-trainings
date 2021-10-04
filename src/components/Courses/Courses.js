import useCourse from '../../hooks/useCourse';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useCourse();
    return (
        <div className='container mt-3'>
            <div className='text-center'>
                <h2>Our Courses</h2>
            </div>
            <div className='row'>
                {
                    courses.map(course => course.key <= 4 ? <Course 
                        key={course.key}
                        course={course}></Course>: [] )
                }

            </div>
        </div>
    );
};

export default Courses;