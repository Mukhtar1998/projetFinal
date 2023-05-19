import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (!emailValue.includes("@")) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (passwordValue.length < 8) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError === "" && passwordError === "") {
      console.log("Submit form with email:", email, "and password:", password);
      var details = { email: email, password: password };
      fetch("http://localhost:4002/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(details),
      }).then((value) =>
        console.log(
          "value",
          value.json().then((res) =>  console.log(res))
        )
      );
    } else {
      console.log("Cannot submit form. Please correct errors.");
    }
  };

  return (
    <div className="login-container">
      <div className="right-div">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>login</h1>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <p>{emailError && <span>{emailError}</span>}</p>
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <p>{passwordError && <span>{passwordError}</span>}</p>
          </div>
          <button className="submit-btn" type="submit">
            Login
          </button>
          <p>OR</p>
          <div className="g-login" style={{backgroundColor:"lightgray", padding:"10px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"5px" , borderRadius:"5px"}}>
            <FcGoogle/>
          <Link style={{color:"black" ,TextDecoration:"none"}} to="/g-login">
            <span style={{fontSize:"bold", }} >Login with google</span>
          </Link>
          </div>
        </form>
      </div>
      <div className="left-div">
                   <img className='introimage' src="./yoga1.png" alt="yoga1"/>
      </div>
    </div>
  );
};

export default Login;
