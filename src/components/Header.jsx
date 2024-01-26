import React, { useContext } from "react";
import { stateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";

const Header = () => {
  const { activeMenu, toggleSidebar } = useContext(stateContext);

  return (
    <header className=" fixed  w-full py-3 px-5 bg-white z-50  shadow-md">
      <div className="  grid grid-cols-12">
        {/* Logo */}
        <div className=" col-span-7">
          <div className=" flex items-center">
            <div
              className={`items-center gap-3  ${
                !activeMenu ? " flex" : "hidden"
              }`}
            >
              <Link to="/" className=" flex gap-2 ">
                <img
                  className="w-7"
                  src="https://html.vristo.sbthemes.com/assets/images/logo.svg"
                  alt=""
                />

                <span className=" text-[25px] font-semibold ">VRISTO</span>
              </Link>

              <button
                onClick={toggleSidebar}
                type="button"
                className=" w-8 h-8 rounded-full flex justify-center items-center  duration-300 bg-[#e0e6ed66] hover:bg-[#e0e6ede6] hover:text-blue-600  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div className=" flex items-center gap-2">
              <HeaderButton
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M7 4V2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M17 4V2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M2 9H22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                }
              />

              <HeaderButton
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                }
              />

              <HeaderButton
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      r="3"
                      transform="matrix(-1 0 0 1 19 5)"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      opacity="0.5"
                      d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                }
              />

              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" placeholder:text-gray-500 placeholder:font-bold  block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-600 "
                  placeholder="Search..."
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-span-5 ">
          <div
            className={`   w-fit flex items-center gap-2 ${
              activeMenu ? " mx-auto" : " ml-auto"
            }`}
          >
            <button
              onClick={toggleSidebar}
              type="button"
              className=" w-8 h-8 rounded-full flex justify-center items-center  duration-300 bg-[#e0e6ed66] hover:bg-[#e0e6ede6] hover:text-blue-600  "
            >
              <img
                className=" inline-block w-5 h-5  object-cover  rounded-full"
                src="https://html.vristo.sbthemes.com/assets/images/flags/EN.svg"
                alt="logo"
              />
            </button>

            <HeaderButton
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="3"
                    transform="matrix(-1 0 0 1 19 5)"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    opacity="0.5"
                    d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
