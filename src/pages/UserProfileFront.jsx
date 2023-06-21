import React from "react";

const UserProfilFront = () => {
	const connectedUser = localStorage.getItem("user");
	const parsedUser = JSON.parse(connectedUser);
	if (parsedUser) {
		const userName = parsedUser.name;
		return `Hello ${
			userName.charAt(0).toUpperCase() + userName.slice(1)
		}, welcome to your profile`;
	} else {
		return "please login agian to access your account !";
	}

	return <div></div>;
};

export default UserProfilFront;
