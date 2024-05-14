import React, { useState } from "react";
import { logo } from "../../assets/images";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const navItems = [
  {
    label: "Home",
    route: "#home",
  },
  {
    label: "About",
    route: "#about",
  },
  {
    label: "Services",
    route: "#services",
  },
  {
    label: "Gallery",
    route: "#gallery",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleFuc = () => setToggle(!toggle);
  return (
    <header className="flex top-0 z-50 justify-between w-full pr-10 items-center fixed py-4 bg-white">
      <div className="flex gap-5 ml-28">
        <img className="w-auto h-10 lg:block sm:hidden" src={logo} alt="logo" />

        <ul className="header flex sm:hidden lg:flex gap-5 items-center">
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
        <i onClick={toggleFuc} className={`fa-solid fa-bars md:hidden`}></i>
        <Link
          className="flex items-center justify-center bg-[#b91e22] font-bold py-2
           text-white px-8 rounded-full gap-2"
          to={"/login"}
        >
          <span className="text-xl sm:hidden">Log In</span>
          <i className="fa-solid fa-arrow-right-to-bracket fa-2xl font-black"></i>
        </Link>
        <h1 className={toggle ? "block" : "hidden"}>hello</h1>
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

export default Header;
