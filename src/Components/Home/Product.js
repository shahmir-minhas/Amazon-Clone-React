import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useBasket } from "../../Context/basketContext";

const Product = (props) => {
  const { id, title, rating, price, image } = props;
  const [state, dispatch] = useBasket();

  const addToBasket = () => {
    // dispatch data into basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__img" />
      <button className="product__button" type="button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
