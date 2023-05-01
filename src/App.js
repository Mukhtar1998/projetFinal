import React from 'react'
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Counter from './pages/Counter';
import {
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import  Courses  from './pages/Courses';
import { useEffect } from "react"
// import LogOut from './pages/logeOut';

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

const clientId = "635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com";

function App() {

  // useEffect(()=> {
  //   function start(){
  //     gapi.client.init({
  //       clietId: clientId,
  //       scope:""
  //     })
  //   };
   
  // })
  return (
    	<div>
        <Nav/>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tools" element={<Tools />} />
            <Route exact path="/counter" element={<Counter />}/>
            <Route exact path="/login" element={<Login />} />
            {/* <Route exact path="/login" element={<LogOut />} /> */}
            <Route exact path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
