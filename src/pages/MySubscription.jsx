import React, { useEffect, useState } from "react";
import { getSubscriber } from "../hooks/subscriberHooks";
import { deleteSubscriber } from "../hooks/subscriberHooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MySubscription = () => {
	const [subscription, setSubscrition] = useState([]);
	const [deleteSubscrition, setDeleteSubscription] = useState([]);

	const connectedUser = localStorage.getItem("user");
	if (connectedUser) {
		useEffect(() => {
			const fetchMyData = async () => {
				const subscriberFromDb = await getSubscriber();
				setSubscrition(subscriberFromDb);
				console.log(`subscriberFromDb`, subscriberFromDb);
			};
			fetchMyData();
		}, [null]);
	} else {
		return "login again to get access to your subscriptions !";
	}

	const deleteByValue = (id, handleClose) => {
		deleteSubscriber(id);
		const index = subscription.findIndex((value) => value._id === id);
		console.log("avent", subscription);
		subscription.splice(index, 1);
		console.log(subscription);
		setDeleteSubscription(subscription);
		toast("Subscription deleted !")
		// handleClose = () => null;
		// return (
		// 	<div>
		// 		<button onClick={() => deleteByValue(id)}>yes</button>
		// 		<button onClick={() => handleClose()}>no</button>
		// 	</div>
		// );
	};

	const dayToDayName = (day) => {
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
		<>
			<div>
				<h1 style={{ textAlign: "center" }}>My Subscription</h1>
			</div>
			<div className="subscriber-content">
				{subscription.map((subcriber) => (
					<div className="subscriber-card" key={subcriber._id}>
						<h3>Title :{subcriber.course.title}</h3>
						<br />
						<p>Description :{subcriber.course.description}</p>
						<br />
						<p>
							Day :
							{subcriber.course.courses.map((day) => dayToDayName(day.day))}
						</p>
						<br />
						<p>Time :{subcriber.course.courses.map((time) => time.time)}</p>
						<br />
						<p>Date : {new Date(subcriber.date).toLocaleDateString()}</p>
						<button
							className="btn"
							onClick={() => deleteByValue(subcriber._id)}>
							Delete
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default MySubscription;
