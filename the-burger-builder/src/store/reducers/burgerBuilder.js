import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: {
    bacon: 0,
    cheese: 0,
    lettuce: 0,
    meat: 0
  },
  totalPrice: 0
};

const INGREDIENT_PRICES = {
  bacon: 0.75,
  cheese: 0.5,
  meat: 2.5,
  lettuce: 0.4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
};

export default reducer;
