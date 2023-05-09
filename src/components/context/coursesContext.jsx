import { useState, createContext } from "react";

const UserContext = createContext();


function Component2() {
	const [ user] = useState(yogaCourses);
	return (
	  <>
		<h1>Component 2</h1>
		<h1>{`Hello ${user}!`}</h1>
	  </>
	);
}

export default Component2;