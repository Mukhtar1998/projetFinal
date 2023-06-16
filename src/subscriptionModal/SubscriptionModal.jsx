// import React, { useState, useEffect } from "react";
// import { deleteSubscriber } from "../hooks/subscriberHooks";
// import { getSubscriber } from "../hooks/subscriberHooks";

// export const DeleteByValue = (id) => {
// 	const [subscription, setSubscrition] = useState([]);
// 	const [deleteSubscription, setDeleteSubscription] = useState([]);

// 	useEffect(() => {
// 		const fetchMyData = async () => {
// 			const subscriberFromDb = await getSubscriber();
// 			setSubscrition(subscriberFromDb);
// 		};
// 		fetchMyData();
// 	}, []);

// 	deleteSubscriber(id);
// 	const index = subscription.findIndex((value) => value._id === id);
// 	console.log("avent", subscription);
// 	subscription.splice(index, 1);
// 	console.log(subscription);
// 	setDeleteSubscription(subscription);
// 	const handleClose = () => {
// 		return null;
// 	};
// 	return (
// 		<div>
// 			<button onClick={() => DeleteByValue(id)}>yes</button>
// 			<button onClick={() => handleClose()}>no</button>
// 		</div>
// 	);
// };
