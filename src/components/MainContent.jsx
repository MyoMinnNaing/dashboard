import React, { useContext } from "react";
import { stateContext } from "../contexts/ContextProvider";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import { Sale } from "../pages/dashboard";
import ThemeMode from "./ThemeMode";
import { Todo } from "../pages";

const MainContent = () => {
  const { activeMenu, setActiveMenu } = useContext(stateContext);
  return (
    <div className={`   duration-300 ${activeMenu ? " ml-[280px]" : " ml-0"}`}>
      <div>
        <Header />
      </div>
      <div className=" h-[100px]"></div>
      <div id="main-content" className=" min-h-screen">
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Sale />} />
          <Route path="/analytics" element="Analytics" />

          {/* Apps */}
          <Route path="/todo-list" element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
