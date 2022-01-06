import React from "react";
import { useBasket } from "./../../Context/basketContext";

const Payment = () => {
//   const [{ user }] = useBasket();
//   console.log("payment user", user);
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <h2>Delivery Address</h2>
          <div className="payment__address">
            {/* <p>{user}</p> */}
          </div>
        </div>

        <div className="payment__section"></div>

        <div className="payment__section"></div>
      </div>
    </div>
  );
};

export default Payment;
