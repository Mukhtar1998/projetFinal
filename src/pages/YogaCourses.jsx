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
      {courses.map((course) => (
        <div className="course-card" key={course._id}>
          <img  style={{width:"200px"}} src={course.img}/>
          <p> Name : {course.title} </p>
          <br />
          <p>description : {course.description} </p>
          <br />
          <p>Number of Episode : {course.courses.length} </p>
          <br />
          <p>Max Student : {course.maxStudents}</p>
          <br />
          <p>Cost :{course.cost} </p>
          <br />
          <p>
            Date And Time : {course.courses[0].day} TO {course.courses[0].time}
          </p>
          <Link to="/register">
            <button>Get Started</button>
          </Link>
        </div>
      ))}
    </div>
  );

  //  console.log(Courses.map(item => item.dateAndTime.day));
};

export default YogaCourses;
