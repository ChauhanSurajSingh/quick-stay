import React from "react";
import Navbar from "../../components/hotelOwner/Navbar";
import Sidebar from "../../components/hotelOwner/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="h-full flex-1 p-4 pt-10 md:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
