import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../hooks/coursesHooks";

const YogaCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchMyData = async () => {
      const coursesFromDb = await getCourses();
      setCourses(coursesFromDb);
    };
    fetchMyData();
  });
  
  return (
   <div className="yoga-classes-container">
     <div className="yoga-classes content">
      {courses.map((course) => (
        <div className="course-card card" key={course._id}>
          <h3>{course.title} </h3>
          <br />
          <div className="course-detials">
          <p>description : <span>{course.description} </span></p>
          <br />
          <p>Number of Episode : <span>{course.courses.length} </span></p>
          <br />
          <p>Max Student : <span>{course.maxStudents}</span></p>
          <br />
          <p> cost :<span>{course.cost}</span></p>
          <br />
          <p>
            Date And Time : <span>{course.courses[0].day} TO {course.courses[0].time}</span>
          </p>
          </div>
          <Link to="/register" style={{textDecoration:"none"}}>
            <button className="btn">Get Started</button>
          </Link>
        </div>
      ))}
    </div>
   </div>
  );

};

export default YogaCourses;
