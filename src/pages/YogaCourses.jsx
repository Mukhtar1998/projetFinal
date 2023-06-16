import React, { useEffect, useState } from "react";
import { getCourses } from "../hooks/coursesHooks";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { MySubscriptionModal } from "../components/calendar/SubscriptionModal";

const YogaCourses = () => {
	const [courses, setCourses] = useState([]);
	const [show, setShow] = useState(false);
	const [selectedCourse, setSelectedcourse] = useState(null);

	const showModal = (courseId) => (event) => {
		setShow(true);
		setSelectedcourse(courses.find((value) => value._id === courseId));
	};

	const hideModal = () => {
		setShow(false);
		setSelectedcourse(null);
	};

	useEffect(() => {
		const fetchMyData = async () => {
			const coursesFromDb = await getCourses();
			setCourses(coursesFromDb);
		};
		fetchMyData();
	}, []);

	const getDayName = (day) => {
		if (day === "1") {
			return "Lundi";
		} else if (day === "2") {
			return "Mardi";
		} else if (day === "3") {
			return "Mercredi";
		} else if (day === "4") {
			return "Jeudi";
		} else if (day === "5") {
			return "Verndredi";
		} else if (day === "6") {
			return "Samedi";
		} else if (day === "0") {
			return "Dimenche";
		}
	};
	return (
		<div className="yoga-classes-container">
			<div className="yoga-classes content">
				{courses.map((course) => (
					<div className="course-card card" key={course._id}>
						<h3>{course.title} </h3>
						<br />
						<div className="course-detials">
							<p>
								description : <span>{course.description} </span>
							</p>
							<br />
							<p>
								Number of Episode : <span>{course.courses.length} </span>
							</p>
							<br />
							<p>
								Max Student : <span>{course.maxStudents}</span>
							</p>
							<br />
							<p>
								{" "}
								cost :<span>{course.cost}</span>
							</p>
							<br />
							<p>
								Day And Time :{" "}
								<span>
									{getDayName(course.courses[0].day)} à {course.courses[0].time}
								</span>
							</p>
						</div>
						<button className="btn" onClick={showModal(course._id)}>
							Get Started
						</button>
						<MySubscriptionModal
							show={show}
							handleClose={hideModal}
							course={selectedCourse}>
							<p>Modal</p>
						</MySubscriptionModal>
					</div>
				))}
			</div>
		</div>
	);
};

export default YogaCourses;
