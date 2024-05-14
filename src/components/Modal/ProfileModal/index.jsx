import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileEditModal from "../ProfileEditModal";
import Modals from "../../../services/modals";
import { removeItem } from "../../../helpers/storege";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ setIsOpen, isOpen }) => {
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const closeModal = () => setIsOpen(false);

  const getUsers = async () => {
    const data = await Modals.getUser();
    setUser(data.data.data.body);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const logout = () => {
    removeItem();
    navigate("/");
  };

  const editUser = () => {
    setIsNestedOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="absolute lg:w-80 w-72 bg-slate-400 lg:right-32 right-1 top-20 rounded-3xl shadow-lg overflow-hidden z-20">
          <div className="bg-slate-200 sm:p-8 p-3 flex justify-center items-center">
            <img
              className="rounded-full w-24 h-24"
              src="http://gsrlogistic.uz/static/media/admin.2294be32a4e6b9b31eb4.png"
              alt="img"
            />
            <i
              className="fa-solid fa-xmark absolute top-5 right-5 text-2xl cursor-pointer"
              onClick={closeModal}
            ></i>
          </div>
          <div className="bg-slate-200 sm:px-8 px-2 py-6">
            <div className=" font-bold text-black text-[1.1rem]">
              <p className="opacity-50 pb-0 mb-0 mt-2">User name</p>
              <p className="mt-0 pt-0 text-black">{user.name}</p>
            </div>
            <div className=" font-bold text-black text-[1.1rem]">
              <p className="opacity-50 pb-0 mb-0 mt-2"> User id Number</p>
              <p className="mt-0 pt-0 text-black">{user.idNumber}</p>
            </div>
            <div className=" font-bold text-black text-[1.1rem]">
              <p className="opacity-50 pb-0 mb-0 mt-2">User phone number</p>
              <p className="mt-0 pt-0 text-black">{user.phoneNumber}</p>
            </div>
            <Profile_Modal>
              <div className="font-bold text-black password text-[1.1rem]">
                <p className="opacity-50 pb-0 mb-0 mt-2">Password</p>
                <p className="mt-0 pt-0 nuqta text-black">......</p>
                <p className="mt-0 pt-0 parol text-black ">{user.password}</p>
              </div>
            </Profile_Modal>
            <div className="flex justify-between items-center mt-3 font-bold text-white">
              <button
                className="bg-yellow-500 px-5 py-1.5 rounded-lg shadow-lg active:scale-95 duration-200"
                onClick={editUser}
              >
                Edit
              </button>
              <button
                onClick={logout}
                className="bg-red-600 px-5 py-1.5 rounded-lg shadow-lg active:scale-95 duration-200"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
      {isNestedOpen && <ProfileEditModal setIsNestedOpen={setIsNestedOpen} />}
    </>
  );
};

const Profile_Modal = styled.div`
  .profile-modal {
    position: absolute;
    right: 260px;
    top: 75px;
  }

  .parol {
    transition: all 0.3s ease-in;
    display: none;
  }

  .nuqta {
    transition: all 0.3s ease-in;
  }

  .password:hover {
    .nuqta {
      display: none;
      transition: all 0.3s ease-in-out;
    }

    .parol {
      display: block;
      transition: all 0.3s ease-in;
    }
  }
`;

export default ProfileModal;
