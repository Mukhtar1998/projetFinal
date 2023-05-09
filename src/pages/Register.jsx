import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    const errors = {};
    if (!username) {
      console.log(errors.username = "Username is required");
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!email) {
      errors.email = "Email is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
        var body = {name: username, lastName: lastName,  email: email, password: password};
        fetch("http://localhost:4002/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then( value => console.log("value" , value.json().then(res => console.log(res))));
    }

    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="left-div">
        <img
          src="https://images.thequint.com/thequint%2F2022-07%2Fe2305be9-e9da-491e-9955-cebaba47b7f2%2Fwarrior_pose_from_yoga_picture_id498058082.jpg"
          alt="login-img"
        ></img>
      </div>
    </div>
  );
};

export default Register;
