import React from "react";

const TodoSidebarButton = ({ text, icon, children }) => {
  return (
    <button
      className={` w-full text-normal font-semibold  flex justify-between items-center px-4 py-3 rounded-md border hover:bg-slate-100 duration-300`}
    >
      <div className=" flex items-center gap-2">
        {icon}
        <span>{text}</span>
      </div>
      {children}
    </button>
  );
};

export default TodoSidebarButton;
