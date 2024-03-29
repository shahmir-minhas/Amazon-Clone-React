export const initialState = {
  basket: [],
  user:null,
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state = initialState, action) => {
  console.log("action from reducer:", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      console.log("new basket", newBasket);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("cant find id");
      }
      return {
        ...state,
        basket: newBasket,
      };

      case "SET_USER":
        return {
          ...state,
          user:  action.user,
        };
    default:
      return state;
  }
};
export default reducer;
