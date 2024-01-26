import React, { useContext, useState } from "react";
import { stateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import { dashboardMenu } from "../data/dummy";

const Sidebar = () => {
  let initialState = {
    dashboard: true,
    invoice: false,
    users: false,
    pages: false,
    authentication: false,
  };
  const { activeMenu, toggleSidebar } = useContext(stateContext);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (identifier) => {
    initialState = { ...initialState, dashboard: false };

    setIsClicked({ ...initialState, [identifier]: true });
  };

  return (
    <nav
      className={`  fixed w-[280px] top-0 bottom-0 shadow-md  duration-300  ${
        activeMenu ? " translate-x-0 " : " -translate-x-full"
      }`}
    >
      <div className=" w-full h-full relative  overflow-y-scroll dark:bg-slate-500  dark:text-white duration-300">
        {/* Logo Start */}
        <div
          className={` fixed w-full bg-white z-40  flex justify-between items-center py-[15px] px-[20px]`}
        >
          <Link to="/" className=" flex gap-2 items-center ">
            <img
              className="w-7"
              src="https://html.vristo.sbthemes.com/assets/images/logo.svg"
              alt=""
            />

            <span className=" text-[25px] font-semibold  dark:text-white">
              VRISTO
            </span>
          </Link>

          <button
            onClick={toggleSidebar}
            className=" p-2 rounded-full duration-200 hover:bg-[#e0e6ede6] hover:text-blue-500 dark:text-white"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={` w-5 h-5 pointer-events-none`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>
        </div>
        {/* Logo End */}

        <div className=" h-[80px]"></div>

        <ul className="">
          {/* Dashboard Menu */}
          <li className=" text-normal font-semibold  px-[20px]">
            <button
              onClick={() => handleClick("dashboard")}
              className=" w-full p-[12.5px] rounded-md hover:bg-[#e0e6ede6] group flex items-center  justify-between "
            >
              <div className=" flex items-center gap-3 ">
                <svg
                  className="shrink-0 text-slate-500 dark:text-white  group-hover:text-sky-600 pointer-events-none"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className=" pointer-events-none ">Dashboard</span>
              </div>
              <svg
                className=" pointer-events-none"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L15 12L9 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>

            <ul
              className={`  overflow-hidden  transition-all duration-300 ${
                isClicked.dashboard ? "h-[205px] " : " h-0 "
              } `}
            >
              <li>
                <a
                  href="#"
                  className=" h-full  w-full px-[45px] py-[12.5px]   rounded-md hover:bg-[#e0e6ed66] text-light-gray dark:text-white  hover:text-blue-600 duration-200 flex items-center gap-2 "
                >
                  <span className=" inline-block bg-slate-400 w-2 h-0.5  rounded-sm"></span>
                  <span>Sales</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" h-full  w-full px-[45px] py-[12.5px]   rounded-md hover:bg-[#e0e6ed66] text-light-gray dark:text-white  hover:text-blue-600 duration-200 flex items-center gap-2 "
                >
                  <span className=" inline-block bg-slate-400 w-2 h-0.5  rounded-sm"></span>
                  <span>Analytics</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" h-full  w-full px-[45px] py-[12.5px]   rounded-md hover:bg-[#e0e6ed66] text-light-gray dark:text-white  hover:text-blue-600 duration-200 flex items-center gap-2 "
                >
                  <span className=" inline-block bg-slate-400 w-2 h-0.5  rounded-sm"></span>
                  <span>Finance</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" h-full  w-full px-[45px] py-[12.5px]   rounded-md hover:bg-[#e0e6ed66] text-light-gray dark:text-white   hover:text-blue-600 duration-200 flex items-center gap-2 "
                >
                  <span className=" inline-block bg-slate-400 w-2 h-0.5  rounded-sm"></span>
                  <span>Crypto</span>
                </a>
              </li>
            </ul>
          </li>
          {/* Dashboard Menu End */}

          {dashboardMenu.map((info, index) => {
            return (
              <SidebarLink
                key={index}
                infos={info}
                isClicked={isClicked}
                onHandleClick={handleClick}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
