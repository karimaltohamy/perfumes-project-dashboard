import "./navbar.scss";
import profileImg from "../../images/avatar-1.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const Navbar = () => {
  const [openList, setOpenList] = useState(false);
  const { setCloseSidebar, closeSidbar } = useContext(SidebarContext);

  return (
    <div className="navbar">
      <div className="container_navbar">
        <div className="flex items-center gap-[30px]">
          <div
            className="btn_menu cursor-pointer"
            onClick={() => setCloseSidebar(!closeSidbar)}
          >
            <MenuIcon />
          </div>
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="info">
          <div className="lang">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
          </div>

          <div className="profile">
            <img
              src={profileImg}
              alt=""
              onClick={() => setOpenList(!openList)}
            />

            <div className={openList ? "list active" : "list"}>
              <div className="porfile_list">
                <img src={profileImg} alt="img-profile" />
                <div className="text">
                  <h4>karim altohamy</h4>
                  <span>Admin</span>
                </div>
              </div>
              <button className="btn_logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
