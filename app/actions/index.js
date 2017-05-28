export const ACTIONS = Object.freeze({
  ADD_PRODUCT: 'ADD_PRODUCT',
  CHANGE_PRODUCT_FORM: 'CHANGE_PRODUCT_FORM',
});

export const addProduct = ({ name, color }) => ({
  type: ACTIONS.ADD_PRODUCT,
  payload: { name, color },
});

export const changeProductForm = ({ name, color }) => ({
  type: ACTIONS.CHANGE_PRODUCT_FORM,
  payload: { name, color },
});
