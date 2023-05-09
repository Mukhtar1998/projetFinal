import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Counter from "./pages/Counter";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import  Register from "./pages/Register";
import Courses from "./pages/Courses";
import { GoogleLogin } from "@react-oauth/google";
// import { yogaCourses } from './components/data/data';


function App() {
	return (
        // <UserContext.Provider value={{yogaCourses : yogaCourses}}>
				<div className="App">
				<Nav />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/tools" element={<Tools />} />
						<Route exact path="/counter" element={<Counter />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Register />} />
						<Route exact path="/userlogin" element={<GoogleLogin />} />
						<Route exact path="/courses" element={<Courses />} />
					</Routes>
				</div>
				// </UserContext.Provider>
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