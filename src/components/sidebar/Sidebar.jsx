import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../context/sidebarContext";

const Sidebar = () => {
  const { closeSidbar } = useContext(SidebarContext);

  return (
    <div
      className={`sidebar ${
        closeSidbar ? "w-auto close" : " w-auto md:w-[18%]"
      }`}
    >
      <div className="top">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="22"
            fill="none"
            viewBox="0 0 34 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M.002.313v7.282s-.144 2.293 2.103 4.234l12.442 11.855 6.47-.084-1.038-12.787-2.453-2.88-7.71-7.62H.001z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#161616"
              fillRule="evenodd"
              d="M8.18 17.776l5.123-14.024 4.286 4.27-9.41 9.754z"
              clipRule="evenodd"
              opacity="0.06"
            ></path>
            <path
              fill="#161616"
              fillRule="evenodd"
              d="M8.582 17.225l6.23-11.983 2.81 2.81-9.04 9.173z"
              clipRule="evenodd"
              opacity="0.06"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8.258 17.691L25.134.313h8.865v7.314s-.185 2.438-1.425 3.742L21.018 23.688h-6.47l-6.29-5.997z"
              clipRule="evenodd"
            ></path>
          </svg>
          {!closeSidbar && <span>Dashboard</span>}
        </div>
        <div className="links">
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to={"/"}
          >
            <DashboardIcon />
            {!closeSidbar && <span>Dashboard</span>}
          </NavLink>
          <span className="title">PAGES</span>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/users"
          >
            <PeopleOutlineIcon />
            {!closeSidbar && <span>Users</span>}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/products"
          >
            <ShoppingCartIcon />
            {!closeSidbar && <span>Products</span>}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/orders"
          >
            <DeliveryDiningIcon />
            {!closeSidbar && <span>Orders</span>}
          </NavLink>
        </div>
      </div>
      <div className="center"></div>
    </div>
  );
};

export default Sidebar;
