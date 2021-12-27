import React, { Component } from "react";
import StarIcon from "@mui/icons-material/Star";
const Product = (props) => {
  const { title, rating, price, image } = props.data;
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          {rating}
        </div>
      </div>
      <img src={image} alt="" className="product__img" />
      <button className="product__button" type="button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
