import React from "react";
import { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsiv-nav");
		console.log(navRef.current.classList);
	};

	return (
		<header className="nav" >
			<h3>LOGO</h3>
			<nav id="navigarion" ref={navRef}>
					<span>
						<Link className="nav-link" to="/home">
							Home
						</Link>
					</span>
					<span>
						<Link className="nav-link" to="/tools">
							Tools
						</Link>
					</span>
					<span>
						<Link className="nav-link" to="/counter">
							Counter
						</Link>
					</span>
					<span>
						<Link className="nav-link" to="/login">
							Login
						</Link>
					</span>
					<span>
						<Link className="nav-link" to="/userlogin">
							login with Google
						</Link>
					</span>
					<span>
						<Link className="nav-link" to="/logout">
							logout
						</Link>
					</span>	
						<Link className="nav-link" to="/component">
							Component2
						</Link>
					<span>
						<Link className="nav-link" to="/courses">
							Courses
						</Link>
					</span>

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
