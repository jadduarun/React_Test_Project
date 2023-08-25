import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ register, logUsername, setLogUsername, logPassword, setLogPassword }) {
  let navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (logUsername.trim() !== "" || logPassword.trim() !== "") {
      for (let i = 0; i < register.length; i++) {
        if (
          register[i].username === logUsername &&
          register[i].password === logPassword
        ) {
          navigate("/Home")
        } else {
          alert("Invalid Username or Password");
        }
      }
      setLogUsername("");
      setLogPassword("");
    } else {
      alert("Please Fill all the Required Fields");
    }
    console.log(register);
  }
  return (
    <div className="register">
      <div className="register-div">
        <h2>Login</h2>
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
              value={logUsername}
              onChange={(e)=> setLogUsername(e.target.value)}
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
              value={logPassword}
              onChange={(e)=> setLogPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <div className="already-account">
            <p>To Create an Account?</p>
            <Link to="/Register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
