import React, { useContext } from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { SidebarContext } from "../../context/sidebarContext";

const Home = () => {
  const { closeSidbar } = useContext(SidebarContext);
  return (
    <main>
      <Sidebar />
      <div className={`container_conetnt ${closeSidbar ? "closeSideber" : ""}`}>
        <Navbar />
        <div>home</div>
      </div>
    </main>
  );
};

export default Home;
