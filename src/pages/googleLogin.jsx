import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const clientId =
  "635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com";
  
const GoogleLogin = () => {
  const onSuccess = (res) => {
    console.log(`LOGIN SUCCESS! Current user:`, res.profileObj);
  };

  const responseGoogle = (response) => {
    const userObject = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(userObject));
    const { name, sub, picture } = userObject;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
  };
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }
  return (  
    <div className="login-parents">
      {" "}
      <div className="login-first-child">
        <h3>login with google</h3>{" "}
        <GoogleOAuthProvider
          clientId="635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com"
        >
          {" "}
          <GoogleLogin
            render={(renderProps) => (
              <button
                type="button"
                className="primery-btn"
                buttonText="Login"
                clientId={{ clientId }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                {" "}
                <FcGoogle className="" onClick={onSuccess()} /> Sign in with
                google{" "}
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
};

export default GoogleLogin;
