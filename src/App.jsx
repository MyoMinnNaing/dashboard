import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";
import ThemeMode from "./components/ThemeMode";

const App = () => {
  return (
    <main className=" relative">
      <div className=" w-48 h-48 fixed top-0 -right-16 bottom-0 m-auto z-50 ">
        <ThemeMode />
      </div>
      <BrowserRouter>
        <Sidebar />
        <div>
          <MainContent />
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
