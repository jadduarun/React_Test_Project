import React from "react";
import { Link } from "react-router-dom";

function Register({
  username,
  password,
  setUsername,
  setPassword,
  register
}) {
  function handleRegister(e) {
    e.preventDefault();
    if (username.trim() !== "" || password.trim() !== "") {
        register.push({
            username,
            password
        })
      setUsername("");
      setPassword("");
    } else {
      alert("Please Fill all the Required Fields");
    }
    console.log(register);
  }

  return (
    <div className="register">
      <div className="register-div">
        <h2>Register</h2>
        <form className="form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username :
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="exampleInputEmail1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
          <div className="already-account">
            <p>Already Have an Account?</p>
            <Link to="/Login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
