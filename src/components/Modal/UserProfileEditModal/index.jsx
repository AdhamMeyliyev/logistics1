import React from "react";
import styled from "styled-components";

const UserEditModal = ({ toggleFunc }) => {
  return (
    <div>
      <div class="fixed z-50 inset-0 bg-gray-300 bg-transparent overflow-y-auto h-full w-full lg:px-0 md:px-40 sm:px-10 px-2">
        <div class="relative bg-slate-200 top-20 mx-auto md:p-8 p-3  lg:w-1/3 shadow-lg rounded-md ">
          <h2 class="text-2xl leading-6 font-semibold text-black text-center mb-4">
            Edit user
          </h2>
          <div>
            <div class="mb-3">
              <label for="name" class="block text-sm font-medium text-black">
                User name
              </label>
              <input
                id="nameCl"
                class="w-full  border-2 text-black border-gray-200 p-3 rounded-xl outline-none focus:border-blue-400 focus:bg-gray-300 duration-500"
                placeholder="Enter name"
                value="Kamol "
              />
            </div>
            <div class="mb-3">
              <label for="name" class="block text-sm font-medium text-black">
                {" "}
                User id Number
              </label>
              <input
                id="idNumberCl"
                class="w-full  border-2 text-black border-gray-200 p-3 rounded-xl outline-none focus:border-blue-400 focus:bg-gray-300 duration-500"
                placeholder="Enter id number"
                value="Gs136"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="block text-sm font-medium text-black">
                User phone number
              </label>
              <input
                id="phoneNumberCl"
                class="w-full  border-2 text-black border-gray-200 p-3 rounded-xl outline-none focus:border-blue-400 focus:bg-gray-300 duration-500"
                placeholder="Enter phone number"
                value="998946975511"
              />
            </div>
            <div class="mb-3">
              <div class="relative">
                <label for="name" class="block text-sm font-medium text-black">
                  Password
                </label>
                <input
                  id="passwordCl"
                  type="password"
                  class="w-full  border-2 text-black border-gray-200 p-3 rounded-xl outline-none focus:border-blue-400 focus:bg-gray-300 duration-500"
                  placeholder="Enter password"
                  value="12345678"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-black"
                >
                  <i class="fa-solid fa-eye-slash"></i>
                </button>
              </div>
            </div>
            <UserEditModalBtn>
              <div class="flex justify-between mt-7">
                <button onClick={toggleFunc} type="button" class="btm-close">
                  Close
                </button>
                <button class="btmn">Edit</button>
              </div>
            </UserEditModalBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserEditModalBtn = styled.div`
  .btm-close {
    background-color: #c12f2f;
    width: 125px;
    height: 44px;
    color: #fff;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-weight: 700px;
    letter-spacing: 1px;
    transition: all 0.3s;

    &:active {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      transition: all 0.3s ease-in;
    }
  }

  .btmn {
    width: 175px;
    height: 44px;
    color: #fff;
    background-color: #32c12f;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-weight: 700;
    letter-space: 1px;
    transition: all 0.3s;

    &:active {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      transition: all 0.3s ease-in;
    }
  }
`;

export default UserEditModal;
