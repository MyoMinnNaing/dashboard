import React from "react";

const HeaderButton = ({ icon }) => {
  return (
    <button
      type="button"
      className=" w-8 h-8 rounded-full flex justify-center items-center  duration-300 bg-[#e0e6ed66] hover:bg-[#e0e6ede6] hover:text-blue-600  "
    >
      {icon}
    </button>
  );
};

export default HeaderButton;
