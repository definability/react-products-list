import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import productFormReducer from './productFormReducer';

export default combineReducers({
  productsReducer,
  productFormReducer,
});
