import React from "react";
import CurrencyFormat from "react-currency-format";
import { useBasket } from "./../../Context/basketContext";

const Subtotal = ({ totalPrice }) => {
  const [{ basket }] = useBasket();
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

        <button className="subtotal__btn-checkout">Proceed to Checkout</button>
      </div>
    </React.Fragment>
  );
};

export default Subtotal;
