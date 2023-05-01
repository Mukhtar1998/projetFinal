import React from "react";
import { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Classes from './../classes/Classes';

const clientId =
"635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com";

function Nav() {
	// useEffect(() => {
		//     function start() {
			//         gapi.clientId.init({
				//             clientId: clientId,
				//             scope: ""
				//         })
				//     };
				//     gapi.load('client:auth2', start)
				// })
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsiv-nav");
		console.log(navRef.current.classList);
	};

	return (
		<header className="nav" >
			<h3>LOGO</h3>
			<nav id="navigarion" ref={navRef}>
					<a>
						<Link className="nav-link" to="/">
							Home
						</Link>
					</a>
					<a>
						<Link className="nav-link" to="/tools">
							Tools
						</Link>
					</a>
					<a>
						<Link className="nav-link" to="/counter">
							Counter
						</Link>
					</a>
					<a>
						<Link className="nav-link" to="/login">
							Login
						</Link>
					</a>
					<a>
						<Link className="nav-link" to="/logout">
							logout
						</Link>
					</a>
					<a>
						<Link className="nav-link" to="/courses">
							Courses
						</Link>
					</a>

					<button className="nav-btn nav-close-btn">
					<FaTimes  onClick={showNavbar}/>
					</button>
			</nav>
					<button className="nav-btn">
					<FaBars  onClick={showNavbar}/>
					</button>
		</header>
	);
}
export default Nav;
