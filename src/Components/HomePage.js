import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default HomePage;
