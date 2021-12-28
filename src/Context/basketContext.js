import React, { createContext, useContext, useReducer } from "react";

//  prepare data layer
export const BasketContext = createContext();

//  wrap out our app & provide data to all ap

export const BasketProvider = ({ initialState, children, reducer }) => {
  return (
    <BasketContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BasketContext.Provider>
  );
};

//  pull info form the data layer
export const useBasket = () => useContext(BasketContext);
