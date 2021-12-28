import React from "react";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <React.Fragment>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => {
            <>
              <p>
                {/* Subtotal ({basket.length} items): <strong>{`${value}`}</strong> */}
                Subtotal (0 items): <strong>0$</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> this order constains a gift
              </small>
            </>;
          }}
          decimalScale={2}
          //   value={getBasketTotal(basket)}
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button className="subtotal__btn-checkout">Proceed to Checkout</button>
      </div>
    </React.Fragment>
  );
};

export default Subtotal;
