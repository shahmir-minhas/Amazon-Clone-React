import React, { createContext, useContext, useReducer } from "react";

//  prepare data layer
export const BasketContext = createContext();

//  wrap out our app & provide data to all ap
export const StateProvider = ({ reducer, initialState, childern }) => {
  <BasketContext.Provider value={useReducer(reducer, initialState)}>
    {childern}
  </BasketContext.Provider>;
};

export const useStateValue =()=> useContext(BasketContext);