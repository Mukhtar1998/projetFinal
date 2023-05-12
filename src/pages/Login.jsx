import React, { useState } from "react";

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
    if (passwordValue.length < 6) {
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
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(details),
      }).then( value => console.log("value" , value.json().then(res => console.log(res))));
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
            Submit
          </button>
        </form>
      </div>
      <div className="left-div">
        <img
          src="https://images.thequint.com/thequint%2F2022-07%2Fe2305be9-e9da-491e-9955-cebaba47b7f2%2Fwarrior_pose_from_yoga_picture_id498058082.jpg"
          alt="login-img"
        ></img>
      </div>
    </div>
  );
};

export default Login;
