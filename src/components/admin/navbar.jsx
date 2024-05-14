import React from "react";
import { logo } from "../../assets/images/index";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const navItems = [
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "Project",
    route: "/project",
  },
  {
    label: "Warehouse",
    route: "/warehouse",
  },
  {
    label: "Users",
    route: "/users",
  },
  {
    label: "Cashier",
    route: "/cassier",
  },
];

const Navbar = () => {
  return (
    <header className="flex top-0 z-50 justify-between w-full pr-10 items-center fixed py-4 bg-white">
      <div className="flex gap-5 ml-28">
        <img className="w-auto h-10" src={logo} alt="logo" />

        <ul className="flex admin gap-5 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink className="py-2 px-3" to={item.route}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-5">
        <select
          className="uppercase outline-none shadow-sm text-xl py-2 px-6 font-bold 
        rounded-full"
        >
          <option value="eng">Eng</option>
          <option value="ru">Rus</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
