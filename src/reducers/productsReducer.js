import { types } from '../types/types';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case types.register:
      return {
        id: action.payload.id,
        name: action.payload.displayName
      };

    case types.list:

      return {};

    default:
      return state;
  }

}

export default productsReducer