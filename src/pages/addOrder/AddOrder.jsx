import React, { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { ordersInputs } from "../../formSource";
import ImageIcon from "@mui/icons-material/Image";

const AddOrder = () => {
  const { closeSidbar } = useContext(SidebarContext);
  const [files, setFiles] = useState();
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
    console.log(info);
  };

  return (
    <main>
      <Sidebar />
      <div className={`container_conetnt ${closeSidbar ? "closeSideber" : ""}`}>
        <Navbar />
        <div className="form_new">
          <form action="">
            <div className="image">
              <img
                src={
                  files
                    ? URL.createObjectURL(files[0])
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="inputs">
              <div className="input_file">
                <label htmlFor="imgUser">
                  Image: <ImageIcon />
                </label>
                <input
                  type="file"
                  id="imgUser"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              {ordersInputs
                ? ordersInputs.map((input, index) => {
                    return (
                      <div className="input_item" key={index}>
                        <label htmlFor="username">{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          id={input.id}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
            <button className="btn_submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddOrder;
