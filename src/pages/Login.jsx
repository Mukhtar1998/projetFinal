import React from "react";
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


const clientId = "635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com"
function Login() {

	const onSuccess = (res) => {
		console.log(`LOGIN SUCCESS! Current user:`, res.profileObj);
	};

	const onFailure = (res) => {
		console.log(`LOGIN FAILED! res: ! `, res);
	}
	const responseGoogle = (response) => {
	   const userObject = jwt_decode(response.credential);
		   localStorage.setItem('user', JSON.stringify(userObject));
		const { name, sub, picture } = userObject;
		const doc = {
			_id: sub,
			_type: "user",
			userName: name,
			image: picture,
		};
	};
	return (
		<div className="login-parents" >
			{" "}
			<div className="login-first-child">
			<h3>login</h3>
				{" "}
				<GoogleOAuthProvider
					clientId={`635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com`}
				>
					{" "}
					<GoogleLogin
						render={(renderProps) => (
							<button
								type="button"
								className="primery-btn"
								buttonText="Login"
								clientId={{clientId}}
								// onClick={renderProps.onClick}
								// disabled={renderProps.disabled}
							>
								{" "}
								<FcGoogle className="" /> Sign in with google{" "}
							</button>
						)}
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy="single_host_origin"
						isSinged={true}
					/>{" "}
				</GoogleOAuthProvider>{" "}
			</div>{" "}
		</div>
	);
}

export default Login;
