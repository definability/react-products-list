import { ACTIONS } from '../actions';

import ProductModel from '../models/Product';

const initialState = Object.freeze({
  product: { name: '', color: ProductModel.AVAILABLE_COLORS[0] },
});

export default (state = initialState, action) => {
  const { name, color } = action.payload || state.product;
  switch (action.type) {
    case ACTIONS.CHANGE_PRODUCT_FORM:
      return Object.assign({}, state, {
        product: {
          name: name || state.product.name,
          color: color || state.product.color,
        },
      });
    default:
      return state;
  }
};
