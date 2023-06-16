export const createSubscriber = async (body) => {
	const res = await fetch("http://localhost:4002/api/subscribers/create", {
		method: "post",
		headers: {
			"Content-type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
		body: JSON.stringify(body),
	});
	if (res) {
		const responseJson = await res.json();
		if (responseJson) {
			return responseJson.subscriber;
		} else return console.log(res.json());
	} else return {};
};

export const getSubscriber = async () => {
	const res = await fetch("http://localhost:4002/api/subscribtions", {
		method: "GET",
		headers: { Authorization: "Bearer " + localStorage.getItem("token") },
	});
	if (res) {
		const responseJson = await res.json();
		if (responseJson) {
			return responseJson.subscriber;
		} else return console.log(res.json());
	} else return {};
};

export const deleteSubscriber = async (id) => {
	console.log(id);
	const res = await fetch(
		"http://localhost:4002/api/subscribers/delete/" + id,
		{
			method: "DELETE",
			headers: { Authorization: "Bearer " + localStorage.getItem("token") },
		}
	);
	if (res) {
		const responseJson = await res.json();
		if (responseJson) {
			return responseJson.subscriber;
		} else return console.log(res.json());
	} else return {};
};
