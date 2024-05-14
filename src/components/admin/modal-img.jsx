import React from "react";

const ModalImg = ({ toggle, setToggle, imgUrl }) => {
  return (
    <div
      onClick={() => setToggle(false)}
      className={
        toggle
          ? "flex items-center justify-center fixed w-full h-full top-0 z-50 bg-black/70 left-0"
          : "hidden"
      }
    >
      <div
        onClick={() => setToggle(false)}
        className="absolute top-10 right-10 py-1.5 hover:bg-[#0f1729] cursor-pointer px-3 bg-white rounded-lg"
      >
        <i class="fa-solid fa-x font-bold text-[#7e8896]"></i>
      </div>
      <div className="w-2/4 rounded-lg object-cover bg-center bg-cover h-3/4 z-50">
        <img
          className="rounded-lg"
          src={`http://164.90.171.135:8080/attachment/getFile/${imgUrl}`}
          alt="img not found"
        />
      </div>
    </div>
  );
};

export default ModalImg;
