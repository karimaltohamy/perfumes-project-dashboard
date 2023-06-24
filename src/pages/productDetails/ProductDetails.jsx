import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { SidebarContext } from "../../context/sidebarContext";
import { useParams } from "react-router-dom";
import imgProduct1 from "../../images/product1.webp";
import { productsData } from "../../data";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StraightenIcon from "@mui/icons-material/Straighten";
import AbcIcon from "@mui/icons-material/Abc";
import "./productDetails.scss";

const ProductDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { closeSidbar } = useContext(SidebarContext);
  const { id } = useParams();

  useEffect(() => {
    const d = productsData.find((item) => item.id === Number(id));
    setSingleData(d);
    console.log(singleData);
  }, []);

  return (
    <main>
      <Sidebar />
      <div className={`container_conetnt ${closeSidbar ? "closeSideber" : ""}`}>
        <Navbar />
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
      </div>
    </main>
  );
};

export default ProductDetails;
