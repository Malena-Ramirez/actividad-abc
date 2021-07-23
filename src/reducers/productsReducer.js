import { types } from '../types/types';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case types.register:
      return {
        id: action.payload.id,
        name: action.payload.name,
        quantity: action.payload.quantity,
        price: action.payload.price
      };
    case types.list:
      return {
        ...state,
        product: [...action.payload]
      };
    default:
      return state;
  }

}

export default productsReducer