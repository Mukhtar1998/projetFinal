import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Counter from "./pages/Counter";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import { GoogleLogin } from "@react-oauth/google";
import { createContext , useState} from "react"

// import GoogleLogin from "./pages/googleLogin";
import { yogaCourses } from './components/data/data';


const UserContext = createContext();

function Component2() {
	const [ user] = useState("Jesse Hall");
	return (
	  <>
		<h1>Component 2</h1>
		<h1>{`Hello ${user}!`}</h1>
	  </>
	);
}



function App() {
	return (
        <UserContext.Provider value={{yogaCourses : yogaCourses}}>
				<Nav />
				<div className="App">
					<Routes>
						<Route exact path="/home" element={<Home />} />
						<Route exact path="/tools" element={<Tools />} />
						<Route exact path="/counter" element={<Counter />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/userlogin" element={<GoogleLogin />} />
						<Route exact path="/component" element={<Component2 />} />
						<Route exact path="/courses" element={<Courses />} />
					</Routes>
				</div>
				</UserContext.Provider>
	);
}

export default App;



















// front end development
// how to create a react app
// creating components
// what a component is
// what a prop is
// how to create a prop
// how to use a prop inside a component
// how to use a prop to create dynamic content
// how to structure your files
// how to installl dependencies to your react project using NPM (NEEDS CONSOLIDATION)
// how to create links which return components
// how to use STATE <--