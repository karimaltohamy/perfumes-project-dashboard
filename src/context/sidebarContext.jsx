import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [closeSidbar, setCloseSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ setCloseSidebar, closeSidbar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
