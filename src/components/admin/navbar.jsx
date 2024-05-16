import React, { useEffect, useState } from "react";
import { logo } from "../../assets/images/index";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import ProfileModal from "../Modal/ProfileModal";
import Modals from "../../services/modals";

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
  const [isOpen, setIsOpen] = useState(false); // State for the profile modal
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await Modals.getUser();
      setUser(data.data.data.body);
    };
    getUsers();
  }, []);

  const openProfileModal = () => setIsOpen(!isOpen);
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
        <div className="profile flex items-center gap-5">
          <h2 className="profile-name font-semibold text-gray-900 dark:text-white decoration-indigo-500">
            {user.name}
          </h2>
          <img
            onClick={openProfileModal}
            class="profile-img w-10 h-10 p-1 cursor-pointer rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="	http://gsrlogistic.uz/static/media/admin.2294be32a4e6b9b31eb4.png"
            alt="Bordered avatar"
          />
        </div>
        <select
          className="uppercase outline-none shadow-sm text-xl py-2 px-6 font-bold 
        rounded-full"
        >
          <option value="eng">Eng</option>
          <option value="ru">Rus</option>
        </select>
      </div>
      <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
