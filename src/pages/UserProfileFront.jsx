import React from "react";

const UserProfilFront = () => {
	const connectedUser = localStorage.getItem("user");
	const parsedUser = JSON.parse(connectedUser);
	if (parsedUser) {
		return `Hello ${parsedUser.name}, welcome to your profile`;
	} else {
		return "please Login again to access your account !";
	}

	return <div></div>;
};

export default UserProfilFront;
