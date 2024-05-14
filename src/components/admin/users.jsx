import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import User from "../../services/users";

const Users = () => {
  const [data, setData] = useState([]);

  const getUserData = async () => {
    const data = await User.getUsers();
    console.log(data.data.data.body.object);
    setData(data.data.data.body.object);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="w-full bg-fixed bg-[url('http://gsrlogistic.uz/static/media/back.e41e920c5b0118532b6f.jpg')] h-screen py-10">
      <Navbar />
      <div className="mt-[80px] flex">
        <div>
          <div className="flex">
            <input
              type="search"
              name=""
              id=""
              placeholder="🔍 id Number..."
              className=" w-[250px] h-[40px] pl-[15px]  rounded-[8px] ml-10 text-[18px]"
            />
            <button className="ml-20 bg-[green] rounded-[8px] px-[30px] text-[white] ">
              User
            </button>
            <button className="ml-10 bg-[green] rounded-[8px] px-[30px] text-[white] ">
              Cashier
            </button>
            <button className="ml-10 bg-[green] rounded-[8px] px-[30px] text-[white] ">
              Manager
            </button>
          </div>
          <br />
          <div className="w-[740px] h-[100px] bg-[#cce7f4] ml-[40px] rounded-[8px] flex ">
            <div>
              <ul className="flex gap-24 text-[14px] text-[gray] p-2">
                <li>Id Number</li>
                <li>Name</li>
                <li>Phone Number</li>
                <li>Password</li>
              </ul>
              <ul className="flex gap-24 text-[14px] text-gray-500 p-2">
                {data.map((item) => (
                  <>
                    <li>{item.idNumber}</li>
                    <li>{item.name}</li>
                    <li>{item.phoneNumber}</li>
                    <li>{item.password}</li>
                  </>
                ))}
              </ul>
            </div>
            <button className="bg-[blue] text-[white] w-[60px] h-[40px] m-7 ml-[90px] rounded-[6px]">
              Edit
            </button>
          </div>
        </div>
        <div className="w-[800px]">
          <h2 className="ml-[430px] mt-[30px] text-[24px]">New User</h2>
          <div className="mt-[20px] w-[550px] h-[480px] bg-[#cce7f4] ml-[205px] rounded-[6px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
