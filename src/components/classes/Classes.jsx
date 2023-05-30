import React from "react";
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
					blurb="Breathing exercises, known as pranayama, play a vital role in yoga. We provide step-by-step instructions for different breathing techniques that can help you relax, increase your energy, and enhance mental clarity. "
					// cta="view now"
				/>
				<Item2
					imgurl="/yoga-05-1.png"
					heading="Yin Yoga"
					blurb="Meditation is an integral part of yoga, allowing you to cultivate mindfulness, reduce stress, and cultivate inner awareness. Our website offers guidance on various meditation practices, including mindfulness meditation."
					// cta="read more"
				/>
				<Item2
					imgurl="/yoga-03.png"
					heading="Hatha Yoga"
					blurb="We believe that yoga is for everyone, regardless of age, body type, or fitness level. That's why we offer modifications and variations for each pose, making yoga accessible to all. Whether you are seeking relaxation, stress relief, increased flexibility."
					// cta="next"
				/>
			</div>
			<div className="btn">
			<Link to="/courses">
				<input className="btn3" type="button" value="VIEW ALL" />
			</Link>
			</div>
		</div> 
	);
}

export default Classes;
