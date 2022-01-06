import React from "react";
import Product from "../../Components/Home/Product";

const Index = () => {
  return (
    <div className="home__wrapper">
      <img
        src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
        alt=""
        className="home__hero-img"
      />
      {/* 
          ===================== Row  ===========================
      */}
      <div className="home__row">
        <Product
          id="1232144"
          title="Amazon Basics Classic School Backpack - Black"
          rating={5}
          price="55.34"
          image="https://images-na.ssl-images-amazon.com/images/I/91cjHJE3JDL._AC_UL116_SR116,116_.jpg"
        />
        <Product
          id="43134"
          title="Shop activity trackers and smartwatches"
          rating={5}
          price="145"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
        />
      </div>
      {/* 
          ===================== Row  ===========================
      */}
      <div className="home__row">
        <Product
          id="533431"
          title="ORIbox Stylus Pen, Fine Point Touch Screen Digital Pencil"
          rating={4}
          price="8.82"
          image="https://m.media-amazon.com/images/I/715RTo-dkkL._AC_SL1500_.jpg"
        />
        <Product
          id="436774"
          title="BENGOO G9000 Stereo Gaming Headset"
          rating={5}
          price="50.44"
          image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
        />
        <Product
          id="4383452"
          title="Oculus Quest 2 — Advanced Virtual Reality headset"
          rating={3}
          price="200"
          image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
        />
      </div>
      {/* 
          ===================== Row  ===========================
      */}
      <div className="home__row">
        <Product
          id="983834"
          title="Cubiker Modern L-Shaped Computer Office Desk, Corner Gaming Desk with Monitor Stand, Home Office Study Writing Table Workstation for Small Spaces"
          rating={5}
          price="950.55"
          image="https://m.media-amazon.com/images/I/71P6wTeeHfL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Index;
