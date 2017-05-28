import { ACTIONS } from '../actions';
import ProductModel from '../models/Product';

const initialState = Object.freeze({
  products: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return Object.assign({}, state, {
        products: state.products.concat((new ProductModel(
          typeof action.payload !== 'object' ? {} : action.payload,
        )).asObject || []),
      });
    default:
      return state;
  }
};
