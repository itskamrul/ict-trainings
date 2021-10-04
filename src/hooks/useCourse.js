import { useEffect, useState } from "react"

const useCourse = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])

    return course;
}

export default useCourse;