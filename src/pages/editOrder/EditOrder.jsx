import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { ordersInputs } from "../../formSource";
import ImageIcon from "@mui/icons-material/Image";
import { ordersData } from "../../data";

const EditOrder = () => {
  const { closeSidbar } = useContext(SidebarContext);
  const [files, setFiles] = useState();
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
    console.log(info);
  };

  useEffect(() => {
    const singleData = ordersData.find((item) => item.id === Number(id));
    setInfo(singleData);
  }, []);

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
                          value={info[input.id]}
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

export default EditOrder;
