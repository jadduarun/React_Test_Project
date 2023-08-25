import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-title">
          <h1>Fake Shop</h1>
        </div>
        <div className="home-buttons">
          <Link to="Register" className="button">Register</Link>
          <Link to="Login" className="button">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
