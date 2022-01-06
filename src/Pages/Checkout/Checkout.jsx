import React from "react";
import Subtotal from "../../Components/Checkout/Subtotal";
import { useBasket } from "./../../Context/basketContext";
import StarIcon from "@mui/icons-material/Star";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useBasket();
  // const [totalPrice, setTotalPrice] = React.useState();

  const getTotalPrice = () => {
    let t = 0;
    basket.map((p) => (t = t + parseFloat(p.price)));
    return t;
  };
  const removeFromBasket = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  //Animation
  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1,
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/slsm_bottom-banner_1500x120_v2.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3>{user?.email ? `Hey! ${user.email}` : ""}</h3>
          <h2 className="checkout__title">Shopping Basket</h2>
          <FlipMove
            enterAnimation={{
              from: ticketNotVisibleState,
              to: {},
            }}
            leaveAnimation={{
              from: {},
              to: ticketNotVisibleState,
            }}
          >
            {basket.map((p) => (
              <div className="checkout__product" key={p.id}>
                <img
                  src={p.image}
                  alt=""
                  className="checkout__product__image"
                />
                <div className="checkout__product__content">
                  <strong>{p.title}</strong>
                  <div>
                    {Array(p.rating)
                      .fill()
                      .map((_, i) => (
                        <StarIcon key={i} className="checkout__stars" />
                      ))}
                  </div>
                  <div>
                    <strong>$ {p.price}</strong>
                  </div>
                  <button
                    className="btn-remove"
                    onClick={() => {
                      removeFromBasket(p.id);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal totalPrice={getTotalPrice()} />
      </div>
    </div>
  );
};

export default Checkout;
