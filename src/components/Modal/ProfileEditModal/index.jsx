import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modals from "../../../services/modals";
import { toast } from "react-toastify";

const ProfileEditModal = ({ setIsNestedOpen }) => {
  const [name, setName] = useState("");
  const [idNumber, setIdnumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const getUserData = async () => {
    const data = await Modals.getUser();
    const userData = data.data.data.body;
    setName(userData.name);
    setIdnumber(userData.idNumber);
    setPhoneNumber(userData.phoneNumber);
    setPassword(userData.password);
    setUser(userData);
  };

  const changeUserData = async (id) => {
    const userData = {
      id: user.id,
      name,
      idNumber,
      phoneNumber,
      password,
    };
    await Modals.changeUser(userData, id);
    toast.success("Updeted success");
    setIsNestedOpen(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleClose = () => {
    setIsNestedOpen(false); // Call the prop to close the modal
  };

  return (
    <span className="fixed inset-0 flex items-center px-3 justify-center z-50">
      <Profile_Edit_Modal>
        <div className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center modal bg-white rounded-xl lg:w-1/3 sm:w-2/3  w-full overflow-hidden shadow-2xl">
          <div className="">
            <div className="bg-slate-200 py-8  flex flex-col justify-center items-center relative">
              <i
                onClick={handleClose}
                className="fa-solid cursor-pointer fa-xmark absolute top-5 right-5 text-2xl"
              ></i>
              <img
                className="rounded-full w-24 h-24"
                src="http://gsrlogistic.uz/static/media/admin.2294be32a4e6b9b31eb4.png"
                alt="img"
              />
            </div>
            <div className="bg-slate-200 w-full md:px-8 px-3 md:py-6 py-2">
              <div className=" font-bold text-black text-[1.1rem]">
                <p className="opacity-50 pb-0 mb-0 mt-2">User name</p>
                <input
                  type="text"
                  id="name"
                  className="w-full border-2 text-gray-800 border-gray-200 p-2 rounded-xl outline-none focus:border-blue-400 duration-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" font-bold text-black text-[1.1rem]">
                <p className="opacity-50 pb-0 mb-0 mt-2"> User id Number</p>
                <input
                  type="text"
                  id="idNumber"
                  className="w-full border-2 text-gray-800 border-gray-200 p-2 rounded-xl outline-none focus:border-blue-400 duration-500"
                  value={idNumber}
                  onChange={(e) => setIdnumber(e.target.value)}
                />
              </div>
              <div className=" font-bold text-black text-[1.1rem]">
                <p className="opacity-50 pb-0 mb-0 mt-2">User phone number</p>
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-full border-2 text-gray-800 border-gray-200 p-2 rounded-xl outline-none focus:border-blue-400 duration-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className=" font-bold text-black text-[1.1rem]">
                <p className="opacity-50 pb-0 mb-0 mt-2">Password</p>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    className="w-full border-2 text-gray-800 border-gray-200 p-2 rounded-xl outline-none focus:border-blue-400 duration-500"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-black"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 font-bold text-white">
                <button
                  onClick={handleClose}
                  className="bg-red-600 px-5 py-1.5 rounded-lg shadow-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => changeUserData(user.id)}
                  className="bg-yellow-500 px-5 py-1.5 rounded-lg shadow-lg"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Profile_Edit_Modal>
    </span>
  );
};

const Profile_Edit_Modal = styled.div`
  .modal {
    width: 504px;
    margin: 0 auto;
    margin-top: 100px;
    position: absolute;
    left: 0px;
  }
`;

export default ProfileEditModal;
