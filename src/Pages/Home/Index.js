import React, { Component } from "react";
import Product from "../../Components/Home/Product";

const Index = () => {
  let i = 1;
  const products = [
    {
      id: 1,
      title: "The lean Startup",
      rating: 5,
      price: 11,
      image: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY195_.jpg",
    },
    {
      id: 2,
      title: "The lean Startup",
      rating: 5,
      price: 11,
      image: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY195_.jpg",
    },
    {
      id: 3,
      title: "The lean Startup",
      rating: 5,
      price: 11,
      image: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY195_.jpg",
    },
    {
      id: 4,
      title: "The lean Startup",
      rating: 5,
      price: 11,
      image: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY195_.jpg",
    },
    {
      id: 5,
      title: "The lean Startup",
      rating: 5,
      price: 11,
      image: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY195_.jpg",
    },
  ];
  return (
    <div className="home__wrapper">
      <img
        src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
        alt=""
        className="home__hero-img"
      />
      {products.map((product, index) =>
        index > 1 ? console.log(index) : console.log("boo")
      )}

      {/* <div className="home__row">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div> */}
      <div className="home__row"></div>
    </div>
  );
};

export default Index;
