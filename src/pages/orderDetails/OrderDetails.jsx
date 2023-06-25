import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { SidebarContext } from "../../context/sidebarContext";
import { useParams } from "react-router-dom";
import imgProduct1 from "../../images/product1.webp";
import { ordersData, productsData } from "../../data";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StraightenIcon from "@mui/icons-material/Straighten";
import AbcIcon from "@mui/icons-material/Abc";
import "./orderDetails.scss";

const OrderDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { closeSidbar } = useContext(SidebarContext);
  const { id } = useParams();

  useEffect(() => {
    const d = ordersData.find((item) => item.id === Number(id));
    setSingleData(d);
    console.log(singleData);
  }, []);

  return (
    <main>
      <Sidebar />
      <div className={`container_conetnt ${closeSidbar ? "closeSideber" : ""}`}>
        <Navbar />
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="product_details">
            <div className="image">
              <img src={imgProduct1} alt="img-product" />
            </div>
            <h1 className="title">{singleData.title}</h1>
            <div className="items">
              <div className="item">
                <div className="icon">
                  <AttachMoneyIcon />
                </div>
                <div className="text">
                  <span>perfumes price</span>
                  <h5>${singleData.price}</h5>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <AbcIcon />
                </div>
                <div className="text">
                  <span>perfumes fragrance</span>
                  <h5>{singleData.fragrance}</h5>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <CalendarMonthIcon />
                </div>
                <div className="text">
                  <span>year introduced</span>
                  <h5>{singleData.yearIntroduced}</h5>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <StraightenIcon />
                </div>
                <div className="text">
                  <span>perfumes size</span>
                  <h5>{singleData.size}</h5>
                </div>
              </div>
            </div>
            <div className="description">
              <h4>Prfumes Description</h4>
              <p>{singleData.desc}</p>
            </div>
          </div>
          <div className="client_details">
            <div className="profile">
              <img
                src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                alt="img-profile"
              />
              <div className="text">
                <h4>{singleData.name}</h4>
                <span>Client</span>
              </div>
            </div>
            <div className="items flex items-center justify-start md:justify-center gap-[10px]">
              <div className="item">
                <h5>{singleData.city}</h5>
                <span>City</span>
              </div>
              <div className="item">
                <h5>{singleData.governorate}</h5>
                <span>Governorate</span>
              </div>
              <div className="item">
                <h5>{singleData.postalCode}</h5>
                <span>Postal Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
