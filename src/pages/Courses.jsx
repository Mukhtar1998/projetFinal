import React from "react";
import { courses, yogaCourses } from './../components/data/data';
import { Link } from "react-router-dom";

const Courses = () => {
     const yogaCourses = [
        {
            id: 0,
            title: "Introduction",
            time: 24/12/2023,
            course: "https://www.youtube.com/watch?v=g13nVd7OLYs",
            price: 20
        },
        {
            id: 1,
            title: "Level 1",
            time: 24/12/2023,
            course: "https://www.youtube.com/watch?v=g13nVd7OLYs",
            price: 20
        },
        {
            id: 2,
            title: "Level 2",
            time: 24/12/2023,
            course: "https://www.youtube.com/watch?v=g13nVd7OLYs",
            price: 20
        },
        {
            id: 3,
            title: "Level 3",
            time: String,
            course: "https://www.youtube.com/watch?v=g13nVd7OLYs",
            price: 20
        },
        {
            id: 4,
            title: "Level 4",
            time: 24/12/2023,
            course: "https://www.youtube.com/watch?v=g13nVd7OLYs",
            price: 20
        },
        {
            id: 5,
            title: "Level 5",
            time: 24/12/2023,
            course: "https://www.youtube.com/watch?v=g13nVd7OLYs",
            price: 20
        }
    ]

    return (
        <>
        <h1>Yoga Courses</h1>

        {/* {yogaCourses.map(course => {
            <div key={course.id}>
                <li>{course.title}</li>
                <video>{course.course}</video>
                <li>{course.time}</li>

            </div>
        })}        */}
        </>
    )
}

export default Courses;