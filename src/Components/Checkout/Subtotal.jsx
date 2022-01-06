import React from "react";
import CurrencyFormat from "react-currency-format";
import { useBasket } from "./../../Context/basketContext";
import {  useNavigate } from "react-router-dom";

const Subtotal = ({ totalPrice }) => {
  const [{ basket }] = useBasket();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> this order constains a gift
              </small>
            </>
          )}
          value={totalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
        />

        <button
          className="subtotal__btn-checkout"
          onClick={(e) => navigate("/payment")}
        >
          Proceed to Checkout
        </button>
      </div>
    </React.Fragment>
  );
};

export default Subtotal;
