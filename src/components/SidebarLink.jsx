import React from "react";
import { dashboardMenu } from "../data/dummy";
import { Link } from "react-router-dom";

const SidebarLink = ({ onHandleClick, isClicked, infos: { title, menu } }) => {
  return (
    <>
      <h1 className=" px-[35px] py-[15px] text-normal font-bold uppercase rounded-md bg-[#e0e6ed66] ">
        {title}
      </h1>
      <li className=" px-[20px] ">
        <ul>
          {menu.map((me, index) => {
            if (!me.subMenu) {
              return (
                <li key={index}>
                  <Link className=" block p-[12.5px] rounded-md hover:bg-[#e0e6ede6]">
                    <div className=" flex items-center">
                      {/* icon */}
                      {me.icon}
                      {/* name */}
                      <span className=" capitalize ml-3">{me.name}</span>
                      {/* or arrow */}

                      {me.subMenu && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 ml-auto"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      )}
                    </div>
                  </Link>
                </li>
              );
            }

            return (
              <li key={index}>
                <Link
                  onClick={() => onHandleClick(`${me.name}`)}
                  className=" block p-[12.5px] rounded-md hover:bg-[#e0e6ede6]"
                >
                  <div className=" flex items-center">
                    {/* icon */}
                    {me.icon}
                    {/* name */}
                    <span className=" capitalize ml-3">{me.name}</span>
                    {/* or arrow */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 ml-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </Link>

                {me.subMenu && (
                  <ul
                    style={{
                      height: isClicked[`${me.name}`]
                        ? `${me.height}px`
                        : "0px",
                    }}
                    className={` mb-2 overflow-hidden  transition-all duration-300`}
                  >
                    {me.subMenu.map((el, index) => {
                      return (
                        <li key={index}>
                          <a
                            href="#"
                            className=" h-full  w-full px-[45px] py-[12.5px]   rounded-md hover:bg-[#e0e6ed66] text-light-gray hover:text-blue-600 duration-200 flex items-center gap-2 "
                          >
                            <span className=" inline-block bg-slate-400 w-2 h-0.5  rounded-sm"></span>
                            <span>{el}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
};

export default SidebarLink;
