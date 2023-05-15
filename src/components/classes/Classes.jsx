import React, { useState } from "react";
import Item2 from "./Item2";
import { Link } from 'react-router-dom';

function Classes() {
	return (
		<div className="classes">
			<div className="text">
				<p>OUR CLASSES</p>
				<h1 className="classesh1">Join A Class Today!</h1>
			</div>
			<div className="three-grid">
				<Item2
					imgurl="/yoga-04.png"
					heading="Hot Yoga"
					blurb="Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa."
					cta="view now"
				/>
				<Item2
					imgurl="/yoga-05-1.png"
					heading="Yin Yoga"
					blurb="In cursus ornare sollicitudin. Ut libero urna, sollicitudin et porttitor id, tempus vitae nisl. Quisque a venenatis libero."
					cta="read more"
				/>
				<Item2
					imgurl="/yoga-03.png"
					heading="Hatha Yoga"
					blurb="Suspendisse hendrerit tincidunt metus id sollicitudin. Praesent sed sapien id arcu congue dapibus dapibus nec est."
					cta="next"
				/>
			</div>
			<div className="btn">
			<Link to="/courses">
				<input className="classesbtn" type="button" value="VIEW ALL" />
			</Link>
			</div>
		</div> 
	);
}

export default Classes;
