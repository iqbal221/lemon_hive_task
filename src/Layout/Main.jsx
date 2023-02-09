import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
    <div className="lg:mx-16 mx-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
