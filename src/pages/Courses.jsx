import React  from "react";
import { yogaCourses } from "../components/data/data";

export const yogaCoursesContext = React.createContext(yogaCourses);

const Courses = () => {
  const { courses} = React.useState(yogaCourses);

  function showCourse() {
    console.log(`courses`,  yogaCourses.map(item =>  item.courses ));
  }
    return (
      <div>
          <h1>Yoga Courses</h1>

            {/* {yogaCourses.map((courses) => (
                <li key={courses.key}>
                Descriiption :{courses.description}
                Max-Student :{courses.maxStudent}
                Price :{courses.price}
                Time and Date{courses.courses}
                </li>
            ))} */}
                <button onClick={showCourse()}>show courses</button>
      </div>

    )
}

export default Courses;