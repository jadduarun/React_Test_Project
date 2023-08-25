import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
      <div className="navbar">
        <div>
          <h3>Fake Shop</h3>
        </div>
        <div className="navbar-buttons">
          <Link to="/Home">All Products</Link>
          <Link to="Cart">View Cart</Link>
        </div>
      </div>
  );
}

export default NavBar;
