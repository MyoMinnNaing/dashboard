import { createContext, useState } from "react";

export const stateContext = createContext();

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const toggleSidebar = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <stateContext.Provider value={{ activeMenu, toggleSidebar }}>
      {children}
    </stateContext.Provider>
  );
};

export default ContextProvider;
