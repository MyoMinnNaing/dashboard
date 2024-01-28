import React, { useContext, useEffect, useState } from "react";
import TodoSideBar from "./TodoSideBar";
import TodoContextProvider from "./TodoContextProvider";
import TodoGroup from "./TodoGroup";

const Todo = () => {
  const [show, setShow] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();

    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1200) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [screenSize]);

  return (
    <section className="p-[30px] bg-[#f8f5f5] min-h-screen ">
      <TodoContextProvider>
        <div id="todo" className={`flex ${show && " gap-5"}`}>
          <div
            id="todo-sidebar"
            className={`  bg-white min-h-screen transition-all duration-300 overflow-hidden rounded-md ${
              show ? " p-[20px] min-w-[250px] " : " w-0 p-0"
            }`}
          >
            <TodoSideBar />
          </div>
          <div
            id="todo-content"
            className={` duration-300 flex-1 bg-white p-2 rounded-md min-h-screen `}
          >
            <div className=" flex py-3">
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
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className=" placeholder:text-gray-500  block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-600 "
                  placeholder="Search Task..."
                />
              </div>
            </div>
            <TodoGroup />
          </div>
        </div>
      </TodoContextProvider>
    </section>
  );
};

export default Todo;
