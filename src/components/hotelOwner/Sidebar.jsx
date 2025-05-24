import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="flex h-full w-16 flex-col border-r border-gray-300 pt-4 text-base transition-all duration-300 md:w-64">
      {sidebarLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          end="/owner"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 md:px-8 ${isActive ? "border-r-4 border-blue-600 bg-blue-600/10 text-blue-600 md:border-r-[6px]" : "border-white text-gray-700 hover:bg-gray-100/90"}`
          }
        >
          <img src={item.icon} alt={item.name} className="min-h-6 min-w-6" />
          <p className="hidden text-center md:block">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
